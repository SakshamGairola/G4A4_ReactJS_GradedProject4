import IMovieList from "../model/IMovie";

const filterByName = (data: string, moviesList: IMovieList[]) => {
    const filterData = moviesList.filter(item => item.title?.toLocaleLowerCase().includes(data.toLowerCase()));
    return filterData;
}

export {
    filterByName
};