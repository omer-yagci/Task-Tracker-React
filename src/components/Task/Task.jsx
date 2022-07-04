import React, { useState } from "react";
import classes from "../../scss/task.module.scss";

const Task = ({ task, dayTime }) => {
  const [isDone, setIsDone] = useState(false);
  const clickHandler = () => {
    setIsDone(!isDone);
  };

  return (
    <>
      <li onClick={clickHandler}>
        <p
          className={classes.task}
          style={{ textDecoration: isDone ? "line-through" : "none" }}
        >
          {task} <br /> {dayTime}
        </p>
      </li>
    </>
  );
};

export default Task;
