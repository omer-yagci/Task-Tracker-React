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
  useEffect(() => {
    setData();
    return () => setData();
  }, []);
  const addTasks = (taskFromAddTask) => {
    setData(taskFromAddTask);
  };
  return (
    <div className="main">
      <Header toggleTaskBar={toggleTaskBar} isClicked={isClicked} />
      <AddTask isClicked={isClicked} addTasks={addTasks} />
      <Tasks addTasks={addTasks} data={data} />
    </div>
  );
}

export default App;
