import mongoose from "mongoose";

const main = async () => {
    console.log(`Connecting to database at ${process.env.DBURI}`);
    try {
        await mongoose.connect(process.env.DBURI);
        console.log(`Connected to DB`);
    } catch (error) {
        console.log(error);
    }

}

export default main;
