import React from "react";
import typ from "./types_arr.json";
import findInArray from "array-find";

const stylPrimary = {
    backgroundColor : "red",
    flex: "1 1 50%",
    width: "50px",
    height: "50px"
};

const stylSecondary = {
    backgroundColor : "green",
    flex: "1 1 50%",
    width: "50px",
    height: "50px"
};

const stylName = {
    position : "absolute",
    left : "50%",
    top : "50%",
    color: "white"
};

const stylContainer = {
    display : "flex",
    position: "relative"
};

const getBadgeContent = (name, type1, type2) => {

    stylPrimary.backgroundColor = findInArray(typ, (n) => (n.name === type1.toLowerCase())).color;
    type2 ? stylSecondary.backgroundColor = findInArray(typ, (n) => (n.name === type2.toLowerCase())).color
          : stylSecondary.flex = "0";

    return (
        <div style={stylContainer}>
            <div style = {stylPrimary}></div>
            <div style = {stylSecondary}></div>
            <div style = {stylName}>{name}</div>
        </div>
    );
};

const Badge = (props) => (getBadgeContent(props.name, props.type1, props.type2));

Badge.propTypes = {
    name: React.PropTypes.string.isRequired,
    type1: React.PropTypes.string.isRequired,
    type2: React.PropTypes.string
};

export {Badge};
