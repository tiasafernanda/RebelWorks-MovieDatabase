import React from 'react';
import './assets/MovieCard.scss';

export default function MovieCard({ ...props }) {
  const { title, id, picture, category } = props;
  return (
    <div className='cardMovie'>
      <div className='card' id={id}>
        <img src={picture} alt={title} />
        <p>{category}</p>
        <h1>{title}</h1>
      </div>
    </div>
  );
}
