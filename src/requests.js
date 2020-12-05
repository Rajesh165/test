const APIKEY = "4e85074eb50b4ff0b99b7bfae58c32d0";

const requests = {
    fatchTrending: `/trending/all/day?api_key=${APIKEY}`,
    fatchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&language=en-us`,
    fatchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-us`,
    fatchActionMovie: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fatchComedyMovie: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fatchHorrorMovie: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fatchRomancdeMovie: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fatchDocumentries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
}

export default requests;

//    4e85074eb50b4ff0b99b7bfae58c32d0
//    https://api.themoviedb.org/3/movie/550?api_key=4e85074eb50b4ff0b99b7bfae58c32d0