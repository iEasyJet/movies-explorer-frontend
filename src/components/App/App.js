import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Main} />

      <Route path='/movies' component={Movies} />

      <Route path='/saved-movies' component={SavedMovies} />

      <Route path='/profile' component={Profile} />

      <Route path='/sign-up' component={Register} />

      <Route path='/sign-in' component={Login} />

      <Route path='*' component={PageNotFound} />
    </Switch>
  );
}

export default App;
