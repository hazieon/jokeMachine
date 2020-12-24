import css from "./index.module.css";
import { useState } from "react";

function JokeList({ jokeItem, dark }) {
  const [list, setList] = useState([]);
  //   console.log({ jokeItem });
  //   console.log({ dark });
  function saveJoke() {
    setList([...list, jokeItem.joke]);
  }

  return (
    <div className={css.jokeListSection}>
      <button className={css.saveButton} onClick={saveJoke}>
        Save this joke ➡
      </button>
      <ul className={dark ? css.listDark : css.listLight}>
        {list.map((x, i) => (
          <li className={i}>{list[i]}</li>
        ))}
      </ul>
    </div>
  );
}

export default JokeList;

// <ul>
// {list.map((x, i) => (
//   <li>{list[i]}</li>
// ))}
// </ul>
