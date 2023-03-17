import React from "react";

const DeleteButton = (props) => {
  return (
    <div>
      <button onClick={() => props.deleteTask(props.task._id)}>
        Delete Task
      </button>
    </div>
  );
};

export default DeleteButton;
