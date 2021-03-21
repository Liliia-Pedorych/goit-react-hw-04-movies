import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import AppBar from './components/AppBar';
import ErrorPage from './components/ErrorPage';
import MovieSearchView from './views/MovieSearchView';
import MovieDetailsView from './views/MovieDetailsView';
import routes from './routes';
import './App.css';

const App = () => (
  <div className="container">
    <AppBar />
    <Switch>
      <Route path={routes.home} exact component={HomeView} />
      <Route path={routes.movieDetails} component={MovieDetailsView} />
      <Route path={routes.movies} component={MovieSearchView} />
      <Route component={ErrorPage} />
    </Switch>
  </div>
);

export default App;
