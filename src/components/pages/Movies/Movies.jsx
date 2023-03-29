import { useEffect, useState } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import getSearchQueryMovies from "components/api/SearchQueryMovies";
import Searchbar from "components/Searchbar/Searchbar";
import css from './Movies.module.css'

const Movies = () => {

    const location = useLocation();
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const searchQuery = searchParams.get('query');

    useEffect(()=>{

      if (!searchQuery) {
        return;
      }

        async function GetQuery(){
           try{
            const data = await getSearchQueryMovies(searchQuery);
            setMovies([...data.results]);
           }
           catch(error){
            console.log(error)
           }
        }

        GetQuery();
    }, [searchQuery, setSearchParams])

    const onSearchSubmit = value => {
      setSearchParams({ query: value });
    }

    return <div>
    <Searchbar handleSearch={onSearchSubmit}/>
  <ul>
    {movies && movies.map(movie => {
      return (
        <li key={movie.id}>
          <Link to={`${movie.id}`}  state={{from: location}} className={css.link}>{movie.title || movie.name}</Link>
        </li>
      )
    })}
  </ul>
    </div>

}

export default Movies;