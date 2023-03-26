import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import getTrendingMovies from "components/api/TrendingMoviesApi";
import css from './Home.module.css';

const Home = () => {
    const [items, setItems] = useState([])
    
    useEffect(()=>{
        async function GetItems(){
            const data = await getTrendingMovies();
            setItems([...data.results]);
        }

        GetItems();
    }, [])

    console.log(items)

    return(
        <main>
            <h1 className={css.title}>Trending now</h1>
            <ul>
                {items && items.map((item)=><li key={item.id}><Link to={`movies/${item.id}`} className={css.link}>{item.title || item.name}</Link></li>)}
            </ul>
        </main>
    )
}

export default Home;