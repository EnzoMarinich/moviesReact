import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

export function MovieCard({ movie }) {
  const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.movieCard}>
      <Link to={`/details/${movie.id}`}>
        <img
          className={styles.movieImg}
          width={230}
          heigth={345}
          src={imgUrl}
          alt=""
        />
        <div> {movie.title} </div>
      </Link>
    </li>
  );
}
