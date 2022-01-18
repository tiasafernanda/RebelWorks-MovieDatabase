import { all } from 'redux-saga/effects';
import { watchGetMovieDetail, watchGetMovies, watchGetSimilarMovies } from './movie';

export default function* rootSaga() {
  yield all([watchGetMovies(), watchGetMovieDetail(), watchGetSimilarMovies()]);
}
