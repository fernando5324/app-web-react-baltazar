import axios from 'axios';
import {uriBase} from './common'

export const SearchMovies = (data) => {
    const res =  axios.post(`${uriBase}/api/movies/list/search`,data);
    return res;
}

export const SearchMoviesForCategories = (data) => {
    const res =  axios.post(`${uriBase}/api/movies/list/search/categories/`,data);
    return res;
}

export const SearchMoviesById = (movieId) => {
    const res =  axios.get(`${uriBase}/api/movies/${movieId}`);
    return res;
}

export const SaveMovie = (data) => {
    const res =  axios.post(`${uriBase}/api/movies/save/`,data);
    return res;
}