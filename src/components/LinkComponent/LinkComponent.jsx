import './LinkComponent.scss'
import {Link} from "react-router-dom";
export default function LinkComponent({children, to}) {
    return <Link className={'link'} to={to}>{children}</Link>;
}