import { Router } from 'express';
import { createFarm, getFarms, getClimateStats, getRiskReport, getAdvisories } from '../controllers/farmer.controller';
import { authenticate, authorize } from '../middlewares/auth.middleware';

const router = Router();

router.use(authenticate);
router.use(authorize(['FARMER', 'ADMIN', 'EXPERT']));

router.post('/farms', createFarm);
router.get('/farms', getFarms);
router.get('/climate-stats', getClimateStats);
router.get('/risk/:farmId', getRiskReport);
router.get('/advisories', getAdvisories);

export default router;
