import { useState } from "react";
import Alert2 from "./Alert2";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import LikeButton from "./components/LikeButton";
import TestingComponent from "./components/TestingComponents/TestingComponent";
import GamePlayerChanger from "./components/GamePlayerChanger/GamePlayerChanger";
import PizzaToppings from "./components/PizzaToppings/PizzaToppings";
import ShopingCart from "./components/ShopingCard/ShopingCard";
import Address from "./components/Address/Address";
import Mode from "./components/Mode/Mode";
import BugFixin from "./components/BugFixing/BugFixin";

const arrColors = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
];

function App() {
  function HandlerButtonClick(
    currentIndex: number,
    setCurrentIndex: any,
    colors: string[]
  ) {
    setAlertVisibility(true);
    if (currentIndex >= colors.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  const [alertVisible, setAlertVisibility] = useState(false);

  const items = ["Sofia", "London", "Bourgas"];

  return (
    <div>
      <BugFixin></BugFixin>
      {alertVisible && (
        <Alert2 onClose={() => setAlertVisibility(false)}>MyAllert</Alert2>
      )}
      <Button colors={arrColors} HandlerButtonClick={HandlerButtonClick}>
        Primaty
      </Button>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={() => console.log("Clicked")}
      />

      <LikeButton></LikeButton>

      <TestingComponent></TestingComponent>
      <GamePlayerChanger></GamePlayerChanger>
      <PizzaToppings></PizzaToppings>
      <ShopingCart></ShopingCart>
      <Address></Address>
      <Mode></Mode>
    </div>
  );
}

export default App;
