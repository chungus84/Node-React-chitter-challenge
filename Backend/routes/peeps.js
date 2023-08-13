import express from 'express'
import { allPeeps } from '../controllers/allPeeps.controller.js';
import { newPeep } from '../controllers/newPeep.controller.js';

export const router = express.Router();

router.route(`/`)
    .get(allPeeps);

router.route(`/`)
    .post(newPeep);
