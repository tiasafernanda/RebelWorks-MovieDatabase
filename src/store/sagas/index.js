import { all } from 'redux-saga/effects';
import { watchGetMovies, watchGetSimilarMovies } from './movie';

export default function* rootSaga() {
  yield all([watchGetMovies(), watchGetSimilarMovies()]);
}
