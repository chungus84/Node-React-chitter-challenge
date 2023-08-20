import { expect } from "chai";
import Peep from "../src/models/peep.model.js";
import chai from "chai";
import chaiHttp from "chai-http";
import server from '../index.js';
import testPeeps from './testData/samplePeeps.js';
import User from "../src/models/user.model.js";
import testUser from "./testData/sampleUser.js";
const testPeepArray = testPeeps.peeps;
const userTest = testUser

chai.use(chaiHttp);

describe('Testing Peep request on the database', () => {
    const testServer = chai.request(server).keepOpen();

    beforeEach(async () => {
        try {
            await Peep.deleteMany();
            await User.deleteMany();
            console.log(`Database has been cleared`);
        } catch (error) {
            console.log(`Error clearing Database`);
            throw new Error();
        };
        try {
            await User.create(userTest);
            console.log(`Populated user with test data`);
        } catch (error) {
            console.log(error.message);
            throw new Error()
        };
        try {
            await Peep.insertMany(testPeepArray);
            const peeps = await Peep.find({})
            // console.log(peeps);
            const user = await User.findOne({ fName: "Joe" })
            // console.log(user);
            peeps.forEach(peep => user.peeps.push(peep))
            await user.save()
            // console.log(savedUser);
            console.log(`Populated peeps with test data`);
        } catch (error) {
            console.log(`Error populating database with test data`);
            throw new Error();
        }
    });
    describe('/GET peeps', () => {
        it('should return all peeps as an array', async () => {
            const res = await testServer
                .get(`/`)
                .send();

            expect(res).to.have.status(200);
            expect(res.body).to.be.an(`array`);
            expect(res.body[0].peeps.length).to.equal(testPeepArray.length);
        });

    });



    describe('/POST create a peep', () => {
        it('should not create a peep without a message field', async () => {
            const peep = {
                "_id": "5ca7177e0774a968c209a929"
            }

            const res = await testServer
                .post('/')
                .send(peep);

            expect(res).to.have.status(400);
            expect(res).to.have.property('error');
        });
        it('should create a new peep', async () => {
            const user = await User.findOne({ fName: "Joe" })
            const peep = {
                message: "This is a Test Peep"
            }

            const req = {
                body: {
                    peep: peep.message,
                    user: user.userName
                }
            }

            const res = await testServer.post('/').send(req.body);

            console.log(res.text);

            expect(res).to.have.status(201)
            expect(res.body.newPeep.peeps.length).to.equal(3)

        })
    })

})


// describe('Peep tests', () => {
//     it('should return an instance of peep', () => {
//         const testPeepMessage = "This is a test peep";
//         const mockUser = {
//             fname: "Test",
//             lName: "Testerston",
//             email: `test@tes.com`,
//             userName: `test38`,
//             password: `swordfish`
//         }
//         const testPeep = new Peep(mockUser, testPeepMessage);

//         expect(testPeep).instanceOf(Peep);
//         expect(testPeep).to.have.property('message');
//     })
// })
