import User from "../src/models/user.model";

export const getUsersService = async () => {
    try {
        return await User.find({});
    } catch (error) {
        throw error;
    }

}
