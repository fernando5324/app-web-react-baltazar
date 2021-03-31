import axios from 'axios';
import {uriBase} from './common'

export const GetListCategories = (typeId) => {
    const res =  axios.get(`${uriBase}/api/generic/list/categories/${typeId}`);
    return res;
}
