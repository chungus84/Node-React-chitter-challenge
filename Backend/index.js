import express from 'express';
import dotenv from 'dotenv';
import main from './src/db/main.js';
import bodyParser from 'body-parser';

import { router as getUsers } from './routes/getUsers.js';
import { router as getPeeps } from './routes/getPeeps.js';
import { router as newPeep } from './routes/newPeep.js'

const app = express();
dotenv.config({ path: `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''}` });

const HOST = process.env.HOST;
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use('/', getPeeps);
app.use('/new', newPeep);

console.log(HOST);
console.log(PORT);

main();

const server = app.listen(PORT, HOST, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is listening at http://${SERVERHOST}:${SERVERPORT}`);
})
