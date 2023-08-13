import mongoose from "mongoose";
import Peep from "./peep.model";

const userSchema = new mongoose.Schema({
    fName: { type: String, required: true },
    lName: { type: String, required: true },
    email: { type: String, required: true },
    userName: { type: String, required: true },
    password: { type: String, required: true },
    peeps: [Peep],
});

const User = mongoose.model(`User`, userSchema);

export default User;
