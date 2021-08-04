import BtnCircle from "../btnCircle";
import { useState } from "react";
// icons
import lightning from "../../assets/icons/lightning.svg";
import Inbox from "../../assets/icons/chats-purple.svg";
import Task from "../../assets/icons/task-orange.svg";
const BtnGroup = (props) => {
  const [show, setShow] = useState(false);
  return (
    <div className="bottom-right">
      <BtnCircle
        url={lightning}
        title="lightning"
        ripple="blue"
        onClick={() => {
          setShow(!show);
        }}
      />
      {show ? (
        <>
          <BtnCircle
            url={Inbox}
            title="Inbox"
            ripple="white"
            onClick={props.onClickInbox}
          />
          <BtnCircle
            url={Task}
            title="Task"
            ripple="white"
            onClick={props.onClickTask}
          />
        </>
      ) : null}
    </div>
  );
};

export default BtnGroup;
