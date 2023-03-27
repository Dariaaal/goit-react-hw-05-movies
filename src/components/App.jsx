import {Route, Routes} from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';
import Layout from './Layout';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        fontSize: 24,
        color: '#010101'
      }}
    >
      <header><Navigation/></header>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='movies' element={<Movies/>}/>
        <Route path='movies/:movieId' element={<MovieDetails/>}>
          <Route path='movies/:movieId/cast' element={<div><Cast/></div>}/>
          <Route path='movies/:movieId/reviews' element={<div><Reviews/></div>}/>
        </Route>
        </Route>
      </Routes>
    </div>
  );
};
