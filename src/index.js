import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './pages/app';
import Movie from './pages/movie';
import './styles/styles.scss';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/movies/:rank" component={Movie} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));