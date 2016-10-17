import uniqueRandomArray from 'unique-random-array';
import pokemon from './pokemon.json'

var getRandomItem = uniqueRandomArray(pokemon);
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

var pkmn = {
  all: pokemon,
  random: random
};

export {pkmn};
