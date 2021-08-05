import { ReactComponent as IconBox } from "../../assets/icons/box.svg";
import { ReactComponent as IconCheckBox } from "../../assets/icons/checkbox.svg";
import { ReactComponent as IconExpand } from "../../assets/icons/expand.svg";
import { ReactComponent as IconMinimize } from "../../assets/icons/minimize.svg";
import { ReactComponent as IconDots } from "../../assets/icons/three-dots-black.svg";
import Btn from "../btn";

import TypeBar from "../typeBar";
import IconPencil from "../iconPencil";
import IconClock from "../iconClock";
import { useState } from "react";

const setInterval = (date) => {
  let now = new Date().getTime();
  var countDownDate = new Date(date).getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  days++;
  if (days < 0) {
    days = Math.abs(days);
    return `${days} Day Past`;
  } else if (days === 0) {
    return `Today`;
  } else {
    return `${days} Days Left`;
  }
};
const Task = ({
  id,
  title,
  description,
  date,
  done,
  handleEditTask,
  handleDeleteTask,
}) => {
  const [t, setT] = useState(title);
  const [d, setD] = useState(date);
  const [desc, setDesc] = useState(description);
  const [showDelete, setShowDelete] = useState(false);
  const [showValue, setShowValue] = useState(true);
  const [checked, setChecked] = useState(done);
  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.ctrlKey === true) {
      e.preventDefault();

      if ((t.trim().length > 0) & (desc.trim().length > 0)) {
        handleEditTask(id, t, desc, d, checked);
      }
    }
  };
  const notNull = () => {
    if (
      id !== "" ||
      title !== "" ||
      description !== "" ||
      date !== "" ||
      done !== ""
    ) {
      return true;
    }
  };
  return (
    <>
      {notNull ? (
        <form onSubmit={() => onEnterPress}>
          <div className="container-item white border-bottom">
            <div className="taskTopper">
              <div className="taskTopper-left">
                <div>
                  <button
                    type=""
                    className="no-box no-border"
                    onClick={(e) => {
                      e.preventDefault();
                      setChecked(!checked);
                      handleEditTask(id, t, desc, d, !checked);
                    }}
                  >
                    {checked ? <IconCheckBox /> : <IconBox />}
                  </button>
                </div>
                <div>
                  {checked ? (
                    <TypeBar
                      ph="Task Title"
                      btn="none"
                      class="no-box bold done"
                      onChange={(e) => {
                        setT(e.target.value);
                      }}
                      width="300"
                      value={t}
                    />
                  ) : (
                    <TypeBar
                      ph="Task Title"
                      btn="none"
                      class="no-box bold"
                      onChange={(e) => {
                        setT(e.target.value);
                      }}
                      width="300"
                      value={t}
                    />
                  )}
                </div>
              </div>
              <div className="taskTopper-right">
                <p className="limit">{setInterval(date)}</p>
                <p>{date}</p>
                <button
                  className="no-box no-border"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowValue(!showValue);
                  }}
                >
                  {showValue ? <IconExpand /> : <IconMinimize />}
                </button>
                <div className="dropdown">
                  <button
                    className="no-box no-border"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowDelete(!showDelete);
                    }}
                  >
                    <IconDots />
                  </button>
                  {showDelete ? (
                    <Btn
                      title="Delete"
                      color="white"
                      ripple="white"
                      onClick={(e) => {
                        e.preventDefault();
                        handleDeleteTask(id);
                      }}
                    />
                  ) : null}
                </div>
              </div>
            </div>
            {showValue ? (
              <div className="task-value">
                <div className="taskValue-top">
                  <IconClock color="blue" />
                  <TypeBar
                    ph="Set Date"
                    btn="none"
                    type="date"
                    date={d}
                    onChange={(e) => {
                      setD(e.target.value);
                    }}
                    width="220"
                  />
                </div>
                <div className="taskValue-bottom">
                  {desc !== "" ? (
                    <IconPencil color="blue" />
                  ) : (
                    <IconPencil color="grey" />
                  )}

                  <textarea
                    className="no-box description"
                    cols="1"
                    wrap="hard"
                    rows="3"
                    placeholder="No Description"
                    value={desc}
                    onChange={(e) => {
                      setDesc(e.target.value);
                    }}
                    onKeyDown={onEnterPress}
                    onBlur={(e) => {
                      e.preventDefault();
                      if (
                        (title.trim().length > 0) &
                        (description.trim().length > 0)
                      ) {
                        handleEditTask(id, t, desc, d, checked);
                      }
                    }}
                  />
                </div>
              </div>
            ) : null}
          </div>
        </form>
      ) : null}
    </>
  );
};

export default Task;
