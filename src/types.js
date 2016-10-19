import pTypes from './types_arr.json';
require('array.prototype.find');
import includes from 'array-includes';

const isWeak = (def, att) => (includes(pTypes.find((o) => (o.name == def)).weaknesses, att));

const isStrong = (def, att) => (includes(pTypes.find((o) => (o.name == def)).strengths, att));

const getSuperEffectiveType = (t) => pTypes.find((o) => (o.name == t)).strengths[0] || "None";

var pkmnTypes = {
    isWeak,
    isStrong,
    getSuperEffectiveType
};

export {pkmnTypes};
