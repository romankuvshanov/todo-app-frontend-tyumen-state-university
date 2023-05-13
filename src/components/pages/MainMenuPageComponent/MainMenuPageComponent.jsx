import "./MainMenuPageComponent.scss";
import LinkComponent from "../../uiElements/LinkComponent/LinkComponent";
import { useLocation } from "react-router-dom";

export default function MainMenuPageComponent() {
  const { state } = useLocation();
  console.log(state?.token);

  return (
    <>
      <h2 className={"small-headline"}>Главное меню</h2>
      <LinkComponent to={"/allTasks"} state={{ token: state?.token }}>
        Все задачи
      </LinkComponent>
      <LinkComponent to={"/allTasksForTheDay"} state={{ token: state?.token }}>
        Задачи на день
      </LinkComponent>
      <LinkComponent to={"/allTasksForTheWeek"} state={{ token: state?.token }}>
        Задачи на неделю
      </LinkComponent>
      <LinkComponent to={"/newTask"} state={{ token: state?.token }}>
        Добавить новую задачу
      </LinkComponent>
    </>
  );
}
