import axios from "axios";

axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'aee1b7f0ef9a431caa51e11cac0006bd',
    }
})