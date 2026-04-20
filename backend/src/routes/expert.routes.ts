import { Router } from 'express';
import { publishAdvisory, getExpertAdvisories } from '../controllers/expert.controller';
import { authenticate, authorize } from '../middlewares/auth.middleware';

const router = Router();

router.use(authenticate);
router.use(authorize(['EXPERT', 'ADMIN']));

router.post('/advisory', publishAdvisory);
router.get('/advisories', getExpertAdvisories);

export default router;
