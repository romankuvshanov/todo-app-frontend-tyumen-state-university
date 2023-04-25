import NavHeaderComponent from "../../uiElements/NavHeaderComponent/NavHeaderComponent";
import TaskComponent from "../../uiElements/TaskComponent/TaskComponent";
import "./AllTasksForTheDayPageComponent.scss";
import { useState } from "react";

export default function AllTasksForTheDayPageComponent() {
  const [currentDay, setCurrentDay] = useState(Date.now());

  return (
    <>
      <NavHeaderComponent>
        Все задачи на{" "}
        <input
          id={"current-date"}
          name={"current-date"}
          className={"current-date"}
          type={"date"}
          value={new Date(currentDay).toLocaleDateString("en-CA")}
          onChange={(e) => setCurrentDay(e.target.value)}
        />
      </NavHeaderComponent>
      {tasks
        .filter((task) => !task.isCompleted)
        .map((task) => {
          return (
            <TaskComponent
              task={task}
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
