import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComingSoon from './Pages/ComingSoon';
import MoviesInTheaters from './Pages/MoviesInTheaters';
import Home from './Pages/Home';

function App() {

    const [movieName, setMovieName] = useState<string>("");
    const [erro, setError] = useState<Error | null>(null);
    const [addToFavorite, setAddToFavorite] = useState<number>(0)

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home movieName={movieName} />} />
                <Route path="/home" element={<Home movieName={movieName} />} />
                {/* <Route path="/coming-soon" element={<ComingSoon movieName={movieName}/>} /> */}
                <Route path="/movies-in-theaters" element={<MoviesInTheaters movieName={movieName} />} />
                {/* <Route path="/top-rated-indian" element={<TopRatedIndian movieName={movieName} />} /> */}
                {/* <Route path="/top-rated-movies" element={<TopRatedMovies movieName={movieName} />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
