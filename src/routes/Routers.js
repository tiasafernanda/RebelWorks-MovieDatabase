import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homepage/HomePage';
import MovieDetail from '../pages/moviedetail/MovieDetail';
import NowPlaying from '../pages/nowplaying/NowPlaying';
import SimilarMovie from '../pages/similarmovie/SimilarMovie';

export default function Routers() {
  return (
    <Routes>
      <Route path='/rebelworks-moviedatabase' exact element={<HomePage />} />
      <Route path='/rebelworks-moviedatabase/movie/:id' exact element={<MovieDetail />} />
      <Route path='/rebelworks-moviedatabase/nowplaying' exact element={<NowPlaying />} />
      <Route path='/rebelworks-moviedatabase/movie/:id/similar' exact element={<SimilarMovie />} />
    </Routes>
  );
}
