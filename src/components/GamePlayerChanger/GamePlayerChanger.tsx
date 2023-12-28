import { useState } from "react";

const GamePlayerChanger = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    const newGame = { ...game, player: { ...game.player, name: "Peter" } };

    setGame(newGame);
  };
  return (
    <>
      <h2>Game Player</h2>
      <div>Game player: {game.player.name}</div>
      <button onClick={handleClick}>Change name</button>
    </>
  );
};

export default GamePlayerChanger;
