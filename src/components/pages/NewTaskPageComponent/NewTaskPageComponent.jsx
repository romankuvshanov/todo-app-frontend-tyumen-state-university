import NavHeaderComponent from "../../uiElements/NavHeaderComponent/NavHeaderComponent";
import FormInputComponent from "../../uiElements/FormInputComponent/FormInputComponent";
import ButtonComponent from "../../uiElements/ButtonComponent/ButtonComponent";
import "./NewTaskPageComponent.scss";

export default function NewTaskPageComponent() {
  return (
    <>
      <NavHeaderComponent>Добавить новую задачу</NavHeaderComponent>
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
