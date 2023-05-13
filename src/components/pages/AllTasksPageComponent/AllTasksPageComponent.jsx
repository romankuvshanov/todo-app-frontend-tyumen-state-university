import "./AllTasksPageComponent.scss";
import NavHeaderComponent from "../../uiElements/NavHeaderComponent/NavHeaderComponent";
import TaskComponent from "../../uiElements/TaskComponent/TaskComponent";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function AllTasksPageComponent() {
  const [data, setData] = useState([]);
  const { state } = useLocation();
  console.log(state?.token);

  useEffect(() => {
    fetch("https://localhost:7143/api/Data/allTasks/1", {
      method: "GET",
      headers: {
        Authorization:
          state?.token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data?.tasks);
        setData(data?.tasks)
      });
  }, []);

  return (
    <>
      <NavHeaderComponent>Все задачи</NavHeaderComponent>
      {data
        .filter((task) => !task.isCompleted)
        .map((task) => {
          return <TaskComponent task={task} key={task.id} token={state?.token}></TaskComponent>;
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
