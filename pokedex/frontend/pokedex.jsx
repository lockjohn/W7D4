import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {requestAllPokemon} from './actions/pokemon_actions';
import {selectAllPokemon} from './reducers/selectors';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  window.store = store;
  ReactDOM.render(<h1>inside react</h1>, document.getElementById('root'));
});
