import React from "react";
import { invertColor } from "../../utils/InvertColor";
import './ColorsList.css';

const ColorsList:React.FC<{colors:string[]}> = ({colors}) => {
    return(
        <div>
            {colors.map((color, index)=><p key={index} className="color-list-item" role="article" style={{color:`#${color}`, backgroundColor:invertColor(color)}}>{color}</p>)}
        </div>
    );
};

export default ColorsList;