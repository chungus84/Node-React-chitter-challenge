import mongoose from "mongoose";

const peepSchema = new mongoose.Schema({
    message: { type: String, required: true },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    }
});

const Peep = mongoose.model(`Peep`, peepSchema);

export default Peep;
