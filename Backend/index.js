import express from 'express';
import dotenv from 'dotenv';
import main from './src/db/main.js';
import bodyParser from 'body-parser';
import cors from 'cors';

import { router as userRouter } from './routes/users.js';
import { router as peepsRouter } from './routes/peeps.js';


const app = express();
dotenv.config({ path: `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''}` });

const HOST = process.env.HOST;
const PORT = process.env.PORT;
// app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', peepsRouter);
app.use(`/sign-up`, userRouter);
// app.use('/', newPeep);

// console.log(HOST);
// console.log(PORT);

main();

const server = app.listen(PORT, HOST, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is listening at http://${SERVERHOST}:${SERVERPORT}`);
})

export default server;
