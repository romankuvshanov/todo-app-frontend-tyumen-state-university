import "./AllTasksPage.scss";
import NavHeaderComponent from "../NavHeaderComponent/NavHeaderComponent";
import TaskComponent from "../TaskComponent/TaskComponent";

export default function AllTasksPage() {
  return (
    <>
      <NavHeaderComponent to={"/menu"}>Все задачи</NavHeaderComponent>
      {tasks
        .filter((task) => !task.isCompleted)
        .map((task) => {
          return (
            <TaskComponent
              title={task.taskTitle}
              datetime={task.scheduledTime}
              key={task.taskId}
            ></TaskComponent>
          );
        })}
    </>
  );
}

const tasks = [
  {
    taskId: 0,
    taskTitle: "Прием у врача",
    isCompleted: false,
    scheduledTime: "01.01.2023 01:01",
  },
  {
    taskId: 1,
    taskTitle: "Купить продукты",
    isCompleted: false,
    scheduledTime: "01.01.2023 01:01",
  },
  {
    taskId: 2,
    taskTitle: "Оплатить услуги риелторского агенства",
    isCompleted: false,
    scheduledTime: "01.01.2023 01:01",
  },
];
