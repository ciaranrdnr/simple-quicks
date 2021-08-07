import { ReactComponent as IconExpand } from "../../assets/icons/expand.svg";
import { ReactComponent as IconMinimize } from "../../assets/icons/minimize.svg";
import { ReactComponent as IconBox } from "../../assets/icons/box.svg";
import { ReactComponent as IconDots } from "../../assets/icons/three-dots-black.svg";
import IconPencil from "../iconPencil";
import IconClock from "../iconClock";
import Btn from "../btn";

import TypeBar from "../typeBar/";
import { useEffect, useState } from "react";

const AddTask = ({ handleAddTask, type }) => {
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
  const [tipe, setTipe] = useState(type);
  const [colorDate, setColorDate] = useState("grey");
  const [date, setDate] = useState(`${Y}-${M}-${D}`);
  const [showDelete, setShowDelete] = useState(false);
  const [showNew, setShowNew] = useState(true);
  const [showValue, setShowValue] = useState(true);
  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.ctrlKey === true) {
      e.preventDefault();
      if (title.trim().length > 0) {
        handleAddTask(title, tipe, description, date);
        setShowNew(false);
        setDescription("");
        setTitle("");
        setDate(`${Y}-${M}-${D}`);
      }
    }
  };
  useEffect(() => {
    if (type === "All Tasks") {
      setTipe("My Tasks");
    }
  }, [type]);

  if (showNew === true) {
    return (
      <form onSubmit={onEnterPress}>
        <div className="addTask white border-bottom">
          <div className="addTask-Topper">
            <div className="addTaskTopper-left">
              <div className="">
                <IconBox />
              </div>
              <div className="">
                <TypeBar
                  ph="Task Title"
                  btn="none"
                  class="addTask"
                  width="400"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="addTaskTopper-right">
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
                      setShowNew(!showNew);
                    }}
                  />
                ) : null}
              </div>
            </div>
          </div>
          {showValue ? (
            <div className="addTask-value">
              <div className="addTaskValue-top">
                <IconClock color={colorDate} />
                <TypeBar
                  ph="Set Date"
                  btn="none"
                  type="date"
                  value={date}
                  min={`${Y}-${M}-${D}`}
                  onChange={(e) => {
                    setDate(e.target.value);
                    setColorDate("blue");
                  }}
                  onBlur={(e) => {
                    e.preventDefault();
                    if (tipe === "All Tasks" && title.trim().length > 0) {
                      handleAddTask(title, "My Tasks", description, date);
                    } else if (title.trim().length > 0) {
                      handleAddTask(title, tipe, description, date);
                    }
                  }}
                  width="220"
                />
              </div>
              <div className="addTaskValue-bottom">
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
                  }}
                  onKeyDown={onEnterPress}
                  onBlur={(e) => {
                    e.preventDefault();

                    if (
                      (title.trim().length > 0) &
                      (description.trim().length > 0)
                    ) {
                      if (tipe === "All Tasks") {
                        handleAddTask(title, "My Tasks", description, date);
                      } else {
                        handleAddTask(title, tipe, description, date);
                      }
                      setDescription("");
                      setTitle("");
                      setDate(`${Y}-${M}-${D}`);
                      setShowNew(false);
                    }
                  }}
                />
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
