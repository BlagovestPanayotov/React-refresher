import { useState } from "react";

const Mode = () => {
  const [mode, setMode] = useState(["Hungry", "Calm"]);

  function onAddHappyMode() {
    setMode([...mode, "Happy"]);
  }
  function onChangeHappyMode() {
    setMode(mode.map((m) => (m === "Happy" ? "Happiness" : m)));
  }
  function onDeleteHappy() {
    setMode(mode.filter((m) => m !== "Happy" && m !== "Happiness"));
  }

  return (
    <>
      <h2>Modes</h2>
      <ul>
        {mode.map((m, i) => (
          <li key={m + i}>{m}</li>
        ))}
      </ul>
      <button onClick={onAddHappyMode}>Add Happy Mode</button>
      <button onClick={onChangeHappyMode}>Change Happy Mode</button>
      <button onClick={onDeleteHappy}>Remove Happy Mode</button>
    </>
  );
};

export default Mode;
