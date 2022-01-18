import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homepage/HomePage';
import MovieDetail from '../pages/moviedetail/MovieDetail';

export default function Routers() {
  return (
    <Routes>
      <Route path='/' exact element={<HomePage />} />
      <Route path='/movie/:id' element={<MovieDetail />} />
    </Routes>
  );
}
