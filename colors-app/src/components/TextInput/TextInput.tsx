import './TextInput.css';
const TextInput:React.FC<{text:string, changeText:Function}> = ({text, changeText}) => {

    const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeText(event.target.value);
    };

    return(
        <input type="text" name="colorText" id="color-text-input" placeholder="Text" value={text} onChange={handleChangeText}/>
    );
};

export default TextInput;