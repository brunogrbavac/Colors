import React, { useState } from 'react';
import logo from './images/logo.svg';
import './App.css';
import ColorButton from './components/ColorButton/ColorButton';
import TextInput from './components/TextInput/TextInput';
import ColorsList from './components/ColorsList/ColorsList';
import { invertColor } from './utils/InvertColor';

const App:React.FC = () => {
  const [colors, setColors] = useState<string[]>(()=>[]);
  const [text, setText] = useState<string>(()=>"Color.");

  const addColor = (color:string) => {
    setColors((prevColors)=>[color, ...prevColors]);
  };

  const changeText = (newText:string) => {
    setText(newText);
  };

  return(
    <div className="App">
        <img src={logo} alt="Logo" height={150}/>
        <h1 id="app-title">Random Color Generator</h1>
        <h2 id="color-text" style={{color:`#${colors[0]}`, backgroundColor:invertColor(colors[0])}}>{text}</h2>
        <TextInput text={text} changeText={changeText}/>
        <ColorButton addColor={addColor}/>
        <ColorsList colors={colors.slice(1)}/>
    </div>
  );
};

export default App;
