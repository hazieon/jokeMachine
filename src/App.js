import css from "./App.module.css";
import { useState } from "react";
import JokeMachine from "./Components/JokeMachine";

function App() {
  const [dark, setDark] = useState(true);
  return (
    <div className={css.App}>
      <header className={dark ? css.AppHeader : css.AppHeaderLight}>
        <div className={css.AppMode}>
          <button className={css.toggleTheme} onClick={() => setDark(!dark)}>
            {dark ? "light" : "dark"}
          </button>
        </div>
        <JokeMachine dark={dark} />
      </header>
    </div>
  );
}

export default App;
