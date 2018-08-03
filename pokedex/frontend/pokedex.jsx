import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {requestAllPokemon} from './actions/pokemon_actions';
// import {selectAllPokemon} from './reducers/selectors';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';
import {fetchPoke} from './util/api_util';
import {requestPoke} from './actions/pokemon_actions';


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.requestAllPokemon = requestAllPokemon;
  // window.selectAllPokemon = selectAllPokemon;
  window.store = store;
  window.fetchPoke = fetchPoke;
  window.requestPoke = requestPoke;
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});
