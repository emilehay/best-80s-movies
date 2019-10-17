import React, { Component } from 'react';
import MoviePoster from './../movie-poster/movie-poster';
import './movie-list.scss';

class MovieList extends Component {

    state = {
        movies: this.props.items,
    };

    render(){

        let sortedMovies;

        switch(this.props.sortOrder){
            case 'rank': {
                sortedMovies = this.state.movies.sort((a, b) => a.rank - b.rank);
                break;
            }
            case 'releaseDate': {
                sortedMovies = this.state.movies.sort((a, b) => a.releaseDate - b.releaseDate);
                break;
            }
            default: {
                sortedMovies = this.state.movies.sort((a, b) => a.rank - b.rank);
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
        )
    };
}

export default MovieList;