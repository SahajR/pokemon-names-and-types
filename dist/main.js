'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Badge = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _types_arr = require('./types_arr.json');

var _types_arr2 = _interopRequireDefault(_types_arr);

var _arrayFind = require('array-find');

var _arrayFind2 = _interopRequireDefault(_arrayFind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stylPrimary = {
    backgroundColor: "red",
    flex: "1 1 50%",
    width: "50px",
    height: "50px"
};

var stylSecondary = {
    backgroundColor: "green",
    flex: "1 1 50%",
    width: "50px",
    height: "50px"
};

var stylName = {
    position: "absolute",
    left: "50%",
    top: "50%",
    color: "white"
};

var stylContainer = {
    display: "flex",
    position: "relative"
};

var getBadgeContent = function getBadgeContent(name, type1, type2) {

    if (type1) stylPrimary.backgroundColor = (0, _arrayFind2.default)(_types_arr2.default, function (n) {
        return n.name == type1;
    }).color;

    if (type2) stylSecondary.backgroundColor = (0, _arrayFind2.default)(_types_arr2.default, function (n) {
        return n.name == type2;
    }).color;else stylSecondary.flex = "0";

    return _react2.default.createElement(
        'div',
        { style: stylContainer },
        _react2.default.createElement('div', { style: stylPrimary }),
        _react2.default.createElement('div', { style: stylSecondary }),
        _react2.default.createElement(
            'div',
            { style: stylName },
            name || "Bulbasaur"
        )
    );
};

var Badge = function Badge(props) {
    return getBadgeContent(props.name, props.type1, props.type2);
};

Badge.propTypes = {
    name: _react2.default.PropTypes.string.isRequired,
    type1: _react2.default.PropTypes.string,
    type2: _react2.default.PropTypes.string
};

exports.Badge = Badge;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pkmn = undefined;

var _uniqueRandomArray = require('unique-random-array');

var _uniqueRandomArray2 = _interopRequireDefault(_uniqueRandomArray);

var _pokemon = require('./pokemon.json');

var _pokemon2 = _interopRequireDefault(_pokemon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getRandomItem = (0, _uniqueRandomArray2.default)(_pokemon2.default);
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

var pkmn = {
  all: _pokemon2.default,
  random: random
};

exports.pkmn = pkmn;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pkmnTypes = undefined;

var _types_arr = require('./types_arr.json');

var _types_arr2 = _interopRequireDefault(_types_arr);

var _arrayFind = require('array-find');

var _arrayFind2 = _interopRequireDefault(_arrayFind);

var _arrayIncludes = require('array-includes');

var _arrayIncludes2 = _interopRequireDefault(_arrayIncludes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isWeak = function isWeak(def, att) {
    return (0, _arrayIncludes2.default)((0, _arrayFind2.default)(_types_arr2.default, function (o) {
        return o.name == def;
    }).weaknesses, att);
};

var isStrong = function isStrong(def, att) {
    return (0, _arrayIncludes2.default)((0, _arrayFind2.default)(_types_arr2.default, function (o) {
        return o.name == def;
    }).strengths, att);
};

var getSuperEffectiveType = function getSuperEffectiveType(t) {
    return (0, _arrayFind2.default)(_types_arr2.default, function (o) {
        return o.name == t;
    }).strengths[0] || "None";
};

var pkmnTypes = {
    isWeak: isWeak,
    isStrong: isStrong,
    getSuperEffectiveType: getSuperEffectiveType
};

exports.pkmnTypes = pkmnTypes;
