import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MovieDetailBox from '../components/movie-detail-box/movie-detail-box';
import { getAppLayout } from '../actions/appActions';
import PropTypes from 'prop-types';

const Movie = ({ app: { layout, current, loading }, getAppLayout }) => {

    useEffect(() => {
        if(layout === null){
            getAppLayout();
        }
    }, []);

    if(loading || layout === null){
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
}

const mapStateToProps = state => ({
    app: state.app
});
  
export default connect(mapStateToProps, { getAppLayout })(Movie);