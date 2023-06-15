import React from 'react';

const MovieCard = ({movie}) => {
    return (
        <div className="movie">
            <div>
            <p>{movie.Year}</p>
            </div>
            <div>
                <img className='cardImage' src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt="{movie.Title}" />
            </div>
        <div>
            <div className = 'type-container'> 
                <span>{movie.Type}</span>
            </div>    
                <h3>{movie.Title}</h3>
            
        </div>
        </div>    
    );
}

export default MovieCard;