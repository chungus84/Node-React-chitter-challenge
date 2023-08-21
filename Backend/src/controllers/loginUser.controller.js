import { loginUserService } from "../services/users.service.js";

export const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body;
        const user = await loginUserService(email, password);
        res.send({ user })

    } catch (error) {
        res.status(404).json({ error: 'User Not Found' });
    }
}
