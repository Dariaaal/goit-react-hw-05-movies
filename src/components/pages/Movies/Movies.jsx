import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import getSearchQueryMovies from "components/api/SearchQueryMovies";
import Searchbar from "components/Searchbar/Searchbar";
import css from './Movies.module.css'

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [moviesQuery, setMoviesQuery] = useState(() => {
          return window.localStorage.getItem('moviesQuery') ?? '';
        });

    searchParams.get('movieId');

    useEffect(()=>{

      if (moviesQuery === '') {
        return;
      }

      setSearchParams({ query: moviesQuery });

        async function GetQuery(){
           try{
            const data = await getSearchQueryMovies(moviesQuery);
            console.log(data.results)
            setMovies([...data.results]);
            localStorage.setItem('moviesQuery', moviesQuery);
           }
           catch(error){
            console.log(error)
           }
        }

        GetQuery();
    }, [moviesQuery, setSearchParams])

    const onSearchSubmit = value => {
      setMoviesQuery(value);
    }

    return <div>
    <Searchbar handleSearch={onSearchSubmit}/>
  <ul>
    {movies && movies.map(movie => {
      return (
        <li key={movie.id}>
          <Link to={`${movie.id}`} className={css.link}>{movie.title || movie.name}</Link>
        </li>
      )
    })}
  </ul>
    </div>

}

export default Movies;