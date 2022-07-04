import React from "react";
import Button from "../Button/Button";

const Header = ({ toggleTaskBar, isClicked }) => {
  return (
    <div>
      <h1>Task Tracker</h1>
      <Button toggleTaskBar={toggleTaskBar} isClicked={isClicked} />
    </div>
  );
};

export default Header;
