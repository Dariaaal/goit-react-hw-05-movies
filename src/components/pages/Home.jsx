import { useEffect, useState } from "react";
import getTrendingMovies from "components/api/TrendingMoviesApi";

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
            <ul>
                {items && items.map((item)=><li key={item.id}>{item.title || item.name}</li>)}
            </ul>
        </main>
    )
}

export default Home;