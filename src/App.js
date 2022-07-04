import AddTask from "./components/AddTask/AddTask";
import Header from "./components/Header/Header";
import "./scss/App.scss";
import React, { useState, useEffect } from "react";
import Tasks from "./components/Tasks/Tasks";

function App() {
  const [data, setData] = useState([]);
  const [isClicked, setIsClicked] = useState(true);
  const [isDone, setIsDone] = useState(false);

  const toggleTaskBar = () => {
    setIsClicked(!isClicked);
  };
  useEffect(() => {
    const datas = JSON.parse(localStorage.getItem("data"));
    if (datas) {
      setData(datas);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

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

  const isDoneFunction = () => {
    setIsDone(!isDone);
  };
  return (
    <div className="main">
      <Header toggleTaskBar={toggleTaskBar} isClicked={isClicked} />
      <AddTask isClicked={isClicked} addTasks={addTasks} />
      <Tasks
        addTasks={addTasks}
        data={data}
        deleteTask={deleteTask}
        isDoneFunction={isDoneFunction}
        isDone={isDone}
      />
    </div>
  );
}

export default App;
