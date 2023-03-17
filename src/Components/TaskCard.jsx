const TaskCard = (props) => {
  return (
    <div>
      <h3>{props.task.title}</h3>
      <p>Task ID: {props.task._id}</p>
      <p>{props.task.description}</p>
      <p>Date Created: {props.task.dateCreated}</p>
    </div>
  );
};

export default TaskCard;
