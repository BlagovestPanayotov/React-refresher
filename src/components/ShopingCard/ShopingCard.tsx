import React, { useState } from "react";

const ShopingCart = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  function onClickHandler(id: number) {
    const newCart = {
      ...cart,
      items: cart.items.map((i) =>
        i.id == id ? { ...i, quantity: i.quantity + 1 } : i
      ),
    };

    setCart(newCart);
  }

  return (
    <>
      <h2>ShopingCard</h2>;
      <ul>
        {cart.items.map((i) => (
          <li key={i.id}>
            {i.title} - {i.quantity} -{" "}
            <button onClick={() => onClickHandler(i.id)}>Add Item</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShopingCart;
