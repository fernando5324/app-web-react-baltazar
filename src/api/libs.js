import axios from 'axios';
import {uriBase} from './common'

export const SearchLibs = (data) => {
    const res =  axios.post(`${uriBase}/api/libs/list/search`,data);
    return res;
}

