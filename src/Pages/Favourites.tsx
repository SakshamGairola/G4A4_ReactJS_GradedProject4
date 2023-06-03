import { useEffect, useState } from "react"
import IMovieList from "../model/IMovie"
import { getFavourite, removeFromFavourite } from "../service/FetchMovies";
import { filterByName } from "../service/FilterByName";
import Loader from "../component/Shared/Loader";
import MovieSection from "../component/MovieSection/MovieSection";
import Nofavourite from "./NoFavourite";

function Favourites({ movieName }: { movieName: string }) {

    const [moviesList, setMovieList] = useState<IMovieList[]>([]);

    useEffect(() => {
        const helper = async () => {
            let list = await getFavourite();
            setMovieList(list);
        }
        helper();
    }, []);

    const moviesListData = (movieData: any, type: string) => {
        removeFromFavourite(movieData, type)
            .then(async res => {
                setMovieList(await getFavourite());
            })
    }

    let filter = filterByName(movieName, moviesList);

    if (moviesList.length === 0) return <Nofavourite />

    return (
        <MovieSection title={"Favorite"} moviesList={filter || moviesList} nameData={moviesListData} url={'/favourite'} />
    )
}

export default Favourites