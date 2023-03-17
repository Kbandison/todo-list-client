import React from "react";

const ToggleComplete = (props) => {
  return (
    <div>
      <button onClick={() => props.toggleComplete(props.task._id)}>
        {/* {props.task.isComplete ? "Mark Incomplete" : "Mark Complete"} */}
        Complete
      </button>
    </div>
  );
};

export default ToggleComplete;
