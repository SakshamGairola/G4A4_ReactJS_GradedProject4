import IMovieList, { IMovieObj } from '../../model/IMovie'
import { AddToFavouriteContext } from '../../service/createContext'
import { Button } from 'react-bootstrap'
import MovieCard from './MovieCard'
import "./movieList.css"

function MovieSection({ title, moviesList, url, nameData, page }:
    { title: string, moviesList: IMovieObj[], url?: string, nameData?: any, page?: string }) {

    return (
        <AddToFavouriteContext.Consumer>
            {(addToFavoriteFnc) => (
                moviesList.length > 0 && <div className="container" style={{ marginTop: '60px' }}>
                    {
                        title && <h4 className='movie-list-title '>{title}:
                            {page === 'home' && url && <a onClick={() => window.location.href = url} style={{ cursor: 'pointer', fontWeight: '400', fontSize: '1rem' }}>Browse all</a>}
                        </h4>
                    }
                    <div className="card-list-container">
                        {
                            moviesList && moviesList.map(
                                item =>
                                    <MovieCard movieData={item as IMovieList} key={item.id as string} url={url} type={title} nameData={nameData} addToFavoriteFnc={addToFavoriteFnc} />
                            )
                        }
                    </div>
                </div>
            )}
        </AddToFavouriteContext.Consumer>
    )
}

export default MovieSection