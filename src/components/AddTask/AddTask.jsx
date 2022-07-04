import React, { useState } from "react";
import classes from "../../scss/addTask.module.scss";
const AddTask = ({ isClicked, addTasks }) => {
  const [task, setTask] = useState("");
  const [dayTime, setDayTime] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    addTasks({ task: task, dayTime: dayTime });
    setTask("");
    setDayTime("");
  };

  return (
    <div className={classes.container}>
      {isClicked && (
        <form className={classes.form} onSubmit={submitHandler}>
          <label className={classes.label} htmlFor="task">
            Task
          </label>
          <input
            onChange={(event) => setTask(event.target.value)}
            type="text"
            id="task"
            name="task"
            placeholder="AddTask"
            value={task}
          />

          <label className={classes.label} htmlFor="dayTime">
            Day Time
          </label>

          <input
            onChange={(event) => setDayTime(event.target.value)}
            type="datetime-local"
            id="dayTime"
            name="dayTime"
            value={dayTime}
          />
          <button>Save Task</button>
        </form>
      )}
    </div>
  );
};

export default AddTask;
