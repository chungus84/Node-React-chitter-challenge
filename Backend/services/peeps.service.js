import Peep from "../src/models/peep.model.js";

export const getPeepsService = async () => {
    try {
        return await Peep.find({});
    } catch (error) {
        throw error;
    }
}
