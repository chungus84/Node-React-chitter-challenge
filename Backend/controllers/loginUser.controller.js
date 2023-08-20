import { loginUserService } from "../services/users.service.js";

export const loginUser = async (req, res) => {
    // console.log(req.body);
    try {
        const { email, password } = req.body;
        const user = await loginUserService(email, password);
        // console.log(user);
        res.send({ message: `login was successful`, user })
    } catch (error) {
        res.status(404).json({ error: 'User Not Found' });
    }
}
