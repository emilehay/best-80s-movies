import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './pages/app';
import Movie from './pages/movie';
import { Provider } from 'react-redux';
import store from './store';

import './styles/styles.scss';

const routing = (
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/movies/:rank" component={Movie} />
            </div>
        </Router>
    </Provider>
)

ReactDOM.render(routing, document.getElementById('root'));