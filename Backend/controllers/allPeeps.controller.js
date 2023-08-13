import { getPeepsService } from "../services/peeps.service.js";

export const allPeeps = async (req, res) => {
    try {
        const peeps = await getPeepsService();
        res.json(peeps);
    } catch (error) {
        res.status(404).json({ error: `Not found` });
    }
}
