import { ReactComponent as IconClock } from "../../assets/icons/clock.svg";
import { ReactComponent as IconPencil } from "../../assets/icons/pencil.svg";
import { ReactComponent as IconExpand } from "../../assets/icons/expand.svg";
import { ReactComponent as IconMinimize } from "../../assets/icons/minimize.svg";
import { ReactComponent as IconBox } from "../../assets/icons/box.svg";
import { ReactComponent as IconDots } from "../../assets/icons/three-dots-black.svg";
import Btn from "../btn";

import TypeBar from "../typeBar/";
import { useState } from "react";

const AddTask = ({ handleAddTask }) => {
  const now = new Date();
  const Y = now.getFullYear();
  let M = now.getMonth();
  if (M < 10) {
    M++;
    M = `0${M}`;
  }
  let D = now.getDate();
  if (D < 10) {
    D = `0${D}`;
  }
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(`${Y}-${M}-${D}`);
  const [showDelete, setShowDelete] = useState(false);
  const [showNew, setShowNew] = useState(true);
  const [showValue, setShowValue] = useState(true);
  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.ctrlKey === true) {
      e.preventDefault();
      if ((title.trim().length > 0) & (description.trim().length > 0)) {
        handleAddTask(title, description, date);
        setDescription("");
        setTitle("");
        setDate(`${Y}-${M}-${D}`);
      }
    }
  };
  if (showNew === true) {
    return (
      <form onSubmit={onEnterPress}>
        <div className="container-item column white border-bottom">
          <div className="item row">
            <div className="row">
              <IconBox />
            </div>
            <div className="row">
              <TypeBar
                ph="Task Title"
                btn="none"
                width="400"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="space row ">
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
                      //   handleDeleteTask(id);
                      e.preventDefault();
                      setShowNew(!showNew);
                    }}
                  />
                ) : null}
              </div>
            </div>
          </div>
          {showValue ? (
            <div className="row start value">
              <div className="row empty"></div>
              <div className="column">
                <div className="row item">
                  <IconClock />
                  <TypeBar
                    ph="Set Date"
                    btn="none"
                    type="date"
                    value={date}
                    min={`${Y}-${M}-${D}`}
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                    min={`${Y}-${M}-${D}`}
                    width="220"
                  />
                </div>
                <div className="item row start ">
                  {description !== "" ? (
                    <IconPencil color="blue" />
                  ) : (
                    <IconPencil color="grey" />
                  )}
                  <textarea
                    className="no-box description"
                    rows="2"
                    placeholder="No Description"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                      console.log(description);
                    }}
                    onKeyDown={onEnterPress}
                  />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </form>
    );
  } else {
    return <></>;
  }
};

export default AddTask;
