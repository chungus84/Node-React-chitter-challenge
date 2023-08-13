import express from 'express';
import { newPeep } from '../controllers/newPeep.controller.js';

export const router = express.Router();

router.route('/')
    .post(
        newPeep
        // (req, res) => { res.end('Posted an new Peep') }

    );
