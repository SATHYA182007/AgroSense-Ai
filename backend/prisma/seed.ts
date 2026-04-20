import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  try {
    await prisma.expertAdvisory.deleteMany();
    await prisma.diseaseDetection.deleteMany();
    await prisma.climateRiskReport.deleteMany();
    await prisma.farmExpense.deleteMany();
    await prisma.farmTask.deleteMany();
    await prisma.farm.deleteMany();
    await prisma.farmerProfile.deleteMany();
    await prisma.expertProfile.deleteMany();
    await prisma.user.deleteMany();
  } catch (e) {
    console.log('No data to clear or tables do not exist yet.');
  }

  const hashedDefaultPassword = await bcrypt.hash('password123', 10);

  // 1. Create Demo Farmer
  const farmerUser = await prisma.user.create({
    data: {
      email: 'farmer@agrosense.ai',
      password: hashedDefaultPassword,
      name: 'Ramesh Kumawat',
      role: 'FARMER',
    },
  });

  const farmerProfile = await prisma.farmerProfile.create({
    data: {
      userId: farmerUser.id,
      district: 'Erode',
      state: 'Tamil Nadu',
      onboardingDone: true,
    }
  });

  // 2. Create Demo Expert
  const expertUser = await prisma.user.create({
    data: {
      email: 'expert@agrosense.ai',
      password: hashedDefaultPassword,
      name: 'Dr. Anita Desai',
      role: 'EXPERT',
    },
  });

  const expertProfile = await prisma.expertProfile.create({
    data: {
      userId: expertUser.id,
      specialization: 'Crop Pathology',
      isVerified: true,
    }
  });

  // 3. Create Demo Admin
  await prisma.user.create({
    data: {
      email: 'admin@agrosense.ai',
      password: hashedDefaultPassword,
      name: 'Global Controller',
      role: 'ADMIN',
    },
  });

  // 4. Create Farm
  const farm = await prisma.farm.create({
    data: {
      farmerId: farmerProfile.id,
      name: 'Emerald Acres - Sector A',
      location: 'Erode, Tamil Nadu',
      crops: 'Organic Paddy',
      size: 12.5,
    },
  });

  // 5. Climate Data
  await prisma.climateRiskReport.create({
    data: {
      farmId: farm.id,
      riskScore: 65,
      droughtProb: 0.2,
      floodProb: 0.1,
      heatStressProb: 0.7,
      summary: 'High humidity expected in 48h. Risk of fungal infection. Maintain proper drainage.',
    }
  });

  // 6. Expert Advisories
  await prisma.expertAdvisory.create({
    data: {
      expertId: expertProfile.id,
      region: 'Tamil Nadu',
      crop: 'Paddy',
      advisory: 'Paddy Stem Borer Alert: Early signs detected in Erode. Recommend spraying Neem oil mix (3%).',
    }
  });

  // 7. Tasks
  await prisma.farmTask.createMany({
    data: [
      { farmId: farm.id, title: 'Spray Bio-Fertilizer', dueDate: new Date(Date.now() + 86400000), category: 'Maintenance' },
      { farmId: farm.id, title: 'Soil Testing Sector B', dueDate: new Date(Date.now() + 172800000), category: 'Testing' },
    ]
  });

  console.log('Seed data created successfully!');
  console.log('Login with: farmer@agrosense.ai / password123');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
