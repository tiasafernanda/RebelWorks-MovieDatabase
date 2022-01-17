import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homepage/HomePage';

export default function Routers() {
  return (
    <Routes>
      <Route path='/' exact element={<HomePage />} />
    </Routes>
  );
}
