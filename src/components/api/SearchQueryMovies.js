import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/';

const API_KEY = '593700439a076bb032ad3ac2a00bd9c1';

async function getSearchQueryMovies (query) {
    const response = await axios.get(`${BASE_URL}3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
    return response.data; 
}

export default getSearchQueryMovies;
