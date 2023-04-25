import NavHeaderComponent from "../NavHeaderComponent/NavHeaderComponent";
import FormInputComponent from "../FormInputComponent/FormInputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import './Task.scss';
import {useLocation} from "react-router-dom";

export default function Task({mode = 'adding', taskId, taskTitle, scheduledTime, isCompleted}) {
    // const location = useLocation();
    // const from = location.state;
  return (
    <>
      <NavHeaderComponent to={"/menu"}>
          {mode === 'editing' ? 'Изменить' : 'Добавить новую'} задачу
      </NavHeaderComponent>
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
        <label className={'is-done-label'}>
            Выполнено
          <input className={'is-done-input'} id={"input-is-done"} name={"is-done"} type={"checkbox"} />
        </label>
        <ButtonComponent type={"submit"} title={"Сохранить"}></ButtonComponent>
      </form>
    </>
  );
}
