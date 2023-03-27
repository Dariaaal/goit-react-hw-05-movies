import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/';

const API_KEY = '593700439a076bb032ad3ac2a00bd9c1';

async function getSearchQueryMovies (query) {
    const response = await axios.get(`${BASE_URL}3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
    return response.data; 
}

export default getSearchQueryMovies;

// // https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false


// import axios from 'axios';

// export async function getSearchQueryMovies(query) {
//   const searchMovs = await axios
//     .get(
//       `https://api.themoviedb.org/3/search/movie?api_key=b0b2ab4c759c38b967f7e88f564a31ce&language=en-US&query=${query}&page=1&include_adult=false`
//     )
//     .then(res => {
//       const moviesArray = res.data.results.map(result => {
//         const { id, title } = result;
//         return {
//           id,
//           title,
//         };
//       });
//       return moviesArray;
//     });
//   return searchMovs;
// }