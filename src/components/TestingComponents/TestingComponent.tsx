import { useState } from "react";

const TestingComponent = () => {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  function updateDrinckHandler() {
    const newDrink = {
      ...drink,
      price: drink.price + 1,
    };

    setDrink(newDrink);
  }

  return (
    <div>
      <p>Americano price: {drink.price}</p>
      <button onClick={updateDrinckHandler}>Update</button>
    </div>
  );
};

export default TestingComponent;
