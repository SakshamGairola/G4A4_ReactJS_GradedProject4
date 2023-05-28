import { useEffect, useState } from "react";
import "./MoviesDetails.css"
import { useParams } from "react-router-dom";
import IMovieList from "../../model/IMovie";
import { getComingSoon, getFavourite, getMoviesInTheaters, getTopRatedIndian, getTopRatedMovies } from "../../service/FetchMovies";
import { Card } from "react-bootstrap";
import MovieDetailCard from "./MovieDetailCard";

function MovieDetailCardContainer() {
    const [movie, setMovie] = useState<IMovieList>({});
    const { id } = useParams();

    useEffect(() => {
        const helper = async () => {
            let list: any[] = [];
            if (window.location.pathname.includes('coming-soon')) {
                list = await getComingSoon();
            } else if (window.location.pathname.includes('movies-in-theaters')) {
                list = await getMoviesInTheaters();
            } else if (window.location.pathname.includes('top-rated-indian')) {
                list = await getTopRatedIndian();
            } else if (window.location.pathname.includes('top-rated-movies')) {
                list = await getTopRatedMovies();
            } else if (window.location.pathname.includes('favourite')) {
                list = await getFavourite();
            }
            let movie = list.find((item: { id: string | undefined; }) => item.id === id?.split(":")[1]);
            setMovie(movie);
        }
        helper();
    }, [id]);

    return (
        <Card style={{ "height": "calc(100vh - 90px)", marginTop: '60px' }}>
            <Card.ImgOverlay>
                <MovieDetailCard movie={movie} />
            </Card.ImgOverlay>
        </Card>
    )
}

export default MovieDetailCardContainer