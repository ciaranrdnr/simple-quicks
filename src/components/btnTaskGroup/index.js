import Inbox from "../../assets/icons/chats-purple.svg";
import IconTask from "../iconTask";
const BtnTaskGroup = (props) => {
  return (
    <>
      <div className="btnGroup-Task">
        <div id="btnG-Inbox">
          <button
            className={`btn-circle ripple-white btnG-Inbox`}
            onClick={props.onClick}
          >
            <img src={Inbox} alt="inbox" />
          </button>
        </div>

        <div id={`btnG-Task`}>
          <button
            className={`btn-circle ripple-orange btn-group btnG-Task`}
            onClick={props.onClick}
          >
            <IconTask />
          </button>
        </div>
      </div>
    </>
  );
};
export default BtnTaskGroup;
