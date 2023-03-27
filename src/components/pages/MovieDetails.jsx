import { useEffect, useState } from "react";
import {Link, useParams} from 'react-router-dom';
import getMovieDetails from "components/api/MovieDetails";

const MovieDetails = () => {
  const [details, setDetails] = useState('');
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
    <img src={poster_path && `https://image.tmdb.org/t/p/original/${poster_path}`} alt={title} />
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
    <h3>Additional information</h3>
    <ul>
        <li><Link to={'cast'}>Cast</Link></li>
        <li><Link to={'reviews'}>Reviews</Link></li>
    </ul>
  </div>
}


export default MovieDetails;