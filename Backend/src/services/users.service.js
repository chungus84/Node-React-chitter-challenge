import User from "../models/user.model.js";

export const addUserService = async newUser => {
    // console.log(newUser);
    try {
        const emailCheck = await User.findOne({ email: newUser.email })
        const userNameCheck = await User.findOne({ userName: newUser.userName })
        console.log(emailCheck);
        console.log(userNameCheck);

        if (emailCheck !== null) { throw new Error() }
        if (userNameCheck !== null) { throw new Error() }
        const userToAdd = new User(newUser);

        return await userToAdd.save()
        // await loginUserService(userToAdd.email, userToAdd.password)
        // return savedUser;


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
