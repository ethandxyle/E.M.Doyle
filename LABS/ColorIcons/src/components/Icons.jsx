import React from "react";
import {colors, icons} from "../helper";
import "../App.css";

const Icons = ({colorIndex, iconIndex}) => {
    const color = colors[colorIndex];
    const iconName = icons[iconIndex];
    const iconClass = `fas fa-${iconName}`;

    return (<div className="icon-display">
            <i className={iconClass} style={{fontSize: "100px", color}}></i>
            <p style={{color}}>
                {color.toUpperCase()} – {iconName.toUpperCase()}
            </p>
        </div>);
};

export default Icons;
