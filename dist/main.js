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

var _types = require("./types.json");

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Types = {};

var isWeak = function isWeak(def, att) {
    return _types2.default.find(function (name) {
        return name == def;
    }).weaknesses.includes(att);
};

var isStrong = function isStrong(def, att) {
    return _types2.default.find(function (name) {
        return name == def;
    }).strengths.includes(att);
};

var getSuperEffectiveType = function getSuperEffectiveType(t) {
    return _types2.default.find(function (name) {
        return name == def;
    }).strengths[0] || "None";
};

exports.default = Types = {
    isWeak: isWeak,
    isStrong: isStrong,
    getSuperEffectiveType: getSuperEffectiveType
};
