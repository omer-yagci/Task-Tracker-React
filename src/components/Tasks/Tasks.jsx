import React from "react";
import Task from "../Task/Task";
import classes from "../../scss/tasks.module.scss";

const Tasks = ({ data, deleteTask, isDoneFunction, isDone }) => {
  return (
    <div className={classes.container}>
      {data.length > 0 ? (
        <ul>
          {data?.map((item, index) => {
            return (
              <Task
                {...item}
                key={index}
                deleteTask={deleteTask}
                id={index}
                isDoneFunction={isDoneFunction}
                isDone={isDone}
              />
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
