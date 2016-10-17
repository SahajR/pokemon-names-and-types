import uniqueRandomArray from 'unique-random-array';
import pokemon from './pokemon.json'

var getRandomItem = uniqueRandomArray(pokemon);

export const random = (number) => {
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

export const all = pokemon;
