import getCast from "../api/CastApi";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const Cast = () => {
   const [cast, setCast] = useState('');
   const { movieId } = useParams();

   useEffect(()=>{
    async function GetCastInfo(){
        try{
            const data = await getCast(movieId);
            setCast(data.cast);
        }
        catch(error){
            console.log(error)
        }
    }

    GetCastInfo();
}, [movieId])

return <ul>
    {cast && cast.map(person => {
        return (
            <li key={person.id}>
                <img src={person.profile_path && `https://image.tmdb.org/t/p/original/${person.profile_path}`} alt={person.name} className={css.photo}/>
                <p className={css.name}>{person.name}</p>
                <p>Character: {person.character}</p>
            </li>
        )
    })}
</ul>
}

export default Cast;