import React from 'react';
import './movie-detail-box.scss';

const MovieDetailBox = ({ details }) => {
    return (
        <div className='movie-detail-box'>
            <div className='image-wrapper'>
                <img src={details.imageUrl} alt={details.title}/>
            </div>
            <div className='content-wrapper'>
                <h1>{details.title}</h1>
                <div className='metadata'>
                    <span>Released: {details.releaseDate}</span>
                    <span>Rank: {details.rank}</span>
                </div>
                <p>{details.synopsis}</p>
            </div>
        </div>
    )
}

export default MovieDetailBox