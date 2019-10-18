import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Link } from "react-router-dom";
import MovieDetailBox from '../components/movie-detail-box/movie-detail-box';
import { getAppLayout, setCurrentMovie } from '../actions/appActions';
import PropTypes from 'prop-types';

const Movie = ({ app: { layout, current, loading }, getAppLayout, match, setCurrentMovie }) => {

    useEffect(() => {
        if(layout === null){
            getAppLayout();
        }
    }, []);

    if(loading || layout === null){
        return <h1>Loading...</h1>;
    } else if(layout && current === null) {
        const rank = match.params.rank;
        layout.components.map((component, index) => {
            switch(component.type){
                case 'movie-list': {
                    let sortedMovies = component.items;
                    sortedMovies.sort((a, b) => a.rank - b.rank);
                    setCurrentMovie(sortedMovies[rank-1]);
                    break;
                }
                default: {
                    return;
                }
            }
        })
        return <h1>Loading...</h1>;
    }

    return (
        <div className='movie-page'>
            <div className='container'>
                <Link className='back-link' to='/'>Back</Link>
                <MovieDetailBox details={current} />
            </div>
        </div>
    );
};

Movie.propTypes = {
    app: PropTypes.object.isRequired,
    getAppLayout: PropTypes.func.isRequired,
    match: PropTypes.object,
    setCurrentMovie: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    app: state.app
});
  
export default connect(mapStateToProps, { getAppLayout, setCurrentMovie })(Movie);