import { useState, useEffect } from "react";
import IMovieList from "../model/IMovie";
import { getTopRatedIndian } from "../service/FetchMovies";
import { filterByName } from "../service/FilterByName";
import MovieSection from "../component/MovieSection/MovieSection";

function TopRatedIndian({ movieName, page }: { movieName: string, page?: string }) {

    const [moviesList, setMoviesList] = useState<IMovieList[]>([]);
    const [title, setTitle] = useState<string>("");

    useEffect(() => {
        const fetchMovies = async () => {
            const list = await getTopRatedIndian();

            if (page === 'home') {
                setMoviesList(list.slice(0, 4))
            } else {
                setMoviesList(list)
            }
            setTitle('Top rated in Indian');
        }
        fetchMovies()
    }, []);

    let filter = filterByName(movieName, moviesList);

    return (
        <MovieSection title={title} moviesList={filter || moviesList} url={`/top-rated-indian`} page={page} />
    )
}

export default TopRatedIndian;