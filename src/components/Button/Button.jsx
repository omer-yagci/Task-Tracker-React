import React from "react";
import classes from "../../scss/button.module.scss";

const Button = ({ toggleTaskBar, isClicked }) => {
  const clickHandler = () => {
    toggleTaskBar();
  };
  return (
    <div className={classes["container"]}>
      <button onClick={clickHandler}>
        {isClicked ? "Close TaskBar" : "Show TaskBar"}
      </button>
    </div>
  );
};

export default Button;
