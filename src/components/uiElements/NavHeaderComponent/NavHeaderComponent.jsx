import "./NavHeaderComponent.scss";
import { useNavigate } from "react-router-dom";
export default function NavHeaderComponent({ children }) {
  const navigate = useNavigate();
  return (
    <div className={"nav-header-container"}>
      <button
        className={"nav-header-container__link"}
        onClick={() => navigate(-1)}
      >
        🠔
      </button>
      <h2 className={"nav-header-container__headline"}>{children}</h2>
    </div>
  );
}
