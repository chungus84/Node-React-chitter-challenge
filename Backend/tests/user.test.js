import { expect } from "chai";
import Peep from "../src/models/peep.model.js";
import chai from "chai";
import chaiHttp from "chai-http";
import server from '../index.js';
import testPeeps from './testData/samplePeeps.js';
import User from "../src/models/user.model.js";
import testUser from "./testData/sampleUser.js";


chai.use(chaiHttp);

describe('User Tests', () => {

    const testServer = chai.request(server).keepOpen();
    beforeEach(async () => {
        try {
            await User.deleteMany()
            console.log(`Database is clear`);
        } catch (error) {
            console.log(`Error when clearing database ${error.message}`);
            throw new Error()
        }
    })
    it('should create a new user', async () => {
        let user = {
            fName: "Joe",
            lName: "Blogs",
            email: "test@test.com",
            userName: "jblog88",
            password: "password",
        }

        const res = await testServer.post('/sign-up').send(user)


        expect(res).to.have.status(201);
        expect(res.body.newUser).to.have.nested.property('fName')

    });

    it('should not allow the user to login ', async () => {
        let user = {
            fName: "Joe",
            lName: "Blogs",
            email: "test@test.com",
            userName: "jblog88",
            password: "password",
        }
        await testServer.post('/sign-up').send(user)

        const testEmail = "testing@email.com"
        const testPassword = "pass"

        const res = await testServer.post('/login').send(testEmail, testPassword)

        expect(res.body.user?.error !== undefined).true;
        expect(res.body.user).to.have.property('error')

    });
    it('should allow user to login', async () => {
        let user = {
            fName: "Joe",
            lName: "Blogs",
            email: "test@test.com",
            userName: "jblog88",
            password: "password",
        }
        await testServer.post('/sign-up').send(user)

        const testEmail = "test@test.com"
        const testPassword = "password"

        const res = await testServer.post('/login').send(testEmail, testPassword)

        expect(res).to.have.status(200);
        expect(res.body.user?.error === undefined).false;
    })


})
