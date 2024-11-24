import './App.css';
import { React, useState } from "react";
import Joke from "./components/Joke"

function App() {
    return(
        <div>
            <h1>Generate a Joke using raect and Joke api</h1>
            <Joke/>
        </div>
    );
}

export default App;
