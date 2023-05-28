import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComingSoon from './Pages/ComingSoon';
import MoviesInTheaters from './Pages/MoviesInTheaters';
import TopRatedIndian from './Pages/TopRatedIndian';
import TopRatedMovies from './Pages/TopRatedMovies';
import Home from './Pages/Home';
import { AddToFavouriteContext } from './service/createContext';
import { getFavourite } from './service/FetchMovies';
import NoPage from './Pages/NoPage';
import Favourites from './Pages/Favourites';
import Header from './component/Navbar/Header';
import MovieDetailCardContainer from './component/MovieDetails/MovieDetailCardContainer';

function App() {

    const [movieName, setMovieName] = useState<string>("");
    const [error, setError] = useState<Error | null>(null);
    const [addToFavorite, setAddToFavorite] = useState<number>(0)
    const searchData = (message: string) => {
        setMovieName(message);
    }

    const helper = async () => {
        try {
            const list = await getFavourite();
            setAddToFavorite(list.length)
        } catch (error) {
            setError(error as Error)
        }
    }

    useEffect(() => {
        helper();
    })

    const addToFavoriteFnc = () => {
        helper();
    }

    return (
        <><AddToFavouriteContext.Provider value={addToFavoriteFnc}>
            <Router>
                <Header searchData={searchData} moviesList={addToFavorite} />
                <Routes>
                    <Route path="/" element={<Home movieName={movieName} />} />
                    <Route path="/home" element={<Home movieName={movieName} />} />
                    <Route path="/coming-soon" element={<ComingSoon movieName={movieName} page={''} />} />
                    <Route path="/movies-in-theaters" element={<MoviesInTheaters movieName={movieName} page={''} />} />
                    <Route path="/top-rated-indian" element={<TopRatedIndian movieName={movieName} page={''} />} />
                    <Route path="/top-rated-movies" element={<TopRatedMovies movieName={movieName} page={''} />} />
                    <Route path="/favourite" element={<Favourites movieName={movieName} />} />
                    <Route path="/movies-in-theaters/:id" element={<MovieDetailCardContainer />} />
                    <Route path="/coming-soon/:id" element={<MovieDetailCardContainer />} />
                    <Route path="/top-rated-indian/:id" element={<MovieDetailCardContainer />} />
                    <Route path="/top-rated-movies/:id" element={<MovieDetailCardContainer />} />
                    <Route path="/favourite/:id" element={<MovieDetailCardContainer />} />
                    <Route path='*' element={<NoPage />} />
                </Routes>
            </Router>
        </AddToFavouriteContext.Provider></>

    );
}

export default App;
