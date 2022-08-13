import React from "react";
import './ColorButton.css';

const ColorButton:React.FC<{addColor:Function}> = ({addColor}) => {

    const fetchColor = async() => {
          const result = await fetch("https://www.colr.org/json/color/random", {method:'GET', cache: "no-cache"});

          if(result.status !== 200) {
                const error = await result.json();
                throw new Error(error.message);
          };

          const data = await result.json();
          return data;
      };

    const handleGetColor = async() => {
        try{
            const newColor = await fetchColor();
            addColor(newColor.new_color);
        }catch(err) {
              console.log(err);
        };
    };

    return(
        <button id="color-button" onClick={handleGetColor}>
            Get a random color!
        </button>
    );
};

export default ColorButton;