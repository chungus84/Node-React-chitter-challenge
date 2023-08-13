import express from 'express'
import { allPeeps } from '../controllers/allPeeps.controller.js';

export const router = express.Router();

router.route('/')
    .get(allPeeps)
