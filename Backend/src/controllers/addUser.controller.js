import { addUserService } from "../services/users.service.js";

export const newUser = async (req, res) => {
    try {
        const newUser = await addUserService(req.body);
        res.status(201).json({ newUser });

    } catch (error) {
        res.status(400).send(`New User has failed`);
    }
}
