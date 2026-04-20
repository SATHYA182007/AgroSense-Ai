import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../utils/prisma';
import { z } from 'zod';

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(2),
  role: z.enum(['FARMER', 'ADMIN', 'EXPERT']).default('FARMER'),
});

const generateToken = (userId: string, role: string) => {
  return jwt.sign(
    { id: userId, role },
    process.env.JWT_SECRET || 'fallback_secret',
    { expiresIn: '30d' }
  );
};

export const signup = async (req: Request, res: Response) => {
  try {
    const validatedData = signupSchema.parse(req.body);
    
    // Check existing
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.email },
    });

    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(validatedData.password, 12);

    // Create user and profile
    const user = await prisma.user.create({
      data: {
        email: validatedData.email,
        password: hashedPassword,
        name: validatedData.name,
        role: validatedData.role,
        farmerProfile: validatedData.role === 'FARMER' ? { create: {} } : undefined,
        expertProfile: validatedData.role === 'EXPERT' ? { create: {} } : undefined,
      },
    });

    const token = generateToken(user.id, user.role);

    res.status(201).json({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      token,
    });

  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = generateToken(user.id, user.role);

    res.json({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      token,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
