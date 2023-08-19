import User from "../src/models/user.model.js";

export const getUsersService = async () => {
    try {
        return await User.find({});
    } catch (error) {
        throw error;
    }

}

export const addUserService = async newUser => {
    console.log(newUser);
    try {
        const userToAdd = new User(newUser);
        return await userToAdd.save()
    } catch (error) {
        throw error;
    }
}
