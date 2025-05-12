import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import useAuthHeader from "../../common/authHeader";

const getAll = () => {
    return axios.get(`${BASE_URL}/api/activity`, {
        headers: useAuthHeader()
    });
}

const ActivityService = {
    getAll
}

export default ActivityService;

