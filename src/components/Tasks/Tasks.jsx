import React from "react";
import Task from "../Task/Task";
import classes from "../../scss/tasks.module.scss";

const Tasks = ({ data, deleteTask }) => {
  return (
    <div className={classes.container}>
      {data.length > 0 ? (
        <ul>
          {data?.map((item, index) => {
            return (
              <Task {...item} key={index} deleteTask={deleteTask} id={index} />
            );
          })}
        </ul>
      ) : (
        <h5>No Task!</h5>
      )}
    </div>
  );
};

export default Tasks;
