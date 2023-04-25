import "./MainPageComponent.scss";
import LinkComponent from "../../LinkComponent/LinkComponent";

export default function MainPageComponent() {
  return (
    <>
      <h2 className={"small-headline"}>Главное меню</h2>
      <LinkComponent to={"/allTasks"}>Все задачи</LinkComponent>
      <LinkComponent to={"/allTasksForTheDay"}>Задачи на день</LinkComponent>
      <LinkComponent to={"/allTasksForTheWeek"}>Задачи на неделю</LinkComponent>
      <LinkComponent to={"/task"}>Добавить новую задачу</LinkComponent>
    </>
  );
}
