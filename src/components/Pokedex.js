import React from "react";
import DexPokemon from "./DexPokemon";
import axios from "axios";

class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      searchInput: "",
      displayPokemon: [],
    };
  }

  componentDidMount() {
    axios.get("/api/pokemon").then((res) => {
      this.setState({
        displayPokemon: res.data,
      });
    });
  }

  handleInput = (e) => {
    this.setState({ searchInput: e.target.value });
    axios
      .get(`/api/pokemon?search=${e.target.value}`)
      .then((res) => {
        this.setState({ displayPokemon: res.data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    let mappedPokemon = [];
    mappedPokemon = this.state.displayPokemon.map((pokemon) => (
      <DexPokemon
        key={pokemon.id}
        pokemon={pokemon}
        addToTeam={this.props.addToTeam}
      />
    ));
    // console.log(mappedPokemon);
    return (
      <div>
        <input value={this.state.searchInput} onChange={this.handleInput} />
        <ul className="list">{mappedPokemon}</ul>
      </div>
    );
  }
}

export default Pokedex;
