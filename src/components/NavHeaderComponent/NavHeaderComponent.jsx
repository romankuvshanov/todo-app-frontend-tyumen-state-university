import "./NavHeaderComponent.scss";
import { Link, useNavigate } from "react-router-dom";
export default function NavHeaderComponent({ to, children }) {
  const navigate = useNavigate();
  return (
    <div className={"nav-header-container"}>
      <button
        className={"nav-header-container__link"}
        onClick={() => navigate(-1)}
      >
        🠔
      </button>
      {/*<Link className={"nav-header-container__link"} to={to}>*/}
      {/*  🠔*/}
      {/*</Link>*/}
      <h2 className={"nav-header-container__headline"}>{children}</h2>
    </div>
  );
}
