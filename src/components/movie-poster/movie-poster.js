import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './movie-poster.scss';
import PropTypes from 'prop-types'
import { setCurrentMovie } from '../../actions/appActions';

const MoviePoster = ({ setCurrentMovie, details }) => {

    const [toMovie, setToMovie] = useState(false);

    const _setCurrentMovie = () => {
        setCurrentMovie(details);
        setToMovie(true);
    }

    return (
        <div className='movie-poster' onClick={_setCurrentMovie}>
            { toMovie && <Redirect to={`/movies/${details.rank}`} />}
            <img src={details.imageUrl} alt={details.title}/>
        </div>
    )
}

MoviePoster.propTypes = {
    setCurrentMovie: PropTypes.func.isRequired,
}

export default connect(null, { setCurrentMovie })(MoviePoster);