import React, { Component } from 'react';
import axios from 'axios';
import MovieList from './components/movie-list/movie-list';
import OrderSelect from './components/order-select/order-select';
import './styles/styles.scss';

class App extends Component {
  
  state = {
    loading: false,
    components: [],
  };

  async componentDidMount(){
      this.setState({ loading: true });
      const response = await axios.get('http://demo9595712.mockable.io/getTopFiveMovies');
      this.setState({ loading: false, components: response.data.components });
  }
  
  render(){
    
    return (
      <div className='best-80s-movies'>
        <div className='container'>
          {
            this.state.components.map(component => {
              switch(component.type){
                case 'movie-list': {
                  return <MovieList items={component.items} />;
                }
                case 'order-select': {
                  return <OrderSelect items={component.items}  />;
                }
                default: {
                  return;
                  break;
                }
              }
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
