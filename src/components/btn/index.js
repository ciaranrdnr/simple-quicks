const Btn = (props) => {
  return (
    <button
      className={`btn-regular ${props.color} ripple-${props.ripple} ${props.title}`}
      id={props.id}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};
export default Btn;
