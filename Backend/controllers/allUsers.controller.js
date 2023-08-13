import { getUsersService } from "../services/users.service.js";

export const allUsers = async (req, res) => {
    try {
        const users = await getUsersService();
        res.json(users);
    } catch (error) {
        res.status(404).json({ error: `Not found` });
    }

}
