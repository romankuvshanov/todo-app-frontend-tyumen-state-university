import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPageComponent from "./components/pages/AuthPageComponent/AuthPageComponent";
import HeaderComponent from "./components/uiElements/HeaderComponent/HeaderComponent";
import React from "react";
import MainMenuPageComponent from "./components/pages/MainMenuPageComponent/MainMenuPageComponent";
import AllTasksPageComponent from "./components/pages/AllTasksPageComponent/AllTasksPageComponent";
import AllTasksForTheDayPageComponent from "./components/pages/AllTasksForTheDayPageComponent/AllTasksForTheDayPageComponent";
import AllTasksForTheWeekPageComponent from "./components/pages/AllTasksForTheWeekPageComponent/AllTasksForTheWeekPageComponent";
import NewTaskPageComponent from "./components/pages/NewTaskPageComponent/NewTaskPageComponent";
import ChangeTaskPageComponent from "./components/pages/ChangeTaskPageComponent/ChangeTaskPageComponent";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div className={"container"}>
          <HeaderComponent></HeaderComponent>
          <Routes>
            <Route path={"/"} element={<AuthPageComponent />}></Route>
            <Route path={"/menu"} element={<MainMenuPageComponent />}></Route>
            <Route
              path={"/allTasks"}
              element={<AllTasksPageComponent />}
            ></Route>
            <Route
              path={"/allTasksForTheDay"}
              element={<AllTasksForTheDayPageComponent />}
            ></Route>
            <Route
              path={"/allTasksForTheWeek"}
              element={<AllTasksForTheWeekPageComponent />}
            ></Route>
            <Route path={"/newTask"} element={<NewTaskPageComponent />}></Route>
            <Route
              path={"/changeTask"}
              element={<ChangeTaskPageComponent />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
