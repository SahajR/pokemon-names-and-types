'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pkmn = undefined;

var _uniqueRandomArray = require('unique-random-array');

var _pokemon = require('./pokemon.json');

var getRandomItem = (0, _uniqueRandomArray)(_pokemon);
var random = function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
};

var all = _pokemon;

var pkmn = {
  all: _pokemon,
  random: random
};

exports.pkmn = pkmn;
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pkmnTypes = undefined;

var _types_arr = require("./types_arr.json");

var isWeak = function isWeak(def, att) {
    return _types_arr.find(function (o) {
        return o.name == def;
    }).weaknesses.includes(att);
};

var isStrong = function isStrong(def, att) {
    return _types_arr.find(function (o) {
        return o.name == def;
    }).strengths.includes(att);
};

var getSuperEffectiveType = function getSuperEffectiveType(t) {
    return _types_arr.find(function (o) {
        return o.name == t;
    }).strengths[0] || "None";
};

var pkmnTypes = {
    isWeak: isWeak,
    isStrong: isStrong,
    getSuperEffectiveType: getSuperEffectiveType
};

exports.pkmnTypes = pkmnTypes;
