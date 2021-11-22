import React from 'react';

const Movie=(props)=>{
   const {data} = props;

   const setVoteColor=(rating)=>{
       if(rating>7)
        return 'green';
        else if(rating>=5)
         return 'orange';
         else return 'red';
   }
    return(
       <div className='movie'>
         <img src={data.poster_path ? "https://image.tmdb.org/t/p/original/"+data.poster_path :"./tmdb-logo.jpg"} alt={data.title}/>
         <div className="movie-info">
           <h3>{data.title}</h3>
           <span className={setVoteColor(data.vote_average)}>{data.vote_average}</span>
         </div>
         <div className="movie-over">
           <h2>Overview :</h2>
           <p>{data.overview}</p>
         </div>
       </div>
    )
}

export default Movie;