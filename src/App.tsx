import React from "react";
import "./App.css";
import pups from './assets/images/pups.jpg'

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                <h1 style={{backgroundColor:"#f00"}}>Hello World!</h1>
                <br></br>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
                <p>This is Will Schwantes&apos;s fork!</p>

            </p>
            <img
                src={pups}
                alt="My dogs from left to right, Remi, an English Golden Retriever; Leo, a Bernese Mountain Dog; and Lily, a Leonberger."
                style={{width:"50%",padding:"1em"}}
            />
            <figcaption>These are my dogs, Remi, Leo, and Lily.</figcaption>
        </div>
    );
}

export default App;
