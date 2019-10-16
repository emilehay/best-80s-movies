import React, { Component } from 'react';
import MoviePoster from './../movie-poster/movie-poster';
import './movie-list.scss';

class MovieList extends Component {

    state = {
        movies: this.props.items,
    };

    render(){
        return (
            <div className='movie-list'>
                {
                    this.state.movies.map(movie => {
                        return (
                            <MoviePoster details={movie}/>
                        );
                    })
                }
            </div>
        )
    };
}

export default MovieList;