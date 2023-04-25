import "./AuthComponent.scss";
import FormInputComponent from "../FormInputComponent/FormInputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AuthComponent() {
  const navigate = useNavigate();
  const [loginWasNotSuccessful, setLoginWasNotSuccessful] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    if (
      formData.get("login") === "admin" &&
      formData.get("password") === "admin"
    ) {
      setLoginWasNotSuccessful(false);
      navigate("/menu", { replace: true });
    } else {
      setLoginWasNotSuccessful(true);
    }
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

      <ButtonComponent
        onClick={() => setLoginWasNotSuccessful(false)}
        type={"submit"}
        title={"Войти"}
      ></ButtonComponent>
    </form>
  );
}
