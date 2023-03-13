import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css";
import { Spinner } from "./Spinner";

export function MovieDetails() {
  const tamañoL = "original";
  const tamañoS = "w300";
  const imgUrl = "https://image.tmdb.org/t/p/";
  const url =
    "https://api.themoviedb.org/3/discover/movie?api_key=31c7ce1306d1c762e375821ed7fe5647";
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [post, setPost] = useState("");
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imgBack, setImgBack] = useState("");
  const [puntuation, setPuntuation] = useState(0);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=31c7ce1306d1c762e375821ed7fe5647`
    )
      .then((resp) => resp.json())
      .then(
        (data) => (
          console.log(data),
          setTitle(data.title),
          setDescription(data.overview),
          setPost(data.poster_path),
          setGenres(data.genres.map((g) => g.name).join(", ")),
          setImgBack(data.backdrop_path),
          setPuntuation(data.vote_average)
        )
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [movieId]);

  // useEffect(() => {
  //   fetch(url)
  //     .then((resp) => resp.json())
  //     .then((data) =>
  //       setMovie(data.results.find((movie) => movie.id == movieId))
  //     )
  //     .then(()=>console.log(movie))
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, [movieId]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div
          className={styles.movieContainer}
          style={{
            backgroundImage: `linear-gradient( rgb(23, 23, 23, 0.5), rgb(193, 193, 193, 0.5)), url(${imgUrl}${tamañoL}${imgBack})`,
          }}
        >
          <img
            className={`${styles.movieCol} ${styles.movieImg}`}
            src={`${imgUrl}${tamañoS}${post}`}
            alt="foto"
          />
          <div className={styles.movieCol}>
            <p className={styles.title}>
              <strong>{title}</strong>
            </p>
            <p className={styles.genre}>{genres}</p>
            <p className={styles.description}>{description}</p>
          </div>
          <div className={styles.puntuacion}>
            <div className={styles.num} style={puntuation>7? {border: "3px solid rgb(0, 217, 0)"}: {border: "3px solid rgb(246, 255, 0)"}}>{Math.round(puntuation)}</div>
            <strong className={styles.text}>puntuacion</strong>
          </div>
        </div>
      )}
    </>
  );
}
