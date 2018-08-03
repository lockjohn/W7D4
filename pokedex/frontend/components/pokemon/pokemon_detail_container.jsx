import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';
import {selectItems} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
  poke: state.entities.pokemon[ownProps.match.params.pokemonId],
  items: selectItems(state)
};};

const mapDispatchToProps = (dispatch) => ({
  requestPoke: (id) => dispatch(requestPoke(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
