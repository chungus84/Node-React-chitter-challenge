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

export const newPeepService = async (newPeep) => {

    try {

        const peepToAdd = new Peep({ message: newPeep.peep });
        const savedPeep = await peepToAdd.save();
        const userPeep = await User.findOne({ userName: newPeep.user })
        userPeep.peeps.push(savedPeep._id)
        return await userPeep.save()


    } catch (error) {
        throw error;
    }


}
