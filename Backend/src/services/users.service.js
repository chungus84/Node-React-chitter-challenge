import User from "../models/user.model.js";

export const getUsersService = async () => {
    try {
        return await User.find({});
    } catch (error) {
        throw error;
    }

}

export const addUserService = async newUser => {
    // console.log(newUser);
    try {
        const userToAdd = new User(newUser);
        return await userToAdd.save()


    } catch (error) {
        throw error;
    }
}

export const loginUserService = async (email, password) => {

    try {
        const user = await User.findOne({ email })
        // console.log(user);
        if (user && (password === user.password)) {

            return user
        }
        const loginError = new Error('User not found')
        throw loginError


    } catch (error) {
        return { error: `These credentials do not match` }
    }



    // console.log(user.password);



}
