import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/';

const API_KEY = '593700439a076bb032ad3ac2a00bd9c1';

async function getCast (id) {
    const response = await axios.get(`${BASE_URL}3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    return response.data; 
}

export default getCast;
