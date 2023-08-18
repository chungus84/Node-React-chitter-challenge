import mongoose from "mongoose";
import Peep from "../src/models/peep.model.js";
import User from "../src/models/user.model.js";


export const getPeepsService = async () => {
    try {
        return await User.find({}, { userName: 1, peeps: 1 }).populate('peeps')


    } catch (error) {
        throw error;
    }
}

export const newPeepService = async newPeep => {

    try {
        // Connect to the database collection and save the new documen
        // console.log(newPeep);
        const peepToAdd = new Peep(newPeep);
        // saving the document
        return await peepToAdd.save();

    } catch (error) {
        throw error;
    }


}
