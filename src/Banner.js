import React, { useState,useEffect } from 'react'
import axios from "axios";
import requests from './requests';
function Banner(fatchurl) {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fatchData(){
            const request = await axios.get(fatchurl);
            // setMovie(request.data.results[Math.floor(Math.random*request.data.results.length-1)]);
            console.log(request.data.results);
            return request;
        };
        fatchData();
    }, [fatchurl])
    return (
        
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: "center center"
        }}>
            <div className="banner_content">
                <h1>
                    {movie?.name || movie?.title}
                </h1>
            </div>
            
        </header>
    )
}

export default Banner;
