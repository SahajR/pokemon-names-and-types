import pTypes from './types_arr.json';

const isWeak = (def, att) => (pTypes.find((o) => (o.name == def)).weaknesses.includes(att));

const isStrong = (def, att) => (pTypes.find((o) => (o.name == def)).strengths.includes(att));

const getSuperEffectiveType = (t) => pTypes.find((o) => (o.name == t)).strengths[0] || "None"; 

var pkmnTypes = {    
    isWeak,
    isStrong,
    getSuperEffectiveType
};

export {pkmnTypes};