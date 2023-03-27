import { lazy } from 'react';
import {Route, Routes} from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Cast from './Cast';
import Reviews from './Reviews';
import Layout from './Layout';

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails')); 

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
          <Route path='cast' element={<div><Cast/></div>}/>
          <Route path='reviews' element={<div><Reviews/></div>}/>
        </Route>
        </Route>
      </Routes>
    </div>
  );
};
