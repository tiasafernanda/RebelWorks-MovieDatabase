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
import Rating from '@mui/material/Rating';
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper';
SwiperCore.use([EffectFade, Navigation, Pagination]);

export default function HomePage() {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movie.listMovie.list);

  useEffect(() => {
    dispatch(getMoviesAction());
  }, [dispatch]);

  return (
    <div className='container'>
      {/* Carousel Component  */}
      <div className='carousel'>
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          slidesPerView={3}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className='mySwiper'
        >
          {movieList?.results?.map((item) => {
            return (
              <SwiperSlide>
                <Link to='/rebelworks-moviedatabase'>
                  <img
                    src={rebelWorksLogo}
                    alt=''
                    style={{
                      marginLeft: '5rem',
                      marginTop: '2rem',
                      width: '3rem',
                      position: 'absolute',
                      zIndex: '1',
                    }}
                  ></img>
                </Link>
                <div id={item.id} className='swiperContent'>
                  <img src={`${BASE_URL_IMAGE}` + item.backdrop_path} alt={item.title} />
                  <div className='swiperOverview'>
                    <Rating
                      name='read-only'
                      value={item.vote_average}
                      sx={{ color: 'white' }}
                      precision={0.01}
                      readOnly
                    />
                    <h1>{item.title}</h1>
                    <p>{item.overview}</p>
                    <Link to={`/rebelworks-moviedatabase/movie/${item.id}`}>
                      <h2>See Details</h2>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className='nowPlaying'>
        <h1>Now Playing</h1>
        <Link to='/rebelworks-moviedatabase/nowplaying'>
          <p>See All {'>'} </p>
        </Link>
      </div>
      {/* Card Group */}
      <div className='cardContainer'>
        <div className='cardGroup'>
          {movieList?.results?.map((item, index) => {
            return (
              <div key={index}>
                <Link to={`/rebelworks-moviedatabase/movie/${item.id}`}>
                  <MovieCard
                    rating={item.vote_average}
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
