import User from "../src/models/user.model.js";

export const getUsersService = async () => {
    try {
        return await User.find({});
    } catch (error) {
        throw error;
    }

}
