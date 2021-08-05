import { useSpring, animated } from "react-spring";
import { nanoid } from "nanoid";
import { css } from "@emotion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import GridLoader from "react-spinners/GridLoader";
import TaskList from "../taskList";
import API from "../../services";
import Btn from "../btn";
import "react-dropdown/style.css";
const ModalTask = ({ showTask, setShowTask }) => {
  const modalRef = useRef();
  const [loading, setLoading] = useState(false);
  const [didMount, setDidMount] = useState(false);
  const [showNewTask, setShowNewTask] = useState(false);
  const [selectedClient, setSelectedClient] = useState("");
  const [tasks, setTasks] = useState([
    {
      id: nanoid(),
      title: "Title",
      description: "Description",
      date: "2021-08-25",
    },
  ]);

  const getAPI = () => {
    API.getTasksAPI().then((res) => {
      setTasks(res);
    });
  };
  const postAPI = (data) => {
    API.postTaskAPI(data).then((res) => {
      getAPI();
    });
  };
  const updateAPI = (data) => {
    API.updateTaskAPI(data, data.id).then((res) => {
      getAPI();
    });
  };
  const addTask = (title, description, date) => {
    const newTask = {
      id: nanoid(),
      title: title,
      description: description,
      date: date,
      done: false,
    };
    postAPI(newTask);
  };

  const deleteTask = (id) => {
    API.deleteTaskAPI(id).then((res) => {
      getAPI();
    });
  };
  const editTask = (key, title, description, date, done) => {
    const editedTask = {
      id: key,
      title: title,
      description: description,
      date: date,
      done: done,
    };
    updateAPI(editedTask);
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowTask(false);
    }
  };
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showTask) {
        setShowTask(false);
      }
    },
    [setShowTask, showTask]
  );
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showTask ? 1 : 0,
    transform: showTask ? "traslateY(0%)" : "translateY(-100%)",
  });
  const override = css`
    display: block;
    margin: 0 auto;
  `;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    document.addEventListener("keydown", keyPress);
    getAPI({});
    setDidMount(true);
    return () => {
      document.removeEventListener("keydown", keyPress);
      setDidMount(false);
    };
  }, [keyPress]);
  if (!didMount) {
    return null;
  } else {
    return (
      // <ClipLoader color={"#4f4f4f"} loading={loading} size={150} />

      <>
        {showTask ? (
          <div className="background" ref={modalRef} onClick={closeModal}>
            <div className="ModalTask-inner">
              {loading ? (
                <div>
                  <GridLoader
                    color={"#4f4f4f"}
                    css={override}
                    loading={loading}
                    size={15}
                  />
                  <p>Loading Task List ...</p>
                </div>
              ) : (
                <animated.div style={animation}>
                  <div className="ModalTask-top">
                    <select
                      value={selectedClient}
                      onChange={(e) => {
                        setSelectedClient(e.target.value);
                      }}
                    >
                      <option value="My Tasks">My Tasks</option>
                      <option value="Personal Errands">Personal Errands</option>
                      <option value="Urgent To-Do">Urgent To-Do</option>
                    </select>
                    <Btn
                      color="blue"
                      ripple="blue"
                      title="New Task"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowNewTask(!showNewTask);
                      }}
                    />
                  </div>
                  <div className="ModalTask-bottom">
                    <TaskList
                      showNewTask={showNewTask}
                      tasks={tasks}
                      handleAddTask={addTask}
                      handleEditTask={editTask}
                      handleDeleteTask={deleteTask}
                    />
                  </div>
                </animated.div>
              )}
            </div>
          </div>
        ) : null}
      </>
    );
  }
};
export default ModalTask;
