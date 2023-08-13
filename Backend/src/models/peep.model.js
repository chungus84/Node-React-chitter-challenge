import mongoose from "mongoose";

const peepSchema = new mongoose.Schema({
    message: { type: String, required: true }
});

const Peep = mongoose.model(`Peep`, peepSchema);

export default Peep;
