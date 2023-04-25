import './FormInputComponent.scss'

export default function FormInputComponent({ title, inputProps }) {
  return (
    <div className={'form-input-component__container'}>
      <label htmlFor={inputProps.id}>{title}</label>
      <input className={'form-input-component__input'} {...inputProps} />
    </div>
  );
}
