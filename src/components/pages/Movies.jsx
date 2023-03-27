import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import css from './Movies.module.css'
import getSearchQueryMovies from "components/api/SearchQueryMovies";

const Movies = () => {

    const [movies, setMovies] = useState([
      '1',
      '2',
      '3',
      '4',
      '5',
    ]);
    const [searchParams, setSearchParams] = useSearchParams();
    const movieId = searchParams.get('movieId');

    useEffect(()=>{
        async function GetQuery(){
            const data = await getSearchQueryMovies(searchParams);
            setMovies(prev => [...prev, ...data.results]);
            // console.log(movies)
        }

        GetQuery();
    }, [setMovies])

    // const handleChange = e => {
    //     setValue(e.target.value.toLowerCase());
    //   }

    const handleSubmit = e => {
        e.preventDefault();
        setMovies(movieId);
        // reset();
    }
      
    // const reset = () => {
    //     setValue('');
    // }

    const visibleMovies = movies.filter(movie => movie.includes(movieId));
    return <div>
    <form onSubmit={handleSubmit}>
    <input
      type="text"
      autoComplete="off"
      autoFocus
      className={css.search}
      value={movieId}
      onChange={e => setSearchParams({movieId: e.target.value})}
    />

<button type="submit" onClick={()=> setSearchParams({})}>
     Search
    </button>

  </form>
  <ul>
    {visibleMovies.map(movie => {
      return (
        <li key={movie}>
          <Link to={`${movies}`}>{movie}</Link>
        </li>
      )
    })}
  </ul>
    </div>

}


export default Movies;