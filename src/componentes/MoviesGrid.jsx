import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useLocation } from "react-router";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { Search } from "./Search";
import { SelectorPage } from "./SelectorPage";
import { Spinner } from "./Spinner";

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const query = useQuery();
  const search = query.get("search");

  const url = "https://api.themoviedb.org/3";
  const apiKey = "api_key=31c7ce1306d1c762e375821ed7fe5647";
  const searchUrl = search
  ? `/search/movie?${apiKey}&query=${search}&page=${page}`
  : `/discover/movie?${apiKey}&page=${page}`;



  useEffect(() => {
    fetch(`${url}${searchUrl}`)
      .then((resp) => resp.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [search, page]);

  return (
    <>
      {loading ? (
        <Spinner />
        ) : (
        <>
        <Search />
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </ul>  
        <SelectorPage page={page} setPage={setPage}/>
        </>
      )}
    </>
  );
}
