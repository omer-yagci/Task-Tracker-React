import React from "react";
import classes from "../../scss/task.module.scss";

const Task = ({ task, dayTime }) => {
  console.log(task);
  return (
    <>
      <li>
        <p className={classes.task}>
          {task} <br /> {dayTime}
        </p>
      </li>
    </>
  );
};

export default Task;
