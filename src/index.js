import uniqueRandomArray from 'unique-random-array';
import pokemon from './pokemon.json'

var getRandomItem = uniqueRandomArray(pokemon);
var pkmn = {};
const random = (number) => {
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}

const all = pokemon;

export default pkmn = {
  all: pokemon,
  random: random
};
