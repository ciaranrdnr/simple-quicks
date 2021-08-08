import BtnCircle from "../btnCircle";
import lightning from "../../assets/icons/lightning.svg";
import Inbox from "../../assets/icons/chats-purple.svg";
import Task from "../../assets/icons/task-orange.svg";
const BtnGroup = (
  { showBtn, onClickTask, onClickLightning, onClickInbox },
  props
) => {
  return (
    <div className="bottom-right">
      <BtnCircle
        url={lightning}
        title="lightning"
        ripple="blue"
        onClick={onClickLightning}
      />
      {showBtn ? (
        <>
          <BtnCircle
            url={Inbox}
            title="Inbox"
            ripple="white"
            onClick={onClickInbox}
          />
          <BtnCircle
            url={Task}
            title="Task"
            ripple="white"
            onClick={onClickTask}
          />
        </>
      ) : null}
    </div>
  );
};

export default BtnGroup;
