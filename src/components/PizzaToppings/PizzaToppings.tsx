import { useState } from "react";

const PizzaToppings = () => {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Pepperoni"],
  });

  function handleAddCheeseClick() {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  }

  function handleRemoveCheeseClick() {
    setPizza({
      ...pizza,
      toppings: pizza.toppings.filter((t) => t !== "Cheese"),
    });
  }

  return (
    <>
      <h2>Pizza Toppings</h2>
      <ul>
        {pizza.toppings.map((t, i) => (
          <li key={t + i}>{t}</li>
        ))}
      </ul>
      <button onClick={handleRemoveCheeseClick}>Remove Cheese</button>
      <button onClick={handleAddCheeseClick}>Add Cheese</button>
    </>
  );
};

export default PizzaToppings;
