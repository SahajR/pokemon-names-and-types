import React from 'react';
import typ from './types_arr.json';

var stylPrimary = {
    backgroundColor : "red",
    flex: "1 1 50%",
    width: "50px",
    height: "50px"
};

var stylSecondary = {
    backgroundColor : "green",
    flex: "1 1 50%",
    width: "50px",
    height: "50px"
};

var stylName = {
    position : "absolute",
    left : "50%",
    top : "50%",
    color: "white"
}

var stylContainer = {
    display : "flex",
    position: "relative"
}

const getBadgeContent = (name, type1, type2) => {

    if(type1) stylPrimary.backgroundColor = typ.find((n) => (n.name == type1)).color;

    if(type2) stylSecondary.backgroundColor = typ.find((n) => (n.name == type2)).color;
    else stylSecondary.flex = "0";

    return (
        <div style={stylContainer}>
            <div style = {stylPrimary}></div>
            <div style = {stylSecondary}></div>
            <div style = {stylName}>{name || "Bulbasaur"}</div>
        </div>
    );
};

const Badge = (props) => (getBadgeContent(props.name, props.type1, props.type2));

Badge.propTypes = {
    name: React.PropTypes.string.isRequired,
    type1: React.PropTypes.string,
    type2: React.PropTypes.string
};

export {Badge};
