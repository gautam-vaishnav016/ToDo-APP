import React from "react";
import { ImBook } from "react-icons/im";

const Header = () => {
  return (
    <header className="header">
      <h1 className="heading"> <ImBook className="book" /> My <span className="task-color">Task</span></h1>
    </header>
  );
};

export default Header;
