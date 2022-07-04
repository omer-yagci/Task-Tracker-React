import React, { useState } from "react";
import classes from "../../scss/task.module.scss";
import { AiFillDelete } from "react-icons/ai";

const Task = ({ task, dayTime, deleteTask, id }) => {
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
        <AiFillDelete
          onClick={() => deleteTask(id)}
          style={{ color: "red", fontSize: "1.5rem", cursor: "pointer" }}
        />
      </li>
    </>
  );
};

export default Task;
