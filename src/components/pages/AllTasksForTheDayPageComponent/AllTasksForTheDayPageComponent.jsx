import NavHeaderComponent from "../../uiElements/NavHeaderComponent/NavHeaderComponent";
import TaskComponent from "../../uiElements/TaskComponent/TaskComponent";
import "./AllTasksForTheDayPageComponent.scss";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function AllTasksForTheDayPageComponent() {
  const [currentDay, setCurrentDay] = useState(
    new Date().toJSON().slice(0, 10)
  );
  const [data, setData] = useState([]);
  const { state } = useLocation();
  console.log(state?.token);

  console.log(currentDay);
  console.log(new Date(currentDay).toLocaleDateString("ru-ru"));

  useEffect(() => {
    fetch(
      `https://localhost:7143/api/Data/allTasksByDay/1/${new Date(
        currentDay
      ).toLocaleDateString("ru-ru")}`,
      {
        method: "GET",
        headers: {
          Authorization: state?.token,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data?.tasks);
        setData(data?.tasks);
      });
  }, [currentDay]);

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
      {data
        .filter((task) => !task.isCompleted)
        .map((task) => {
          return <TaskComponent task={task} key={task.id} token={state?.token}></TaskComponent>;
        })}
      {data.length === 0 && (
        <p className={"no-tasks-paragraph"}>Задач на этот день нет</p>
      )}
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
