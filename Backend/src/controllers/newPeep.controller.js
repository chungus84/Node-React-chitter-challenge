import { newPeepService } from "../services/peeps.service.js";

export const newPeep = async (req, res) => {
    try {
        const newPeep = await newPeepService(req.body);
        res.status(201).json({ newPeep });

    } catch (error) {
        res.status(400).send(`New Peep has failed`);
    }
}
