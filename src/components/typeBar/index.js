import Btn from "../btn";
const TypeBar = (props) => {
  if ((props.btn !== "none") & (props.type !== "date")) {
    return (
      <div className="flex chatBar">
        <input
          placeholder={`Type ${props.ph}`}
          className={`${props.ph} typeBar`}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          readOnly={props.readOnly}
        ></input>
        <Btn title="Send" ripple="blue" color="blue" />
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
        onBlur={props.onBlur}
        min={props.min}
        readOnly={props.readOnly}
      ></input>
    );
  } else {
    return (
      <input
        placeholder={`Type ${props.ph}`}
        className={`${props.ph} ${props.class} typeBar`}
        value={props.value}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
        onBlur={props.onBlur}
        type={props.type}
        readOnly={props.readOnly}
      ></input>
    );
  }
};
export default TypeBar;
