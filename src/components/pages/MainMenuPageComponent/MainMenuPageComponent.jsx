import "./MainMenuPageComponent.scss";
import LinkComponent from "../../uiElements/LinkComponent/LinkComponent";

export default function MainMenuPageComponent() {
  return (
    <>
      <h2 className={"small-headline"}>Главное меню</h2>
      <LinkComponent to={"/allTasks"}>Все задачи</LinkComponent>
      <LinkComponent to={"/allTasksForTheDay"}>Задачи на день</LinkComponent>
      <LinkComponent to={"/allTasksForTheWeek"}>Задачи на неделю</LinkComponent>
      <LinkComponent to={"/newTask"}>Добавить новую задачу</LinkComponent>
    </>
  );
}
