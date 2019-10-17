import React, { Component } from 'react';
import MoviePoster from './../movie-poster/movie-poster';
import './movie-list.scss';

const MovieList = ({ movies, sortOrder }) => {

    let sortedMovies = movies;

    switch(sortOrder){
        case 'rank': {
            sortedMovies.sort((a, b) => a.rank - b.rank);
            break;
        }
        case 'releaseDate': {
            sortedMovies.sort((a, b) => a.releaseDate - b.releaseDate);
            break;
        }
        default: {
            sortedMovies.sort((a, b) => a.rank - b.rank);
            break;
        }
    }

    return (
        <div className='movie-list'>
            {
                sortedMovies.map(movie => {
                    return (
                        <MoviePoster key={movie.id} details={movie}/>
                    );
                })
            }
        </div>
    );
    
};

export default MovieList;