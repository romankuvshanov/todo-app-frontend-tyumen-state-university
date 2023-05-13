import NavHeaderComponent from "../../uiElements/NavHeaderComponent/NavHeaderComponent";
import FormInputComponent from "../../uiElements/FormInputComponent/FormInputComponent";
import ButtonComponent from "../../uiElements/ButtonComponent/ButtonComponent";
import { toIsoString } from "../../../common/common";
import "./NewTaskPageComponent.scss";
import { useLocation, useNavigate } from "react-router-dom";

export default function NewTaskPageComponent() {
  const navigate = useNavigate();

  const { state } = useLocation();
  console.log(state?.token);
  function handleAddTaskSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    console.log(formData.get("task-title"));
    console.log(toIsoString(new Date(formData.get("datetime"))));
    console.log(formData.get("is-done"));

    fetch("https://localhost:7143/api/Data/newTask/1", {
      method: "POST",
      headers: {
        Authorization:
        state?.token,
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        taskTitle: formData.get("task-title"),
        isCompleted: formData.get("is-done") || false,
        scheduledTime: toIsoString(new Date(formData.get("datetime"))),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result === 'success') {
          alert('Задача успешно создана');
          navigate(-1);
        }
      });
  }

  return (
    <>
      <NavHeaderComponent>Добавить новую задачу</NavHeaderComponent>
      <form className={"from"} onSubmit={handleAddTaskSubmit}>
        <FormInputComponent
          title={"Задача"}
          inputProps={{
            id: "input-task-title",
            name: "task-title",
            type: "text",
            autoFocus: true,
            required: true,
            placeholder: "Что вы собираетесь сделать?",
          }}
        ></FormInputComponent>
        <FormInputComponent
          title={"Дата и время"}
          inputProps={{
            id: "input-datetime",
            name: "datetime",
            type: "datetime-local",
            required: true,
          }}
        ></FormInputComponent>
        <label className={"is-done-label"}>
          Выполнено
          <input
            className={"is-done-input"}
            id={"input-is-done"}
            name={"is-done"}
            type={"checkbox"}
            defaultValue={false}
          />
        </label>
        <div className={"button-container"}>
          <ButtonComponent
            type={"submit"}
            title={"Сохранить"}
          ></ButtonComponent>
        </div>
      </form>
    </>
  );
}
