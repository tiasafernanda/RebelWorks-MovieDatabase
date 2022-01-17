import { takeEvery, put } from '@redux-saga/core/effects';
import {
  GET_MOVIES_BEGIN,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAIL,
  GET_SIMILAR_MOVIES_BEGIN,
  GET_SIMILAR_MOVIES_SUCCESS,
  GET_SIMILAR_MOVIES_FAIL,
} from '../../constant/type';
import axios from 'axios';
import { BASE_URL } from '../../constant/constant';

function* getMovies() {
  try {
    const res = yield axios.get(
      `${BASE_URL}/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
    );
    console.log('res', res);
    yield put({
      type: GET_MOVIES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: GET_MOVIES_FAIL,
      error: err,
    });
  }
}

function* getSimilarMovies(action) {
  const { movie_id } = action;
  try {
    const res = yield axios.get(
      `${BASE_URL}/movie/${movie_id}/similar?api_key=${process.env.REACT_APP_API_KEY}`
    );
    console.log('res', res);
    yield put({
      type: GET_SIMILAR_MOVIES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: GET_SIMILAR_MOVIES_FAIL,
      error: err,
    });
  }
}

export function* watchGetMovies() {
  yield takeEvery(GET_MOVIES_BEGIN, getMovies);
}

export function* watchGetSimilarMovies() {
  yield takeEvery(GET_SIMILAR_MOVIES_BEGIN, getSimilarMovies);
}
