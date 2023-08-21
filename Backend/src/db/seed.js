import mongoose from "mongoose";
import User from "../models/user.model.js";
import Peep from "../models/peep.model.js";


mongoose.connect("mongodb://127.0.0.1:27017/chitterdev")
const seedDB = async () => {


    try {
        console.log('clearing DB');
        await User.deleteMany({})
        await Peep.deleteMany({})
        console.log('clearing DB complete');
    } catch (e) {
        console.log(e.message);
    }


    try {
        console.log(`populating users`);
        await User.create({ fName: `Bob`, lName: `Bobinson`, email: `bob@bob.com`, userName: `bobbob`, password: `password` });
        await User.create({ fName: `Holly`, lName: `Hollyson`, email: `holly@hollyson.com`, userName: `hollyh`, password: `swordfish` });

        console.log(`populating users complete`);
    } catch (e) {
        console.log(e.message);
    }



    const peepArray = [
        { message: 'Hi There' },
        { message: 'Hello' },
        { message: 'This is a peep' },
        { message: 'So is this' },
        { message: 'Im angry' },
        { message: 'AAAAAAAAAGGGGGGHHHHH' },

    ]

    try {
        console.log(`finding users`);
        const users = await User.find({});
        let userArray = [];
        users.map(user => userArray.push(user.userName))
        console.log(userArray);
        console.log(`found users`);

        console.log(`populating peeps`);
        peepArray.forEach(async currentPeep => {
            console.log(currentPeep);
            const userName = userArray[0]
            userArray.reverse()
            console.log(userName);
            const data = { message: currentPeep.message, userName: userName }
            const savedPeep = await Peep.create(data);
            const currentUser = await User.findOne({ userName: userName });
            currentUser.peeps.push(savedPeep);
            currentUser.save()

        });
        console.log(`populating peeps complete`);
    } catch (e) {
        console.log(e.message);
    }



    console.log('seeding has finished');


}

seedDB();
