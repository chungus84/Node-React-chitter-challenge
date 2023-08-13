import mongoose from "mongoose";

const main = async () => {
    console.log(`Connecting to database at ${process.env.DBURI}`);
    await mongoose.connect(process.env.DBURI);
}

export default main;
