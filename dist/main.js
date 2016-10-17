'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uniqueRandomArray = require('unique-random-array');

var _uniqueRandomArray2 = _interopRequireDefault(_uniqueRandomArray);

var _pokemon = require('./pokemon.json');

var _pokemon2 = _interopRequireDefault(_pokemon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getRandomItem = (0, _uniqueRandomArray2.default)(_pokemon2.default);
var pkmn = {};
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

var all = _pokemon2.default;

exports.default = pkmn = {
  all: _pokemon2.default,
  random: random
};
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _types_arr = require("./types_arr.json");

var _types_arr2 = _interopRequireDefault(_types_arr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Types = {
    isWeak: isWeak,
    isStrong: isStrong,
    getSuperEffectiveType: getSuperEffectiveType
};

var isWeak = function isWeak(def, att) {
    return _types_arr2.default.find(function (o) {
        return o.name == def;
    }).weaknesses.includes(att);
};

var isStrong = function isStrong(def, att) {
    return _types_arr2.default.find(function (o) {
        return o.name == def;
    }).strengths.includes(att);
};

var getSuperEffectiveType = function getSuperEffectiveType(t) {
    return _types_arr2.default.find(function (o) {
        return o.name == t;
    }).strengths[0] || "None";
};

exports.default = Types;
