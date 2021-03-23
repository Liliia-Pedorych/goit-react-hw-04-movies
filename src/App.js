import React from 'react';
import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
// import HomeView from './views/HomeView';
import AppBar from './components/AppBar';
import ErrorPage from './components/ErrorPage';
// import MovieSearchView from './views/MovieSearchView';
// import MovieDetailsView from './views/MovieDetailsView';
import routes from './routes';
import Loader from './components/Loader';
import './App.css';

const HomeView = lazy(() =>
  import('./views/HomeView.js' /* webpackChunkName: "home-view" */),
);
const MovieDetailsView = lazy(() =>
  import(
    './views/MovieDetailsView.js' /* webpackChunkName: "movie-details-view" */
  ),
);
const MovieSearchView = lazy(() =>
  import(
    './views/MovieSearchView.js' /* webpackChunkName: "movie-search-view" */
  ),
);

const App = () => (
  <div className="container">
    <AppBar />
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path={routes.home} exact component={HomeView} />
        <Route path={routes.movieDetails} component={MovieDetailsView} />
        <Route path={routes.movies} component={MovieSearchView} />
        <Route component={ErrorPage} />
      </Switch>
    </Suspense>
  </div>
);

export default App;
