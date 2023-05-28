import { useState, useEffect } from "react";
import IMovieList from "../model/IMovie";
import { getComingSoon } from "../service/FetchMovies";
import { filterByName } from "../service/FilterByName";
import MovieSection from "../component/MovieSection/MovieSection";

function ComingSoon({ movieName, page }: { movieName: string, page?: string }) {

    const [moviesList, setMoviesList] = useState<IMovieList[]>([]);
    const [title, setTitle] = useState<string>("");

    useEffect(() => {
        const fetchMovies = async () => {
            const list = await getComingSoon();

            if (page === 'home') {
                setMoviesList(list.slice(0, 4))
            } else {
                setMoviesList(list)
            }
            setTitle('Coming Soon');
        }
        fetchMovies()
    }, []);

    let filter = filterByName(movieName, moviesList);

    return (
        <MovieSection title={title} moviesList={filter || moviesList} url={`/coming-soon`} page={page} />
    )
}

export default ComingSoon;