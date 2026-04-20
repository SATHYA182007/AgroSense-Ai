import { Router } from 'express';
import { getSystemStats, getAllUsers } from '../controllers/admin.controller';
import { authenticate, authorize } from '../middlewares/auth.middleware';

const router = Router();

router.use(authenticate);
router.use(authorize(['ADMIN']));

router.get('/stats', getSystemStats);
router.get('/users', getAllUsers);

export default router;
