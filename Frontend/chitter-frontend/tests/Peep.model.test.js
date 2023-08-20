
import PeepModel from "../src/Components/utils/Peep.model.js";

describe('Peeps Model Test', () => {
    test('should should create the object when constructor is called', () => {
        const [_id, message, createdAt, user] = ["64d8f2372e3cfdfa88da2d1e", "This is a test peep", "2023-08-20T19:30:13.396Z", "TestUser"];

        const testPeep = new PeepModel(_id, message, createdAt, user);

        expect(testPeep._id).toBe(_id);
        expect(testPeep.message).toBe(message);
        expect(testPeep.createdAt).toBe(createdAt);
        expect(testPeep.userName).toBe(user);
        expect(testPeep).toBeInstanceOf(PeepModel)
    })
})
