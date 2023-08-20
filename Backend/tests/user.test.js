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


        // const testUser = new User({ fName, lName, email, userName, password });
        const res = await testServer.post('/sign-up').send(user)

        // console.log(res);
        expect(res).to.have.status(201);
        expect(res.body.newUser).to.have.nested.property('fName')
        // expect(testUser).instanceOf(User);
        // expect(testUser).to.have.nested.property('fName');
    });
    it('should throw a 400 error as it is missing fName', async () => {
        let user = {
            lName: "Blogs",
            email: "test@test.com",
            userName: "jblog88",
            password: "password",

        }

        const res = await testServer.post('/sign-up').send(user)
        expect(res).to.have.status(400)
        expect(res.error.text).to.equal(`New User has failed`)
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

        console.log(res.status);

    })

})
