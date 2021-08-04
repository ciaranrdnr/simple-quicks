import TaskList from "../taskList";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import API from "../../services";
import Btn from "../btn";

const ModalTask = () => {
  const [tasks, setTasks] = useState([
    {
      id: nanoid(),
      title: "",
      description: "",
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
  useEffect(() => {
    getAPI({});
  }, []);

  return (
    <div className="ModalTask">
      <div className="ModalTask-inner">
        <div className="ModalTask-top">
          <ul></ul>
          <Btn color="blue" ripple="blue" title="New Task" />
        </div>
        <div className="ModalTask-bottom">
          <TaskList
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
