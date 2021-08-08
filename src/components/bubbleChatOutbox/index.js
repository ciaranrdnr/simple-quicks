import { ReactComponent as IconDots } from "../../assets/icons/three-dots-black.svg";
const BubbleChatOutbox = (props) => {
  return (
    <div className="bubbleOutbox">
      <div className="bubbleTop outbox bubbleLabel">
        <p>
          <b>Bill Gates (You)</b>
        </p>
      </div>
      <div className="bubbleBottom outbox">
        <div className="bubbleChatOutbox">
          <p>{props.message}</p>
          <small>19:32</small>
        </div>
        <div className="bubbleDot">
          <button
            className="no-box no-border"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <IconDots />
          </button>
        </div>
      </div>
    </div>
  );
};
export default BubbleChatOutbox;
