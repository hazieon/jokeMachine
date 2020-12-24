import React from "react";
import css from "./index.module.css";
import dod from "./dod.jpg"
function JokeViewer({ jokeObj }) {
  const joke = jokeObj.joke;

  return (
    <>
      <section className={css.jokePanel}>
      <img className={css.image} src={dod}  alt="dod" />
        <h3 className={css.jokeText}>{joke}</h3>
      </section>
    </>
  );
}

export default JokeViewer;
