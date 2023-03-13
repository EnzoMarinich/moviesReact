import { MoviesGrid } from "./componentes/MoviesGrid";
import styles from "./App.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { MovieDetails } from "./componentes/MovieDetails";
import BackButton from "./componentes/BackButton";


function App() {
  return (
    <BrowserRouter>
      <div>
        <header className={styles.header}>
          <BackButton/>
          <Link to="/">
            <h1 className={styles.title}>MOVIES</h1>
          </Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<MoviesGrid />} />
            <Route path="/details/:movieId" element={<MovieDetails />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
