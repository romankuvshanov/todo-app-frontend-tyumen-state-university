import "./TaskComponent.scss";
import { Link } from "react-router-dom";

export default function TaskComponent({ task, token }) {
  return (
    <div className={"task"}>
      <h3>
        <Link to={"/changeTask"} className={"task-headline"} state={{task: task, token: token}}>
          {task.taskTitle}
        </Link>
      </h3>
      <p>{new Date(task.scheduledTime).toLocaleString('ru-ru').replace(',', '')}</p>
    </div>
  );
}