// import React, { useState } from "react";
import classes from "../../scss/task.module.scss";
import { AiFillDelete } from "react-icons/ai";

const Task = ({ task, dayTime, deleteTask, id, isDone, isDoneFunction }) => {
  // const [isDone, setIsDone] = useState(false);
  // const clickHandler = () => {
  //   isDoneFunction();
  // };

  return (
    <>
      <li>
        <p
          onClick={() => isDoneFunction()}
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
