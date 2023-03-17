import React from "react";
import ToggleComplete from "./ToggleComplete";
import DeleteButton from "./DeleteButton";

const EditBar = (props) => {
  return (
    <div>
      <ToggleComplete />
      <DeleteButton />
    </div>
  );
};

export default EditBar;
