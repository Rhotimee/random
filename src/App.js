import React, { Fragment } from "react";

export default function App() {
  return (
    <Fragment>
      <label>
        <input type="number" />
        Minutes
      </label>
      <label>
        <input type="number" />
        Seconds
      </label>

      <button>START</button>
      <button>PAUSE / RESUME</button>
      <button>RESET</button>

      <h1 data-testid="running-clock">00:00</h1>
    </Fragment>
  );
}
