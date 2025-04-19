import express, { Router } from "express";
import {
    pilihWaktuWawancaraOti,
    pilihWaktuWawancaraHima,
    getAllWawancara
} from '@controllers/wawancaraControllers';
import { authenticateToken } from '@middlewares/auth';
import { sudahMemilihOti, sudahMemilihHima } from '@middlewares/sudahMemilih';

const router: Router = express.Router();

router.post('/oti/:wawancaraId', authenticateToken, sudahMemilihOti, pilihWaktuWawancaraOti);
router.post('/hima/:wawancaraId', authenticateToken, sudahMemilihHima, pilihWaktuWawancaraHima);

router.get('/', getAllWawancara);
export default router;