import React, { useState } from "react"
import Greeter from "./components/Greeter"

const App = () => {

    const [ username, setUsername ] = useState("");
    
    const [ hasloaded, setloaded ] = useState(false);
    useState(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 3000);
    }, [hasLoaded]);

    if (hasLoaded) {
            return (
                <>
                    <Greeter name={"Tristan!"} phrase={"Hello"} />
                    <Greeter name={"Josh?"} phrase={"What's upper"} />
                    <Greeter name={"Garret?"} phrase={"What it do"} />
                
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
    
                    <p>"You are logging in as: {username}`</p>

                </>
            )
        } else {
            return (
                <>
                <h1>Website laoding....</h1>
                <button onClick={handleButtonClick}></button>
                </>
            )
        }

    }
    


export default App;