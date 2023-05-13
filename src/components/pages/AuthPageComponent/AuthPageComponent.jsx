import "./AuthPageComponent.scss";
import FormInputComponent from "../../uiElements/FormInputComponent/FormInputComponent";
import ButtonComponent from "../../uiElements/ButtonComponent/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AuthPageComponent() {
  const navigate = useNavigate();
  const [loginWasNotSuccessful, setLoginWasNotSuccessful] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch("https://localhost:7143/api/Auth/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        login: formData.get("login"),
        password: formData.get("password"),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result === "success") {
          setLoginWasNotSuccessful(false);
          navigate("/menu", { replace: true, state: {token: data?.token} });
        } else {
          setLoginWasNotSuccessful(true);
        }
      })
      .catch((error) => {
        setLoginWasNotSuccessful(true);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* TODO: Здесь лучше использовать компонент или input с label? Как удобнее передавать props?
       Ломается автодополнение ide*/}
      <FormInputComponent
        title={"Логин"}
        inputProps={{
          id: "input-login",
          name: "login",
          type: "text",
          autoFocus: true,
          required: true,
          placeholder: "Ваш логин",
        }}
      ></FormInputComponent>

      <FormInputComponent
        title={"Пароль"}
        inputProps={{
          id: "input-password",
          name: "password",
          type: "password",
          required: true,
          placeholder: "Ваш пароль",
        }}
      ></FormInputComponent>

      {loginWasNotSuccessful && (
        <p className={`auth-component__error-message`}>
          Логин и/или пароль не правильны. Пожалуйста, попробуйте, снова.
        </p>
      )}
      <div className={"button-container"}>
        <ButtonComponent
          onClick={() => setLoginWasNotSuccessful(false)}
          type={"submit"}
          title={"Войти"}
        ></ButtonComponent>
      </div>
    </form>
  );
}
