import React from 'react';
import { useEffect } from 'react';
import MovieCard from '../../components/moviecard/MovieCard';
import { getMoviesAction } from '../../store/actions/movie';
import { useSelector, useDispatch } from 'react-redux';
import styles from './assets/HomePage.module.scss';
import { BASE_URL_IMAGE } from '../../constant/constant';

export default function HomePage() {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movie.listMovie.list);
  console.log('movies', movieList);

  useEffect(() => {
    dispatch(getMoviesAction());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {movieList?.results?.map((item, index) => {
          return (
            <div key={index}>
              <MovieCard
                title={item.title}
                picture={
                  item.backdrop_path
                    ? `${BASE_URL_IMAGE}` + item.backdrop_path
                    : `${BASE_URL_IMAGE}` + item.poster_path
                }
                id={item.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
