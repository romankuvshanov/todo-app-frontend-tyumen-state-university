import './ButtonComponent.scss'

export default function ButtonComponent({title, type, onClick}) {
    return <button className={'button-component__button'} type={type} onClick={onClick}>{title}</button>;
}