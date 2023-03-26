import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/';

const API_KEY = '593700439a076bb032ad3ac2a00bd9c1';

async function getTrendingMovies () {
    const response = await axios.get(`${BASE_URL}3/trending/all/day?api_key=${API_KEY}`)
    return response.data; 
}

export default getTrendingMovies;
