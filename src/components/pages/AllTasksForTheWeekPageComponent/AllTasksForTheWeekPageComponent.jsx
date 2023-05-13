import NavHeaderComponent from "../../uiElements/NavHeaderComponent/NavHeaderComponent";
import "./AllTasksForTheWeekPageComponent.scss";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function AllTasksForTheWeekPageComponent() {
  const [currentWeek, setCurrentWeek] = useState(
    `${new Date(Date.now()).getFullYear()}-W${getWeekNumber(
      new Date(Date.now())
    )}`
  );
  const [data, setData] = useState([]);
  const { state } = useLocation();
  console.log(state?.token);

  useEffect(() => {
    fetch(
      `https://localhost:7143/api/Data/allTasksByWeek/1/${getWeekStartAndEndString(
        currentWeek
      ).slice(0, 10)}`,
      {
        method: "GET",
        headers: {
          Authorization: state?.token,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, [currentWeek]);

  const tableRows = [];
  for (let rows = 0; rows < getWeekTasksDepth(data); rows++) {
    const tableCells = [];

    const week = currentWeek.split("-")[1].slice(1);
    const year = currentWeek.split("-")[0];
    const nextMonday = getDateOfISOWeek(week, year);

    for (let i = 0; i < 7; i++) {
      nextMonday.setDate(nextMonday.getDate() + 1);
      if (
        data.hasOwnProperty(nextMonday.toISOString().slice(0, 10)) &&
        data[nextMonday.toISOString().slice(0, 10)].length > rows
      ) {
        tableCells.push(
          <td
            className={"td-tasked"}
            key={data[nextMonday.toISOString().slice(0, 10)][rows].id}
          >
            <Link
              className={"td-tasked-title"}
              to={"/changeTask"}
              state={{
                task: data[nextMonday.toISOString().slice(0, 10)][rows],
                token: state?.token
              }}
            >
              {data[nextMonday.toISOString().slice(0, 10)][rows].taskTitle}
            </Link>
          </td>
        );
      } else {
        tableCells.push(
          <td key={rows + nextMonday.toISOString().slice(0, 10)}></td>
        );
      }
    }
    tableRows.push(<tr key={rows}>{tableCells}</tr>);
  }

  return (
    <>
      <NavHeaderComponent>
        Задачи на {getWeekStartAndEndString(currentWeek)}
      </NavHeaderComponent>
      <p>
        <input
          name={"current-week"}
          id={"current-week"}
          className={"current-week"}
          type={"week"}
          value={currentWeek}
          onChange={(e) => setCurrentWeek(e.target.value)}
        />
      </p>
      {Object.keys(data).length === 0 ? (
        <p className={"no-tasks-paragraph"}>Задач на эту неделю нет</p>
      ) : (
        <table className={"calendar"}>
          <thead>
            <tr>
              <th>Пн</th>
              <th>Вт</th>
              <th>Ср</th>
              <th>Чт</th>
              <th>Пт</th>
              <th>Сб</th>
              <th>Вс</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      )}
    </>
  );
}

function getWeekNumber(date) {
  const startDate = new Date(date.getFullYear(), 0, 1);
  let days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
  return Math.ceil(days / 7);
}

function getWeekStartAndEndString(weekString) {
  const week = weekString.split("-")[1].slice(1);
  const year = weekString.split("-")[0];
  const nextMonday = getDateOfISOWeek(week, year);
  nextMonday.setDate(nextMonday.getDate() + 6);
  return `${getDateOfISOWeek(week, year).toLocaleDateString(
    "ru-RU"
  )}-${nextMonday.toLocaleDateString("ru-RU")}`;
}

function getDateOfISOWeek(w, y) {
  let simple = new Date(y, 0, 1 + (w - 1) * 7);
  let dow = simple.getDay();
  let ISOWeekStart = simple;
  if (dow <= 4) ISOWeekStart.setDate(simple.getDate() - simple.getDay() + 1);
  else ISOWeekStart.setDate(simple.getDate() + 8 - simple.getDay());
  return ISOWeekStart;
}

function getWeekTasksDepth(weeklyTasks) {
  let result = 0;
  for (let day in weeklyTasks) {
    if (weeklyTasks[day].length > result) result = weeklyTasks[day].length;
  }
  return result;
}

function enrichWeekTasksObjectWithEmptyDays(weekTasks, weekString) {
  const weekTasksClone = structuredClone(weekTasks);
  const week = weekString.split("-")[1].slice(1);
  const year = weekString.split("-")[0];
  const nextMonday = getDateOfISOWeek(week, year);

  for (let i = 0; i < 7; i++) {
    nextMonday.setDate(nextMonday.getDate() + 1);
    if (!weekTasksClone.hasOwnProperty(nextMonday.toISOString().slice(0, 10))) {
      weekTasksClone[nextMonday.toISOString().slice(0, 10)] = [];
    }
  }

  return weekTasksClone;
}

// TODO: Добавить токена передачу

const weeklyTasks = {
  "24.04.2023": [
    {
      taskId: 10,
      taskTitle: "Купить продукты",
      isCompleted: false,
      scheduledTime: "24.04.2023 01:01",
    },
    {
      taskId: 11,
      taskTitle: "Купить продукты",
      isCompleted: false,
      scheduledTime: "24.04.2023 02:01",
    },
  ],
  "25.04.2023": [
    {
      taskId: 12,
      taskTitle: "Приём у врача",
      isCompleted: false,
      scheduledTime: "25.04.2023 01:01",
    },
    {
      taskId: 13,
      taskTitle: "Приём у врача",
      isCompleted: false,
      scheduledTime: "25.04.2023 02:01",
    },
  ],
  "26.04.2023": [
    {
      taskId: 14,
      taskTitle: "Оплатить услуги риелторского агенства",
      isCompleted: false,
      scheduledTime: "26.04.2023 01:01",
    },
    {
      taskId: 15,
      taskTitle: "Оплатить услуги риелторского агенства",
      isCompleted: false,
      scheduledTime: "26.04.2023 02:01",
    },
  ],
  "27.04.2023": [],
  "28.04.2023": [
    {
      taskId: 16,
      taskTitle: "Задача 5",
      isCompleted: false,
      scheduledTime: "28.04.2023 01:01",
    },
    {
      taskId: 17,
      taskTitle: "Задача 5",
      isCompleted: false,
      scheduledTime: "28.04.2023 02:01",
    },
    {
      taskId: 18,
      taskTitle: "Задача 5",
      isCompleted: false,
      scheduledTime: "28.04.2023 03:01",
    },
  ],
  "29.04.2023": [
    {
      taskId: 19,
      taskTitle: "Задача 6",
      isCompleted: false,
      scheduledTime: "29.04.2023 01:01",
    },
    {
      taskId: 20,
      taskTitle: "Задача 6",
      isCompleted: false,
      scheduledTime: "29.04.2023 02:01",
    },
  ],
  "30.04.2023": [
    {
      taskId: 21,
      taskTitle: "Задача 7",
      isCompleted: false,
      scheduledTime: "30.04.2023 01:01",
    },
    {
      taskId: 22,
      taskTitle: "Задача 7",
      isCompleted: false,
      scheduledTime: "30.04.2023 02:01",
    },
    {
      taskId: 23,
      taskTitle: "Приём у врача",
      isCompleted: false,
      scheduledTime: "30.04.2023 03:01",
    },
    {
      taskId: 24,
      taskTitle: "Отправить посылку покупателю",
      isCompleted: false,
      scheduledTime: "30.04.2023 04:01",
    },
  ],
};
