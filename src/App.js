import React, { Component } from 'react';
import axios from 'axios';
import MovieList from './components/movie-list/movie-list';
import OrderSelect from './components/order-select/order-select';
import './styles/styles.scss';

class App extends Component {
  
  state = {
    sortOrder: '',
    loading: false,
    components: [],
  };

  async componentDidMount(){
      this.setState({ loading: true });
      const response = await axios.get('http://demo9595712.mockable.io/getTopFiveMovies');
      this.setState({ loading: false, components: response.data.components });
  }

  changeOrder = value => {
    this.setState({ sortOrder: value });
  }
  
  render(){
    
    return (
      <div className='best-80s-movies'>
        <div className='container'>
          {
            this.state.components.map(component => {
              switch(component.type){
                case 'movie-list': {
                  return <MovieList items={component.items} sortOrder={this.state.sortOrder} />;
                }
                case 'order-select': {
                  return <OrderSelect changeOrder={this.changeOrder} items={component.items} />;
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
