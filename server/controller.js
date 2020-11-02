  const pokedex = require("./pokemon.json");
let myHouse = [];

module.exports = {
  getPokemon: (req, res) => {
    //# limit return array to 25 pokemon
    const { search } = req.query;
    const resArray = [];

    if (search) {
      const filteredPokemon = pokedex.filter(
        (pokemon) =>
          pokemon.name.english.toLowerCase().includes(search.toLowerCase())
        //# Pikachu will be found if we search pikachu
        //# pikachu will be found if we search PiKaCHU
      );
      // console.log(filteredPokemon);
      for (let i = 0; i < 25; i++) {
        if (filteredPokemon[i]) {
          resArray.push(filteredPokemon[i]);
        }
      }
    } else {
      for (let i = 0; i < 25; i++) {
        resArray.push(pokedex[i]);
      }
    }
    // console.log(resArray);
    return res.status(200).send(resArray);
  },
  getOnePokemon: (req, res) => {
    const { id } = req.params;
    const foundPokemon = pokedex.find((pokemon) => pokemon.id === +id);

    if (!foundPokemon) {
      return res.status(400).send("Pokemon not found");
    }

    res.status(200).send(foundPokemon);
  },
  getTeam: (req, res) => {
    res.status(200).send(team);
  },
  addToTeam: (req, res) => {
    const { id } = req.params;
    const foundPokemon = { ...pokedex.find((pokemon) => pokemon.id === +id) };

    foundPokemon.nickname = "";

    team.push(foundPokemon);

    res.status(200).send(team);
  },
  editNickname: (req, res) => {
    const { index } = req.params;
    const { nickname } = req.body;

    team[index].nickname = nickname;

    res.status(200).send(team);
  },
  removeFromTeam: (req, res) => {
    const { index } = req.params;

    team.splice(index, 1);

    res.status(200).send(team);
  },
};
