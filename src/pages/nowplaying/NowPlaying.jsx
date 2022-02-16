import React, { useEffect, useState } from 'react';
import rebelWorksLogo from './assets/rebelworks.png';
import { Link } from 'react-router-dom';
import styles from './assets/NowPlaying.module.scss';
import MovieCard from '../../components/moviecard/MovieCard';
import { getMoviesAction } from '../../store/actions/movie';
import { useSelector, useDispatch } from 'react-redux';
import { BASE_URL_IMAGE } from '../../constant/constant';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  ul: {
    '& .MuiPaginationItem-root': {
      color: '#fff',
    },
  },
}));

export default function NowPlaying() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movie.listMovie.list);

  useEffect(() => {
    dispatch(getMoviesAction());
  }, [dispatch]);

  const [page, setPage] = useState(1);
  const [showPage, setShowPage] = useState(false);

  const handlePage = (e) => {
    e.preventDefault();
    setPage(parseInt(e.target.textContent));
    setShowPage(true);
  };

  useEffect(() => {
    dispatch(getMoviesAction(page));
  }, [dispatch, page, showPage]);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to='/rebelworks-moviedatabase'>
          <img src={rebelWorksLogo} alt='' />
        </Link>
      </div>
      <div className={styles.category}>
        <h1>Now Playing</h1>
      </div>
      {/* Card Group */}
      <div className={styles.cardContainer}>
        <div className={styles.cardGroup}>
          {movieList?.results?.map((item, index) => {
            return (
              <div key={index}>
                <Link to={`/rebelworks-moviedatabase/movie/${item.id}`}>
                  <MovieCard
                    title={item.title}
                    picture={
                      item.poster_path
                        ? `${BASE_URL_IMAGE}` + item.poster_path
                        : `${BASE_URL_IMAGE}` + item.backdrop_path
                    }
                    id={item.movie_id}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.pagination}>
        <Stack spacing={2} color='primary'>
          <Pagination
            count={movieList.total_pages}
            onChange={handlePage}
            hidePrevButton
            hideNextButton
            color='primary'
            classes={{ ul: classes.ul }}
          />
        </Stack>
      </div>
    </div>
  );
}
