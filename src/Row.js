import React,{useState,useEffect} from 'react';
import axios from './axios';
import './Row.css';

const base_url= "https://image.tmdb.org/t/p/original/";
function Row({title,fatchUrl,isLargeRow}) {
    const [movies,setMovies] = useState([]);
    // A snipett of code that runs on a specific condition
    useEffect(()=>{
        async function fatchData(){
            const request = await axios.get(fatchUrl);
            setMovies(request.data.results);
            // console.log(request.data.results);
            return request;
        }
        fatchData();
        
    },[fatchUrl]);
    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie =>(
                    <img key={movie.id} className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movies.name}></img>  //{`${base_url}${movies.poster_path}`}
                ))};
            </div>
        </div>
    )
}

export default Row
