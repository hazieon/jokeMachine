import React, { useState, useEffect } from "react";
//import JokeButton from "../JokeButton";
import JokeViewer from "../JokeViewer";
import css from "./index.module.css";
import JokeList from "../JokeList";
//const url = "https://icanhazdadjoke.com/";

function JokeMachine({ dark }) {
  const [dataObj, setDataObj] = useState({ joke: "Are ya 'avin' a laugh?" });
  const [url, setUrl] = useState("https://icanhazdadjoke.com/");

  async function getJoke() {
    let res = await fetch(url, { headers: { Accept: "application/json" } });
    let data = await res.json();
    setDataObj(data);
    console.log({ data }); //sanity check
    return data;
  }

  // useEffect(() => {
  //   getJoke();
  // }, []);

  return (
    <>
      <JokeViewer jokeObj={dataObj} />
      <div className={css.buttonSection}>
        <button
          className={css.refreshButton}
          onClick={() => setDataObj({ joke: "[no joke yet]" })}
        >
          Remove
        </button>
        <button
          className={css.jokeButton}
          onClick={() => {
            getJoke();
          }}
        >
          Get Joke!
        </button>
      </div>
      <JokeList dark={dark} jokeItem={dataObj} />
    </>
  );
}

export default JokeMachine;
