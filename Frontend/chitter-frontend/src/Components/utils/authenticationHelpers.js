import axios from "axios";

export const checkLogin = async ({ email, password }) => {

    // console.log(`checkLogin email: ${email}`);
    // console.log(`checkLogin password: ${password}`);
    const loginResponse = await axios.post(`${import.meta.env.VITE_CHITTERURL}/login`, { email, password });

    const loginStatus = loginResponse.data.user?.error === undefined;

    return { status: loginStatus, user: loginResponse.data.user };
}
