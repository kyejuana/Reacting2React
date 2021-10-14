import React, { useState } from "react"
import Greeter from "./components/Greeter"

const App = () => {

    const [ username, setUsername ] = useState(0);
    
    const [ loaded,] = useState(0);

    const handleUsernameChange = e => {
        setUsername(e.target.value);
    }
    const handleButtonClick = () => {
        
    }
    <p>"You are logging in as: {username}`</p>
    return (
        <div>
            <h1>Simple Tasks a la React</h1>
            <Greeter name={"KyeJuana!"} phrase={"Hello"}/>
            <Greeter name={"Tristan?"} phrase={"What's upper"}/>
            <Greeter name={"Garret?"} phrase={"What it do"}/>
            <button onClick={handleButtonClick}></button>
        </div>
    );
}

export default App;