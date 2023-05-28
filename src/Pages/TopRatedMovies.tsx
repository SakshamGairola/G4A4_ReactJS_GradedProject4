import { useState, useEffect } from "react";
import IMovieList from "../model/IMovie";
import { getTopRatedMovies } from "../service/FetchMovies";
import { filterByName } from "../service/FilterByName";
import MovieSection from "../component/MovieSection/MovieSection";

function TopRatedMovies({ movieName, page }: { movieName: string, page?: string }) {

    const [moviesList, setMoviesList] = useState<IMovieList[]>([]);
    const [title, setTitle] = useState<string>("");

    useEffect(() => {
        const fetchMovies = async () => {
            const list = await getTopRatedMovies();

            if (page === 'home') {
                setMoviesList(list.slice(0, 4))
            } else {
                setMoviesList(list)
            }
            setTitle('Top rated movies');
        }
        fetchMovies()
    }, []);

    let filter = filterByName(movieName, moviesList);

    return (
        <MovieSection title={title} moviesList={filter || moviesList} url={`/top-rated-movies`} page={page} />
    )
}

export default TopRatedMovies