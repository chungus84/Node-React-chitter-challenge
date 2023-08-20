import express from 'express';

import { newUser } from '../controllers/addUser.controller.js';
import { loginUser } from '../controllers/loginUser.controller.js';


export const router = express.Router();



router.route('/sign-up')
    .post(newUser)

router.route('/login')
    .post(loginUser)
