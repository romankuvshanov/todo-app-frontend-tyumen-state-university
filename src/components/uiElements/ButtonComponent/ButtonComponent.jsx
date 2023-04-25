import "./ButtonComponent.scss";

export default function ButtonComponent({ title, type, onClick, color = "" }) {
  return (
    <button
      className={`button-component__button button-component__button--${color}`}
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  );
}