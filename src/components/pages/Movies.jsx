import { useEffect, useState } from "react";
import { Link, useSearchParams, NavLink, useLocation } from "react-router-dom";
import getSearchQueryMovies from "components/api/SearchQueryMovies";
import Searchbar from "components/Searchbar";

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [moviesQuery, setMoviesQuery] = useState('');

    const movieId = searchParams.get('movieId');

    useEffect(()=>{

      if (moviesQuery === '') {
        return;
      }

      setSearchParams({ query: moviesQuery });

        async function GetQuery(){
            const data = await getSearchQueryMovies(moviesQuery);
            console.log(data.results)
            setMovies([...data.results]);
        }

        GetQuery();
    }, [moviesQuery, searchParams])

    const onSearchSubmit = value => {
      setMoviesQuery(value);
    }

    return <div>
    <Searchbar handleSearch={onSearchSubmit}/>
  <ul>
    {movies && movies.map(movie => {
      return (
        <li key={movie.id}>
          <Link to={`${movies.id}`}>{movie.title || movie.name}</Link>
        </li>
      )
    })}
  </ul>
    </div>

}

export default Movies;

// export default function MoviesPage() {
//   const location = useLocation();
//   const [moviesQuery, setMoviesQuery] = useState(() => {
//     return window.localStorage.getItem('moviesQuery') ?? '';
//   });
//   const [urlQuery, setUrlQuery] = useSearchParams();
//   const [movies, setMovies] = useState([]);
//   const currentSearchParam = urlQuery.get('query');

//   useEffect(() => {
//     if (moviesQuery === '') {
//       return;
//     }

//     setUrlQuery({ query: moviesQuery });

//     async function getMovies() {
//       try {
//         const movs = await searchMovies(moviesQuery);
//         setMovies([...movs]);
//         localStorage.setItem('moviesQuery', moviesQuery);
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     getMovies();
//   }, [moviesQuery, setUrlQuery]);

//   useEffect(() => {
//     if (currentSearchParam) {
//       setMoviesQuery(currentSearchParam);
//     }
//   }, [currentSearchParam]);

//   const onFormSubmit = value => {
//     setMoviesQuery(value);
//   };
//   return (
//     <div>
//       <Searchbar handleSearch={onFormSubmit} />
//       {movies.length !== 0 && (
//         <ul>
//           {movies &&
//             movies.map(movie => {
//               const { id, title } = movie;
//               return (
//                 <li key={id}>
//                   <NavLink
//                     to={`${id}`}
//                     state={{
//                       from: location,
//                       label: 'back to search results',
//                       originPath: '/movies',
//                     }}
//                   >
//                     {title}
//                   </NavLink>
//                 </li>
//               );
//             })}
//         </ul>
//       )}
//     </div>
//   );
// }