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
                alt="My dogs at the beach. Leo is lunging at the camera while Remi and Lily are sitting down."
                style={{width:"50%",padding:"1em"}}
            />
            <p>These are my dogs, (from left to right):
                <ul>
                    <li>Remi, an English Golden Retriever</li>
                    <li>Leo, a Bernese Mountain Dog</li>
                    <li>Lily, a Leonberger</li>
                </ul>
            </p>
        </div>
    );
}

export default App;
