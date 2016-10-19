import pTypes from './types_arr.json';
import findInArray from 'array-find';
import includes from 'array-includes';

const isWeak = (def, att) => (includes(findInArray(pTypes, (o) => (o.name == def)).weaknesses, att));

const isStrong = (def, att) => (includes(findInArray(pTypes, (o) => (o.name == def)).strengths, att));

const getSuperEffectiveType = (t) => findInArray(pTypes, (o) => (o.name == t)).strengths[0] || "None";

var pkmnTypes = {
    isWeak,
    isStrong,
    getSuperEffectiveType
};

export {pkmnTypes};
