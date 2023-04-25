import NavHeaderComponent from "../../uiElements/NavHeaderComponent/NavHeaderComponent";
import FormInputComponent from "../../uiElements/FormInputComponent/FormInputComponent";
import ButtonComponent from "../../uiElements/ButtonComponent/ButtonComponent";
import "./ChangeTaskPageComponent.scss";
import { useLocation } from "react-router-dom";

export default function ChangeTaskPageComponent() {
  const location = useLocation();
  const from = location.state;
  return (
    <>
      <NavHeaderComponent>Изменить задачу</NavHeaderComponent>
      <form className={"from"}>
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
          />
        </label>
        <ButtonComponent type={"submit"} title={"Сохранить"}></ButtonComponent>
      </form>
    </>
  );
}
