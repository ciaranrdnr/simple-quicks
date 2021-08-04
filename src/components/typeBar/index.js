import Btn from "../btn";
const TypeBar = (props) => {
  if ((props.btn !== "none") & (props.type !== "date")) {
    return (
      <div className="flex">
        <input
          placeholder={`Type ${props.ph}`}
          className={`${props.ph} TypeBar`}
          value={props.value}
          onChange={props.onChange}
        ></input>
        <Btn title="Send" ripple="blue" />
      </div>
    );
  } else if (props.type === "date") {
    return (
      <input
        placeholder={`Type ${props.ph}`}
        className={`${props.ph} typeBar`}
        style={{ maxWidth: props.width + "px" }}
        value={props.date}
        onChange={props.onChange}
        type={props.type}
        min={props.min}
      ></input>
    );
  } else {
    return (
      <input
        placeholder={`Type ${props.ph} ${props.title}`}
        className={`${props.ph} ${props.class} typeBar`}
        value={props.value}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
        type={props.type}
      ></input>
    );
  }
};
export default TypeBar;
