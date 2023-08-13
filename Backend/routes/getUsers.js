import express from 'express';
import { allUsers } from '../controllers/allUsers.controller.js';

export const router = express.Router();

router.route('/')
    .get(allUsers)
