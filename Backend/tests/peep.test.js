import { expect } from "chai";
import Peep from "../src/models/peep.model.js";
import chai from "chai";
import chaiHttp from "chai-http";
import server from '../index.js';
import testPeeps from './testData/samplePeeps.js';
const testPeepArray = testPeeps.peeps;

chai.use(chaiHttp);

describe('Testing Peep request on the database', () => {
    const testServer = chai.request(server).keepOpen();

    beforeEach(async () => {
        try {
            await Peep.deleteMany();
            console.log(`Database has been cleared`);
        } catch (error) {
            console.log(`Error clearing Database`);
            throw new Error();
        };
        try {
            await Peep.insertMany(testPeepArray);
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
            expect(res.body.length).to.equal(testPeepArray.length);
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
