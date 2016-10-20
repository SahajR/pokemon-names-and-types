import pTypes from './types_arr.json';
import findInArray from 'array-find';
import includes from 'array-includes';

const chk = (def, att, type) => {
  var typ = findInArray(pTypes, (o) => (o.name == def));
  return typ ? (type == "STRENGTH" ? includes(typ.strengths, att) : includes(typ.weaknesses, att)) : false;
};

const isWeak = (def = "Water", att = "Ghost") => (chk(def, att, "WEAKNESS"));

const isStrong = (def = "Water", att = "Ghost") => (chk(def, att, "STRENGTH"));

const getSuperEffectiveType = (t) => findInArray(pTypes, (o) => (o.name == t)).strengths[0] || "None";

var pkmnTypes = {
    isWeak,
    isStrong,
    getSuperEffectiveType
};

export {pkmnTypes};
