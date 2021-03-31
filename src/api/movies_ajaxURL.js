import axios from 'axios';

export const GetMovies = (value) => {
    const res =  axios.get(`http://www.omdbapi.com/?t=${value}&plot=full&apikey=88e45ea8`);
    return res;
}