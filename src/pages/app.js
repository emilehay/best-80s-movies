import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MovieList from '../components/movie-list/movie-list';
import OrderSelect from '../components/order-select/order-select';
import PropTypes from 'prop-types'
import { getAppLayout } from '../actions/appActions';

const App = ({ app: { layout, loading, sortOrder }, getAppLayout }) => {

  useEffect(() => {
    getAppLayout();
  }, []);

  if(loading || layout === null){
    return <h1>Loading...</h1>;
  }
    
  return (
    <div className='best-80s-movies'>
      <div className='container'>
        {
          layout.components.map((component, index) => {
            switch(component.type){
              case 'movie-list': {
                return <MovieList key={index} movies={component.items} sortOrder={sortOrder} />;
              }
              case 'order-select': {
                return <OrderSelect key={index} options={component.items} />;
              }
              default: {
                return;
              }
            }
          })
        }
      </div>
    </div>
  );
};

App.propTypes = {
  app: PropTypes.object.isRequired,
  getAppLayout: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  app: state.app
});

export default connect(mapStateToProps, { getAppLayout })(App);
