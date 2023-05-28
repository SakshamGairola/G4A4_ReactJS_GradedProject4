import { useState, useEffect } from "react";
import IMovieList from "../model/IMovie";
import { getMoviesInTheaters } from "../service/FetchMovies";
import { filterByName } from "../service/FilterByName";
import MovieSection from "../component/MovieSection/MovieSection";

function MoviesInTheaters({ movieName, page }: { movieName: string, page?: string }) {

    const [moviesList, setMoviesList] = useState<IMovieList[]>([]);
    const [title, setTitle] = useState<string>("");

    useEffect(() => {
        const fetchMovies = async () => {
            const list = await getMoviesInTheaters();

            if (page === 'home') {
                setMoviesList(list.slice(0, 4))
            } else {
                setMoviesList(list)
            }
            setTitle('Movies in theaters');
        }
        fetchMovies()
    }, []);

    let filter = filterByName(movieName, moviesList);

    return (
        <MovieSection title={title} moviesList={filter || moviesList} url={`/movies-in-theaters`} page={page} />
    )
}

export default MoviesInTheaters;