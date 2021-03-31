import axios from 'axios';
import {uriBase} from './common'

export  const GET = () => {
    const res =  axios.get(`${uriBase}/api/games/list`);
    return res;
}
export const SearchGames = (data) => {
    const res =  axios.post(`${uriBase}/api/games/list/search`,data);
    return res;
}

