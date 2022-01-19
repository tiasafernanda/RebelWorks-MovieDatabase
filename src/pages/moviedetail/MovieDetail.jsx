import React from 'react';
import rebelWorksLogo from './assets/rebelworks.png';
import { useEffect } from 'react';
import MovieCard from '../../components/moviecard/MovieCard';
import { getMovieDetailAction, getSimilarMoviesAction } from '../../store/actions/movie';
import { useSelector, useDispatch } from 'react-redux';
import styles from './assets/MovieDetail.module.scss';
import { BASE_URL_IMAGE } from '../../constant/constant';
import { useParams, Link } from 'react-router-dom';
import dayjs from 'dayjs';

export default function MovieDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieDetailAction(id));
  }, [dispatch, id]);
  const movieDetail = useSelector((state) => state.movie.detailMovie.detail);

  useEffect(() => {
    dispatch(getSimilarMoviesAction(id));
  }, [dispatch, id]);
  const movieSimilar = useSelector((state) => state.movie.similarMovie.similar);

  return (
    <div className={styles.container} id={movieDetail.id}>
      <div className={styles.logo}>
        <Link to='/rebelworks-moviedatabase'>
          <img src={rebelWorksLogo} alt=''></img>
        </Link>
      </div>
      <div className={styles.details}>
        <MovieCard
          title={movieDetail.title}
          picture={
            movieDetail.poster_path
              ? `${BASE_URL_IMAGE}` + movieDetail.poster_path
              : `${BASE_URL_IMAGE}` + movieDetail.backdrop_path
          }
          id={movieDetail.id}
        />
        <div className={styles.synopsis}>
          <h1>Synopsis</h1>
          <p>{movieDetail.overview}</p>
          <div className={styles.summary}>
            {movieDetail?.genres?.map((item, index) => {
              return (
                <ul className={styles.genre} key={index}>
                  <li>{item.name}</li>
                </ul>
              );
            })}
            <p>Release Date : {dayjs(movieDetail.release_date).format('DD MMMM YYYY')}</p>
            <p>Runtime : {movieDetail.runtime} Minutes</p>
            <p>Budget : ${movieDetail.budget}</p>
            <p>Rating : {movieDetail.vote_average}</p>
          </div>
        </div>
      </div>
      <div className={styles.similar} id={movieDetail.id}>
        <h1>You Might Also like This!</h1>
        {/* <Link to={`/rebelworks-moviedatabase/movie/${movieDetail.id}/similar`}>
          <p>See All {'>'} </p>
        </Link> */}
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.cardGroup}>
          {movieSimilar?.results?.map((item, index) => {
            return (
              <div key={index}>
                <div>
                  <Link to={`/rebelworks-moviedatabase/movie/${item.id}`}>
                    <MovieCard
                      title={item.title}
                      rating={item.vote_average}
                      picture={
                        item.poster_path
                          ? `${BASE_URL_IMAGE}` + item.poster_path
                          : `${BASE_URL_IMAGE}` + item.backdrop_path
                      }
                      id={item.movie_id}
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
