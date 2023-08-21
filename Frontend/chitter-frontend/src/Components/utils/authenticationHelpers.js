import axios from "axios";

export const checkLogin = async ({ email, password }) => {

    const loginResponse = await axios.post(`${import.meta.env.VITE_CHITTERURL}/login`, { email, password });

    const loginStatus = loginResponse.data.user?.error === undefined;

    return { status: loginStatus, user: loginResponse.data.user };
}
