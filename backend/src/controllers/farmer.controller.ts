import { Request, Response } from 'express';
import prisma from '../utils/prisma';

export const createFarm = async (req: any, res: Response) => {
  const { name, size, soilType, irrigationType, location } = req.body;
  const userId = req.user.id;

  try {
    const farmerProfile = await prisma.farmerProfile.findUnique({
      where: { userId }
    });

    if (!farmerProfile) {
      return res.status(404).json({ error: 'Farmer profile not found' });
    }

    const farm = await prisma.farm.create({
      data: {
        farmerId: farmerProfile.id,
        name,
        size: parseFloat(size),
        soilType,
        irrigationType,
        location,
        crops: "" // Changed from [] for SQLite compatibility
      }
    });

    res.status(201).json(farm);

  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getFarms = async (req: any, res: Response) => {
  const userId = req.user.id;
  try {
    const farms = await prisma.farm.findMany({
      where: { farmerProfile: { userId } },
      include: { 
        riskReports: { take: 1, orderBy: { createdAt: 'desc' } },
        diseaseDetections: { take: 5, orderBy: { createdAt: 'desc' } }
      }
    });
    res.json(farms);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getClimateStats = async (req: Request, res: Response) => {
  res.json({
    riskScore: 42,
    droughtProb: 0.15,
    floodProb: 0.08,
    heatStressProb: 0.88,
    rainfallTrend: [45, 30, 20, 15, 80, 120]
  });
};

export const getRiskReport = async (req: any, res: Response) => {
  const { farmId } = req.params;
  try {
     // If farmId is 'current-farm', find the first farm of the user
     let farm;
     if (farmId === 'current-farm') {
        farm = await prisma.farm.findFirst({
           where: { farmerProfile: { userId: req.user.id } },
           include: { riskReports: { take: 1, orderBy: { createdAt: 'desc' } } }
        });
     } else {
        farm = await prisma.farm.findUnique({
           where: { id: farmId },
           include: { riskReports: { take: 1, orderBy: { createdAt: 'desc' } } }
        });
     }

     if (!farm || !farm.riskReports[0]) {
        return res.json({
           riskScore: 65,
           droughtProb: 0.2,
           floodProb: 0.1,
           heatStressProb: 0.7,
           summary: "Historical data suggests peak heat stress. Local advisories incoming."
        });
     }

     const report = farm.riskReports[0];
     res.json({
        riskScore: report.riskScore,
        droughtProb: report.droughtProb,
        floodProb: report.floodProb,
        heatStressProb: report.heatStressProb,
        summary: report.summary
     });

  } catch (error: any) {
     res.status(500).json({ error: error.message });
  }
};

export const getAdvisories = async (req: any, res: Response) => {
   try {
      const advisories = await prisma.expertAdvisory.findMany({
         take: 10,
         orderBy: { createdAt: 'desc' },
         include: { expertProfile: { include: { user: { select: { name: true } } } } }
      });
      res.json(advisories);
   } catch (error: any) {
      res.status(500).json({ error: error.message });
   }
}
