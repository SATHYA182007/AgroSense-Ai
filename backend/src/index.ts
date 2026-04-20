import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

import authRoutes from './routes/auth.routes';
import farmerRoutes from './routes/farmer.routes';
import expertRoutes from './routes/expert.routes';
import adminRoutes from './routes/admin.routes';

// Middlewares
app.use(helmet());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.use('/api/auth', authRoutes);
app.use('/api/farmer', farmerRoutes);
app.use('/api/expert', expertRoutes);
app.use('/api/admin', adminRoutes);

app.listen(PORT, () => {
  console.log(`AgroSense AI Backend running on http://localhost:${PORT}`);
});

export { prisma };
