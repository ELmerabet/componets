import React, { useState } from "react";
import Button from "./Button"
import "./Joke.css"



export default function Joke(){
  const [Joke, setJoke] = useState("");
  const fetchapi = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
    .then((res) => res.json())
    .then((data) => setJoke(data.joke));
  }
  return(
    <div className="joke">
      <Button callApi={fetchapi} />
      <p>{Joke} </p>
    </div>
  );
}