import React from "react";
import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import TaskCard from "../Components/TaskCard";
import EditBar from "../Components/EditBar";

const Home = () => {
  const taskServer = useOutletContext();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get(`${taskServer}/tasks`)
      .then((res) => {
        setTasks(res.data.tasks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [taskServer]);

  return (
    <div>
      {tasks.map((task) => {
        return (
          <>
            <TaskCard task={task} key={task._id} />
            <EditBar key={task.id} />
          </>
        );
      })}
    </div>
  );
};

export default Home;
