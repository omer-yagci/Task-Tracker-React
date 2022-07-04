import AddTask from "./components/AddTask/AddTask";
import Header from "./components/Header/Header";
import "./scss/App.scss";
import React, { useState, useEffect } from "react";
import Tasks from "./components/Tasks/Tasks";

function App() {
  const [isClicked, setIsClicked] = useState(true);
  const [data, setData] = useState([]);
  const toggleTaskBar = () => {
    setIsClicked(!isClicked);
  };
  // useEffect(() => {
  //   setData(data);
  // }, [data]);
  const addTasks = (taskFromAddTask) => {
    setData((prevTask) => {
      return [taskFromAddTask, ...prevTask];
    });
  };
  const deleteTask = (id) => {
    setData((prevTask) => {
      return prevTask.filter((item, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="main">
      <Header toggleTaskBar={toggleTaskBar} isClicked={isClicked} />
      <AddTask isClicked={isClicked} addTasks={addTasks} />
      <Tasks addTasks={addTasks} data={data} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
