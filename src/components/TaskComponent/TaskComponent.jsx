import './TaskComponent.scss';
import {Link} from "react-router-dom";

export default function TaskComponent({title, datetime}) {
    return (<div className={'task'}>
        <h3><Link to={'/task'} className={'task-headline'}>{title}</Link></h3>
        <p>{datetime}</p>
    </div>);
}