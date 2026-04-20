import { Request, Response } from 'express';
import prisma from '../utils/prisma';

export const publishAdvisory = async (req: any, res: Response) => {
  const { advisory, region, crop } = req.body;
  const userId = req.user.id;

  try {
    const expertProfile = await prisma.expertProfile.findUnique({
      where: { userId }
    });

    if (!expertProfile) {
      return res.status(404).json({ error: 'Expert profile not found' });
    }

    const advisoryObj = await prisma.expertAdvisory.create({
      data: {
        expertId: expertProfile.id,
        advisory,
        region,
        crop
      }
    });

    res.status(201).json(advisoryObj);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getExpertAdvisories = async (req: any, res: Response) => {
  const userId = req.user.id;
  try {
    const advisories = await prisma.expertAdvisory.findMany({
      where: { expertProfile: { userId } },
      orderBy: { createdAt: 'desc' }
    });
    res.json(advisories);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
