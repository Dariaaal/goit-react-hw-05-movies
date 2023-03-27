import { useEffect, useState, useRef } from "react";
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import getMovieDetails from "components/api/MovieDetails";
import css from './MovieDetails.module.css'

const MovieDetails = () => {
  const [details, setDetails] = useState('');
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state ? location.state.from : '/movies')
  const { movieId } = useParams();

  useEffect(()=>{
    async function GetDetails(){
        try{
            const data = await getMovieDetails(movieId);
            setDetails(data);
        }
        catch(error){
            console.log(error)
        }
    }

    GetDetails();
})

  const {poster_path, genres, vote_average, title, overview} = details;
  return <div>
    <Link to={backLinkLocationRef.current} className={css.back}>Go back</Link>
    <div className={css.wrap}>
    <div>
    <img src={poster_path && `https://image.tmdb.org/t/p/original/${poster_path}`} alt={title} className={css.poster}/>
    </div>
    <div>
    <h1>{title}</h1>
    <p>{`User Score: ${vote_average}`}</p>
    <h2>Overview</h2>
    <p>{overview}</p>
    {genres && <h2>Genres</h2>}
    <ul>
        {genres && genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
        ))}
    </ul>
    </div>
    </div>
    <div className={css.additional}>
    <h3>Additional information</h3>
    <ul>
        <li><Link to={'cast'} className={css.link}>Cast</Link></li>
        <li><Link to={'reviews'} className={css.link}>Reviews</Link></li>
    </ul>
    </div>
    <Outlet/>
  </div>
}

export default MovieDetails;