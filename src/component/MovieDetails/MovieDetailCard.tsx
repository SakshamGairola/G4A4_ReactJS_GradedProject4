import { useState, useEffect } from "react";
import { Card, Row, Col, Collapse } from "react-bootstrap";
import IMovieList from "../../model/IMovie";
import { avgRating } from "../../service/AverageRating";
import Genres from "../Shared/Genres";
import Rating from "../Shared/Ratings";
import Starts from "../Shared/Starts";
import Loader from "../Shared/Loader";

const imgBaseUrl = process.env.REACT_APP_IMAGES_BASE_PATH as string;

const MovieDetailCard = ({ movie }: { movie: IMovieList }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [open, setOpen] = useState<boolean>(false);
    useEffect(() => {
        if (movie.title) {
            setLoading(false);
        }
    }, [movie]);
    console.log(movie)
    if (loading) return <Loader />;
    return (
        <Card className={"bg-dark text-white"} style={{ "height": "100%" }}>
            <div className="row col">
                <Col md={{ span: 2, offset: 1 }} className="movies-details " style={{ "backgroundImage": `url('${imgBaseUrl}/${movie.poster}')` }}></Col>
                <Col md={{ span: 7 }}>
                    <Card.Body>
                        <Card.Title><h1>{movie.title}</h1></Card.Title>
                        <Card.Text><strong>Year: </strong>{movie.year} - <strong>Duration: </strong>{movie.duration?.toLocaleLowerCase().split('pt')[1]}</Card.Text>
                        <Card.Text
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            className="pointer"
                        ><Rating rating={avgRating(movie.ratings)} numRatings={movie.ratings?.length} /></Card.Text>
                        <Collapse in={open}>
                            <div id="other-ratings-collapse" className='other-ratings-collapse'>
                                <p><strong>Content Rating :</strong> {movie.contentRating}</p>
                                <p><strong>IMDB Rating :</strong> {movie.imdbRating}</p>
                            </div>
                        </Collapse>
                        <Card.Text>{movie.storyline}</Card.Text>
                        <Genres genres={movie.genres} />
                        <Starts starts={movie.actors} />
                        <p><strong>Release Date :</strong> {movie.releaseDate}</p>
                    </Card.Body>
                </Col>
            </div>
        </Card>
    )
}
export default MovieDetailCard;