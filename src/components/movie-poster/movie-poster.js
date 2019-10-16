import React, { Component } from 'react';
import './movie-poster.scss';

class MoviePoster extends Component {

    state = {
        details: this.props.details,
    };

    render(){
        return (
            <div className='movie-poster'>
                <img src={this.state.details.imageUrl} alt={this.state.details.title}/>
            </div>
        )
    };
}

export default MoviePoster;