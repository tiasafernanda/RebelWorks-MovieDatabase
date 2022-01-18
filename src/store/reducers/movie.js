import {
  GET_MOVIES_BEGIN,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAIL,
  GET_MOVIE_DETAIL_BEGIN,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_DETAIL_FAIL,
  GET_SIMILAR_MOVIES_BEGIN,
  GET_SIMILAR_MOVIES_SUCCESS,
  GET_SIMILAR_MOVIES_FAIL,
} from '../../constant/type';

const initialState = {
  listMovie: {
    loading: false,
    error: null,
    list: [],
  },
  detailMovie: {
    loading: false,
    error: null,
    detail: {},
  },
  similarMovie: {
    loading: false,
    error: null,
    similar: [],
  },
};

export const movie = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_MOVIES_BEGIN:
      return {
        ...state,
        listMovie: {
          ...state.listMovie,
          loading: true,
          error: null,
        },
      };
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        listMovie: {
          ...state.listMovie,
          loading: false,
          error: null,
          list: payload,
        },
      };
    case GET_MOVIES_FAIL:
      return {
        ...state,
        listMovie: {
          ...state.listMovie,
          loading: false,
          error: error,
          list: [],
        },
      };
    case GET_MOVIE_DETAIL_BEGIN:
      return {
        ...state,
        detailMovie: {
          ...state.detailMovie,
          loading: true,
          error: null,
        },
      };
    case GET_MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        detailMovie: {
          ...state.detailMovie,
          loading: false,
          error: null,
          detail: payload,
        },
      };
    case GET_MOVIE_DETAIL_FAIL:
      return {
        ...state,
        detailMovie: {
          ...state.detailMovie,
          loading: false,
          error: error,
          detail: [],
        },
      };
    case GET_SIMILAR_MOVIES_BEGIN:
      return {
        ...state,
        similarMovie: {
          ...state.similarMovie,
          loading: true,
          error: null,
        },
      };
    case GET_SIMILAR_MOVIES_SUCCESS:
      return {
        ...state,
        similarMovie: {
          ...state.similarMovie,
          loading: false,
          error: null,
          similar: payload,
        },
      };
    case GET_SIMILAR_MOVIES_FAIL:
      return {
        ...state,
        similarMovie: {
          ...state.similarMovie,
          loading: false,
          error: error,
          similar: [],
        },
      };
  }
};
