import React from "react";
import Task from "../Task/Task";
import classes from "../../scss/tasks.module.scss";

const Tasks = ({ data }) => {
  // console.log(data);
  return (
    <div className={classes.container}>
      <ul>
        {data?.map((item, index) => {
          return <Task {...item} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default Tasks;
