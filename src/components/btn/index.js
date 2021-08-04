const Btn = (props) => {
  return (
    <button
      className={`btn-regular ${props.color} ripple-${props.ripple} ${props.hide} ${props.ph}`}
      id={props.id}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};
export default Btn;
