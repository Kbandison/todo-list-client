import React from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
import axios from "axios";

const AddTask = () => {
  const taskServer = useOutletContext();
  const navigate = useNavigate();

  const [newTask, setNewTask] = React.useState({
    title: "",
    description: "",
    priority: "",
    isEditing: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewTask((prevTask) => {
      return {
        ...prevTask,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${taskServer}/new-task`, newTask)
      .then((res) => {
        setNewTask(res.data.tasks);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Task Title: </label>
        <input
          type="text"
          name="title"
          placeholder="Enter Task Title"
          value={newTask.title}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="description">Task Description: </label>
        <input
          type="text"
          name="description"
          placeholder="Enter Task Description"
          value={newTask.description}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="priority">Task Priority: </label>
        <input
          type="text"
          name="priority"
          placeholder="Enter Task Priority"
          value={newTask.priority}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="title">Is edititng: </label>
        <input
          type="checkbox"
          id="isEditing"
          name="isEditing"
          checked={newTask.isEditing}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
