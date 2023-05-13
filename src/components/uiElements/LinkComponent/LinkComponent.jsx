import './LinkComponent.scss'
import {Link} from "react-router-dom";
export default function LinkComponent({children, to, state}) {
    return <Link className={'link'} to={to} state={state}>{children}</Link>;
}