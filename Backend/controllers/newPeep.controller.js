import { newPeepService } from "../services/peeps.service.js";

export const newPeep = async (req, res) => {
    try {
        // take data in the req body

        // send to database to add to peeps collection
        // return object added
        console.log(req.body);
        const newPeep = await newPeepService(req.body);
        res.status(201).json({ newPeep });
    } catch (error) {
        res.status(400).send(`New Peep has failed`);
    }
}
