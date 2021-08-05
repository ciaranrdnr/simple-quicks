import TaskList from "../taskList";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import API from "../../services";
import Btn from "../btn";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const ModalTask = () => {
  const [showNewTask, setShowNewTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: nanoid(),
      title: "Title",
      description: "Description",
      date: "",
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
    console.log(tasks);
  };
  const options = [
    { value: "My Tasks", label: "My Tasks" },
    { value: "Personal Errands", label: "Personal Errands" },
    { value: "Urgent To-Do", label: "Urgent To-Do" },
  ];
  const defaultOption = options[0];
  const [onSelect, setOnSelect] = useState(defaultOption);

  useEffect(() => {
    getAPI({});
  }, []);

  return (
    <div className="ModalTask">
      <div className="ModalTask-inner">
        <div className="ModalTask-top">
          <Dropdown
            options={options}
            onChange={(e) => {
              // setOnSelect(e.target.value);
              console.log(e.target.value);
            }}
            value={onSelect}
            placeholder="Select an option"
          />
          ;
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
      </div>
    </div>
  );
};
export default ModalTask;
