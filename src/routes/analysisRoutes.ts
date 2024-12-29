import express from 'express';
import { getDeadliestAttackTypes, getHighestCasualtyRegions } from '../controllers/analysisController';

const router = express.Router();

router.get('/deadliest-attack-types', getDeadliestAttackTypes);
router.get('/highest-casualty-regions', getHighestCasualtyRegions);

export default router;
