import {NavLink, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/movies'>Movies</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:movieId' element={<MovieDetails/>}>
          <Route path='/movies/:movieId/cast' element={<div><Cast/></div>}/>
          <Route path='/movies/:movieId/reviews' element={<div><Reviews/></div>}/>
        </Route>
      </Routes>
    </div>
  );
};
