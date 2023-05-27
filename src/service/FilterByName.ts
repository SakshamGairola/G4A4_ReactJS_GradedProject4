import IMovieList from "../model/IMovie";

const filterDataByName = (data:string, moviesList:IMovieList[]) => {
    const filterData = moviesList.filter(item => item.title?.toLocaleLowerCase().includes(data.toLowerCase()));
    return filterData;
}

export {
    filterDataByName
};