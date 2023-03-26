import { useEffect, useState } from "react";
import css from './Movies.module.css'
import getSearchQueryMovies from "components/api/SearchQueryMovies";

const Movies = () => {

    const [value, setValue] = useState('');
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(()=>{
        async function GetQuery(){
            const data = await getSearchQueryMovies(value);
            setMovies([...data.results]);
            console.log(movies)
        }

        GetQuery();
    }, [])

    const handleChange = e => {
        setValue(e.target.value.toLowerCase());
      }

    const handleSubmit = e => {
        e.preventDefault();
        setMovies(value);
        reset();
    }
      
    const reset = () => {
        setValue('');
    }

    return <form onSubmit={handleSubmit}>

    <input
      type="text"
      autoComplete="off"
      autoFocus
      className={css.search}
      onChange={handleChange}
      value={value}
    />

<button type="submit">
     Search
    </button>

  </form>
}


export default Movies;