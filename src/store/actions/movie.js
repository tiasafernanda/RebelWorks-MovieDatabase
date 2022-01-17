import { GET_MOVIES_BEGIN, GET_SIMILAR_MOVIES_BEGIN } from '../../constant/type';

export const getMoviesAction = () => {
  return {
    type: GET_MOVIES_BEGIN,
  };
};

export const getSimilarMoviesAction = (movie_id) => {
  return {
    type: GET_SIMILAR_MOVIES_BEGIN,
    movie_id,
  };
};
