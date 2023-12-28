import { ReactNode, useState } from "react";

import styles from "./Button.module.css";

interface ButtonTextProps {
  children: ReactNode;
  colors: string[];
  HandlerButtonClick: (a: number, b: any, c: string[]) => void;
}

function Button({ children, colors, HandlerButtonClick }: ButtonTextProps) {
  const [currentIndex, setCurrentIndex] = useState(2);
  return (
    <button
      type="button"
      className={[styles.button, styles.buttonPrimary].join(" ")}
      onClick={() => HandlerButtonClick(currentIndex, setCurrentIndex, colors)}
    >
      {children}
    </button>
  );
}

export default Button;
