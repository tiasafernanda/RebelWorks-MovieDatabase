import React from 'react';
import rebelWorksLogo from './assets/rebelworks.png';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import MovieCard from '../../components/moviecard/MovieCard';
import { getMoviesAction } from '../../store/actions/movie';
import { useSelector, useDispatch } from 'react-redux';
import './assets/HomePage.scss';
import { BASE_URL_IMAGE } from '../../constant/constant';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper';
SwiperCore.use([EffectFade, Navigation, Pagination]);

export default function HomePage() {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movie.listMovie.list);
  console.log('movies', movieList);

  useEffect(() => {
    dispatch(getMoviesAction());
  }, [dispatch]);

  return (
    <div className='container'>
      <div className='carousel'>
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          slidesPerView={3}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          className='mySwiper'
        >
          {movieList?.results?.map((item) => {
            return (
              <SwiperSlide>
                <Link to='/'>
                  <img
                    src={rebelWorksLogo}
                    alt=''
                    style={{
                      marginLeft: '5rem',
                      marginTop: '2rem',
                      width: '3rem',
                      position: 'absolute',
                    }}
                  ></img>
                </Link>
                <div id={item.id}>
                  <Link to={`/movie/${item.id}`}>
                    <img src={`${BASE_URL_IMAGE}` + item.backdrop_path} alt={item.title} />
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className='nowPlaying'>
        <h1>Now Playing</h1>
        <Link to='/nowplaying'>
          <p>See All {'>'} </p>
        </Link>
      </div>
      <div className='cardContainer'>
        <div className='cardGroup'>
          {movieList?.results?.map((item, index) => {
            return (
              <div key={index}>
                <Link to={`/movie/${item.id}`}>
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
    </div>
  );
}
