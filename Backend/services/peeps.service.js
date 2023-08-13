import Peep from "../src/models/peep.model.js";


export const getPeepsService = async () => {
    try {
        return await Peep.find({});
    } catch (error) {
        throw error;
    }
}

export const newPeepService = async newPeep => {

    try {
        // Connect to the database collection and save the new document
        // console.log(newPeep);
        const peepToAdd = new Peep(newPeep);
        // saving the document
        return await peepToAdd.save();

    } catch (error) {
        throw error;
    }


}
