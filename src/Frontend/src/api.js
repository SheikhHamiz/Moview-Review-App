import axios from 'axios';
const url = "https://api.themoviedb.org/3/";
const API_KEY = "add your key here";
class Service {
    getMovies = () => {
        return axios.get(`${url}discover/movie?&sort_by=popularity.desc&api_key=${API_KEY}`);
    }
    searchMovies = (movieName) => {
        return axios.get(`${url}search/movie?api_key=${API_KEY}&query=${movieName}`);
    }
    imagePath = (poster) => {
        return `https://image.tmdb.org/t/p/w1280${poster}`;
    }
    getMovieName = (movieId) => {
        return axios.get(`${url}movie/${movieId}?api_key=${API_KEY}`);
    }
}
export default new Service();

