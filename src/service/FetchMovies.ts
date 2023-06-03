import axios from "axios";

const apiBaseURL: string = process.env.REACT_APP_MOVIES_DATA_BASE_URL as string;


const getMovies = async (id: string, type: string) => {
    let list: any[] = [];
    if (type.toLocaleLowerCase().includes('coming soon')) {
        list = await getComingSoon();
    } else if (type.toLocaleLowerCase().includes('movies in theaters')) {
        list = await getMoviesInTheaters();
    } else if (type.toLocaleLowerCase().includes('top rated indian')) {
        list = await getTopRatedIndian();
    } else if (type.toLocaleLowerCase().includes('top rated movies')) {
        list = await getTopRatedMovies();
    }
    let movie = list.find((item) => item.id === id);
    return movie;
}

const addToFavourite = async (movieData: any, type: string) => {
    const response = axios.post(`${apiBaseURL}favourite`, movieData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.data)
        .then(() => alert("Added to favourite"))
        .catch((error: Error | undefined) => alert('Already added'));
    return response;
}
const removeFromFavourite = async (movieData: any, type: string) => {
    const response = await axios.delete(`${apiBaseURL}favourite/${movieData.id}`)
        .then(response => response.data)
        .catch((error: Error | undefined) => console.log('Already deleted', error));
    return response;
}

const getComingSoon = async () => {
    const response = await axios.get(`${apiBaseURL}movies-coming`).then(response => response.data);
    return response;
}

const getMoviesInTheaters = async () => {
    const response = await axios.get(`${apiBaseURL}movies-in-theaters`).then(response => response.data);
    return response;
}

const getTopRatedIndian = async () => {
    const response = await axios.get(`${apiBaseURL}top-rated-india`).then(response => response.data);
    return response;
}

const getTopRatedMovies = async () => {
    const response = await axios.get(`${apiBaseURL}top-rated-movies`).then(response => response.data);
    return response;
}

const getFavourite = async () => {
    const response = await axios.get(`${apiBaseURL}favourite`).then(response => response.data);
    return response;
}




export {
    getMovies,
    getComingSoon,
    getMoviesInTheaters,
    getTopRatedIndian,
    getTopRatedMovies,
    getFavourite,
    addToFavourite,
    removeFromFavourite
}