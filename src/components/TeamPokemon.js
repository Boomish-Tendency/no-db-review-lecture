import React, { Component } from "react";

class TeamPokemon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nicknameInput: props.pokemon.nickname,
      toggleEdit: false,
    };
  }

  handleChange = (event) => {
    this.setState({ nicknameInput: event.target.value });
  };

  toggleEdit = () => {
    this.setState({ toggleEdit: !this.state.toggleEdit });
  };

  render() {
    const { pokemon } = this.props;
    return (
      <li className="pokemon">
        <p
          className="x-button"
          onClick={(e) => {
            e.stopPropagation();
            this.props.removeFromTeam(this.props.index);
          }}
        >
          {" X "}
        </p>
        <h1>{pokemon.name.english} </h1>

        {this.state.toggleEdit ? (
          <input
            value={this.state.nicknameInput}
            onChange={this.handleChange}
          />
        ) : (
          <h2>Nickname: {pokemon.nickname}</h2>
        )}

        {this.state.toggleEdit ? (
          <div>
            <button
              onClick={() => {
                this.props.editNickname(
                  this.props.index,
                  this.state.nicknameInput
                );
                this.toggleEdit();
              }}
            >
              Save
            </button>
            <button
              onClick={() => {
                this.setState({ nicknameInput: pokemon.nickname });
                this.toggleEdit();
              }}
            >
              Cancel
            </button>
          </div>
        ) : null}

        <button onClick={this.toggleEdit}>Edit</button>
        <h2>{pokemon.type[0]}</h2>
        {pokemon.type[1] ? <h2>{pokemon.type[1]}</h2> : null}
      </li>
    );
  }
}

export default TeamPokemon;
