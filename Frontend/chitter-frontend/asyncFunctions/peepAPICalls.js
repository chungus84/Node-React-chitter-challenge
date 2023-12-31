import axios from 'axios';


export const getPeeps = async peep => {
    try {
        const res = await axios.get(import.meta.env.VITE_CHITTERURL);
        if (Array.isArray(res.data) && res.data?.length > 0) return { peeps: res.data, status: res.status }
        // console.log(res.data[1]);
        throw new Error(`There are no peeps to get, please start peeping`);
    } catch (error) {
        return {
            peeps: [],
            status: error.response?.status ?? 204,
            error: {
                type: `get`,
                message: `Data not currently available from the server: ${error.message ?? error.response.message}`
            }
        }
    }
}

export const addPeep = async (peep, user) => {
    console.log(user);
    const data = { peep: peep.message, user: user }
    try {
        const res = await axios.post(import.meta.env.VITE_CHITTERURL, data);

        return res.data;
    } catch (error) {
        return error;

    }
}


export const addUser = async user => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_CHITTERURL}/sign-up`, user)
        return res.data
    } catch (error) {
        return error
    }


}
