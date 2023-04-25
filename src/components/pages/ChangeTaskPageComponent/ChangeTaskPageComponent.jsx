import NavHeaderComponent from "../../uiElements/NavHeaderComponent/NavHeaderComponent";
import FormInputComponent from "../../uiElements/FormInputComponent/FormInputComponent";
import ButtonComponent from "../../uiElements/ButtonComponent/ButtonComponent";
import "./ChangeTaskPageComponent.scss";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function ChangeTaskPageComponent() {
  const location = useLocation();
  const from = location.state;

  const [taskTitle, setTaskTitle] = useState(from?.task?.taskTitle);
  const [dateTime, setDateTime] = useState(from?.task?.scheduledTime);
  const [isDone, setIsDone] = useState(from?.task?.isCompleted);

  return (
    <>
      <NavHeaderComponent>Изменить задачу</NavHeaderComponent>
      <form className={"from"} onSubmit={(e) => e.preventDefault()}>
        <FormInputComponent
          title={"Задача"}
          inputProps={{
            id: "input-task-title",
            name: "task-title",
            type: "text",
            autoFocus: true,
            required: true,
            placeholder: "Что вы собираетесь сделать?",
            value: taskTitle,
            onChange: (e) => setTaskTitle(e.target.value),
          }}
        ></FormInputComponent>
        <FormInputComponent
          title={"Дата и время"}
          inputProps={{
            id: "input-datetime",
            name: "datetime",
            type: "datetime-local",
            required: true,
            value: dateTimeStringToHtmlDateTimeString(dateTime),
            onChange: (e) => setDateTime(e.target.value),
          }}
        ></FormInputComponent>
        <label className={"is-done-label"}>
          Выполнено
          <input
            className={"is-done-input"}
            id={"input-is-done"}
            name={"is-done"}
            type={"checkbox"}
            value={isDone}
            onChange={() => setIsDone(!isDone)}
          />
        </label>
        <div className={"buttons-container"}>
          <ButtonComponent
            type={"button"}
            title={"Удалить задачу"}
            color={'red'}
          ></ButtonComponent>
          <ButtonComponent
            type={"submit"}
            title={"Сохранить"}
          ></ButtonComponent>
        </div>
      </form>
    </>
  );
}

function dateTimeStringToHtmlDateTimeString(dateTimeString) {
  const date = dateTimeString.split(" ")[0];
  const time = dateTimeString.split(" ")[1];

  return `${date.split(".")[2]}-${date.split(".")[1]}-${
    date.split(".")[0]
  }T${time}`;
}
