import React from 'react';
import './assets/MovieCard.scss';
import Rating from '@mui/material/Rating';

export default function MovieCard({ ...props }) {
  const { title, id, picture, category, rating } = props;
  return (
    <div className='cardMovie'>
      <div className='card' id={id}>
        <img src={picture} alt={title} />
        <div className='cardOverview'>
          <p>{category}</p>
          <Rating
            name='read-only'
            precision={0.1}
            value={rating}
            sx={{ color: 'white' }}
            size='small'
            readOnly
          />
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
}
