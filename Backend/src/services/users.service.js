import User from "../models/user.model.js";

export const addUserService = async newUser => {
    // console.log(newUser);
    try {
        const emailCheck = await User.findOne({ email: newUser.email })
        const userNameCheck = await User.findOne({ userName: newUser.userName })

        if (emailCheck === null && userNameCheck === null) {
            const userToAdd = new User(newUser);

            return await userToAdd.save()
        }
        throw new Error()


    } catch (error) {
        return { error: 'Credentials are already in the system' }
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






}
