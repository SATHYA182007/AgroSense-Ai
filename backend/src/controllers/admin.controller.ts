import { Request, Response } from 'express';
import prisma from '../utils/prisma';

export const getSystemStats = async (req: Request, res: Response) => {
  try {
    const userCount = await prisma.user.count();
    const farmCount = await prisma.farm.count();
    const advisoryCount = await prisma.expertAdvisory.count();
    const detectionCount = await prisma.diseaseDetection.count();

    res.json({
      users: userCount,
      farms: farmCount,
      advisories: advisoryCount,
      detections: detectionCount,
      systemHealth: '99.9%',
      activeNodes: 142
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true
      },
      orderBy: { createdAt: 'desc' }
    });
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
