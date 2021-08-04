const BtnCircle = (props) => {
  if (props.title !== "lightning") {
    return (
      <div id={`${props.title}`}>
        <label className={`label`}>{props.title}</label>

        <button
          className={`btn-circle ripple-${props.ripple} btn-group btnC-${props.title}`}
          onClick={props.onClick}
        >
          <img src={props.url} alt={props.url} />
        </button>
      </div>
    );
  } else {
    return (
      <div className="end">
        <button
          className={`btn-circle ripple-${props.ripple} btnC-${props.title}`}
          onClick={props.onClick}
        >
          <img src={props.url} alt={props.url} />
        </button>
      </div>
    );
  }
};

export default BtnCircle;
