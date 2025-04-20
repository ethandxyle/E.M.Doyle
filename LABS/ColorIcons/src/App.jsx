import React, {useState} from "react";
import "./App.css";
import Icons from "./components/Icons";
import {randNum} from "./helper";

function App() {
    const [randomColorIndex, setRandomColorIndex] = useState(randNum());
    const [randomIconIndex, setRandomIconIndex] = useState(randNum());

    const handleClick = () => {
        setRandomColorIndex(randNum());
        setRandomIconIndex(randNum());
    };

    return (<div className="app">
        <h1>Color Icons</h1>
        <Icons colorIndex={randomColorIndex} iconIndex={randomIconIndex}/>
        <button onClick={handleClick}>Change Color & Icon</button>
    </div>);
}

export default App;
