import Card from "react-bootstrap/Card";
import IMovieList from "../../model/IMovie";
import { avgRating } from "../../service/AverageRating";
import { addToFavourite } from "../../service/FetchMovies";
import Rating from "../Shared/Ratings";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function MovieCard({ movieData, classNames, url, type, nameData, addToFavoriteFnc }:
    { movieData?: IMovieList | undefined, classNames?: string, url?: string, type: string, nameData?: any, addToFavoriteFnc?: any }) {

    const imgBasePath = process.env.REACT_APP_IMAGES_BASE_PATH as string;

    if (!movieData) return null;
    if (!avgRating(movieData.ratings)) return null;

    const addToFavoriteType = window.location.pathname.includes('/favourite');
    const toHRef = addToFavoriteType ? `${movieData.id}` : `${url}/:${movieData.id}`;

    const viewMovie = () => {
        window.location.href = toHRef;
    }

    const addFavourite = () => {
        addToFavourite(movieData, type)
        addToFavoriteFnc();
    }
    const removeFavourite = () => {
        nameData(movieData, type);
        addToFavoriteFnc();
    }

    return (
        <Card className={classNames ? classNames : ''}>
            <Card.Img variant="top" src={`${imgBasePath}/${movieData.poster}`} />
            <Card.Body>
                <Card.Title>{movieData.title}</Card.Title>
                <Card.Text><Rating rating={avgRating(movieData.ratings)} numRatings={movieData.ratings?.length} /></Card.Text>
                <div>
                    {!addToFavoriteType && <Button variant='info' active style={{ width: '50%' }} onClick={() => { viewMovie() }}>View Details</Button>}
                    {' '}{addToFavoriteType && <Button variant="danger" active style={{ width: '100%' }} onClick={() => { removeFavourite() }}>- Watchlist</Button>}
                    {!addToFavoriteType && <Button variant="success" active style={{ width: '50%', marginRight: '-10px' }} onClick={() => { addFavourite() }}>+ WatchList</Button>}
                </div>
            </Card.Body>
        </Card >
    )
}

export default MovieCard;