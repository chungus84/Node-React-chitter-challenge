import User from "../src/models/user.model.js";

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
    // console.log(await User.findOne({ email: email }));
    // await User.findOne({ email: email }, (err, user) => {
    //     console.log(user);
    //     if (user && (password === user.password)) {
    //         res.send({ message: `Login has been Successful` }, user);
    //     } else {
    //         res.status(404).send({ message: `User detaisl not found` });
    //     }
    // })
    // console.log(password);
    try {
        const user = await User.findOne({ email });
        // console.log(user.password);
        if (user && (user.password === password)) {

            return user
        }
    } catch (error) {
        throw error;
    }

}
