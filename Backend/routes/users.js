import express from 'express';
import { allUsers } from '../controllers/allUsers.controller.js';
import { newUser } from '../controllers/addUser.controller.js';

export const router = express.Router();

router.route('/')
    .get(allUsers)

router.route('/')
    .post(newUser)
