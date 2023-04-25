import "./TaskComponent.scss";
import { Link } from "react-router-dom";

export default function TaskComponent({ task }) {
  return (
    <div className={"task"}>
      <h3>
        <Link to={"/changeTask"} className={"task-headline"} state={{task: task}}>
          {task.taskTitle}
        </Link>
      </h3>
      <p>{task.scheduledTime}</p>
    </div>
  );
}