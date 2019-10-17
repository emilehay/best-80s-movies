import React, { Component } from 'react';
import './movie-poster.scss';

class MoviePoster extends Component {

    render(){
        return (
            <div className='movie-poster'>
                <img src={this.props.details.imageUrl} alt={this.props.details.title}/>
            </div>
        )
    };
}

export default MoviePoster;