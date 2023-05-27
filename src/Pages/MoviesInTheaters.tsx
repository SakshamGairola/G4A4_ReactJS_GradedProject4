import { useState, useEffect } from "react";
import IMovieList from "../model/IMovie";
import { getMoviesInTheaters } from "../service/FetchMovies";

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

    let filter = '';

    return (
        <div>MoviesInTheaters</div>
    )
}

export default MoviesInTheaters;