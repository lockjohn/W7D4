import React from 'react';
import {Link, Route} from 'react-router-dom';
import ItemDetailContainer from './item_detail_container';

class PokemonDeatil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.props.requestPoke(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.pokemonId !==
      newProps.match.params.pokemonId) {
    this.props.requestPoke(newProps.match.params.pokemonId);
    }
  }

  render () {
    const {poke, items} = this.props;
    if (!poke) return null; //gives time for compoent to mount, otw undefined props causes error
    return (
      <section>
        <figure>
          <img src={poke.image_url}></img>
        </figure>
        <ul>
          <li>Name: <h2>{poke.name}</h2></li>
          <li>Type: {poke.poke_type}</li>
          <li>Attack: {poke.attack}</li>
          <li>Defense: {poke.defense}</li>
          <li>Moves: {poke.moves}</li>
        </ul>
        <section>
          <ul>
            {items.map((item, idx) =>
              <Link to={`/pokemon/${poke.id}/items/${item.id}`}><li key={item.name}>{item.name}</li></Link>
            )}
          </ul>
        </section>
        <Route path="/pokemon/:pokemonId/items/:itemId" component={ItemDetailContainer} />
      </section>
    );
  }

}

export default PokemonDeatil;
