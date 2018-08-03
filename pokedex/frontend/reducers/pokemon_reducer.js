import {RECEIVE_ALL_POKEMON, RECEIVE_POKE} from '../actions/pokemon_actions';
import { merge } from 'lodash';

const pokemonReducer = (state = {}, action ) => {
  Object.freeze(state);
  const nextState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:

      return merge(nextState, action.pokemon);
    case RECEIVE_POKE:
      let id = action.payload.pokemon.id;

      return merge(nextState, {[id]: action.payload.pokemon});
    default:
      return state;
  }
};

export default pokemonReducer;
