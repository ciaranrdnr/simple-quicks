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
  const [selectedClient, setSelectedClient] = useState("All Tasks");
  const [tasks, setTasks] = useState([
    {
      id: nanoid(),
      title: "Title",
      type: "My Tasks",
      description: "Description",
      date: "2021-08-25",
    },
  ]);
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const getAPI = () => {
    API.getTasksAPI().then((res) => {
      setTasks(res);
      setFilteredTasks(res);
    });
  };

  const filterType = (x) => {
    let filtered;
    if (x !== "All Tasks") {
      filtered = tasks.filter((task) => task.type === x);
      setFilteredTasks(filtered);
    } else {
      setFilteredTasks(tasks);
    }
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

  const addTask = (title, type, description, date) => {
    const newTask = {
      id: nanoid(),
      title: title,
      type: type,
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
    getAPI({});
    document.addEventListener("keydown", keyPress);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
      <>
        {showTask ? (
          <div className="background" ref={modalRef} onClick={closeModal}>
            <div className="ModalTask-inner">
              <animated.div style={animation}>
                <div className="ModalTask-top">
                  <select
                    value={selectedClient}
                    onChange={(e) => {
                      setSelectedClient(e.target.value);
                      filterType(e.target.value);
                    }}
                  >
                    <option value="All Tasks">All Tasks</option>
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
                {loading ? (
                  <div className="loader">
                    <GridLoader
                      color={"#828282"}
                      css={override}
                      loading={loading}
                      size={15}
                    />
                    <p>Loading Task List ...</p>
                  </div>
                ) : (
                  <div className="ModalTask-bottom">
                    <TaskList
                      showNewTask={showNewTask}
                      tasks={filteredTasks}
                      type={selectedClient}
                      handleAddTask={addTask}
                      handleEditTask={editTask}
                      handleDeleteTask={deleteTask}
                    />
                  </div>
                )}
              </animated.div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
};
export default ModalTask;
