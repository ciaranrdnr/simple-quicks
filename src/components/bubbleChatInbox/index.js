import { ReactComponent as IconDots } from "../../assets/icons/three-dots-black.svg";
const BubbleChatInbox = (props) => {
  return (
    <div className="bubbleInbox">
      <div className="bubbleTop inbox bubbleLabel">
        <p>
          <b>Elon Musk</b>
        </p>
      </div>
      <div className="bubbleBottom">
        <div className="bubbleChatInbox">
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
export default BubbleChatInbox;
