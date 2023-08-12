import { expect } from "chai";
import Peep from "../src/models/peep.js";

describe('Peep tests', () => {
    it('should return an instance of peep', () => {
        const testPeepMessage = "This is a test peep";
        const mockUser = {
            fname: "Test",
            lName: "Testerston",
            email: `test@tes.com`,
            userName: `test38`,
            password: `swordfish`
        }
        const testPeep = new Peep(mockUser, testPeepMessage);

        expect(testPeep).instanceOf(Peep);
        expect(testPeep).to.have.property('message');
    })
})
