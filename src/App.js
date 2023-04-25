import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthComponent from "./components/AuthComponent/AuthComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import React from "react";
import MainPageComponent from "./components/pages/MainPageComponent/MainPageComponent";
import AllTasksPage from "./components/AllTasksPage/AllTasksPage";
import AllTasksForTheDay from "./components/AllTasksForTheDay/AllTasksForTheDay";
import AllTasksForTheWeek from "./components/AllTasksForTheWeek/AllTasksForTheWeek";
import Task from "./components/TaskPage/Task";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div className={"container"}>
          <HeaderComponent></HeaderComponent>
          <Routes>
            <Route path={"/"} element={<AuthComponent />}></Route>
            <Route path={"/menu"} element={<MainPageComponent />}></Route>
            <Route path={"/allTasks"} element={<AllTasksPage />}></Route>
            <Route
              path={"/allTasksForTheDay"}
              element={<AllTasksForTheDay />}
            ></Route>
            <Route
              path={"/allTasksForTheWeek"}
              element={<AllTasksForTheWeek />}
            ></Route>
            <Route path={"/task"} element={<Task></Task>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
