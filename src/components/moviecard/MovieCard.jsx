import React from 'react';
import { Link } from 'react-router-dom';
import styles from './assets/MovieCard.module.scss';

export default function MovieCard({ ...props }) {
  const { title, id, picture } = props;
  return (
    <div className={styles.container}>
      <Link to={`/movie/${id}`}>
        <div className={styles.card} id={id}>
          <img src={picture} alt={title} />
          <h1>{title}</h1>
        </div>
      </Link>
    </div>
  );
}
