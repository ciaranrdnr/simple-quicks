// import { useState } from "react";
import Task from "../task";
import AddTask from "../addTask";

const TaskList = ({
  showNewTask,
  tasks,
  handleAddTask,
  handleEditTask,
  handleDeleteTask,
}) => {
  return (
    <div className="tasks-list">
      {showNewTask ? <AddTask handleAddTask={handleAddTask} /> : null}

      {tasks
        .slice(0)
        .reverse()
        .map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            date={task.date}
            done={task.done}
            handleEditTask={handleEditTask}
            //   handleAddTask={handleAddTask}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      {/* <TaskItems title=" " date="09/07/21" limit="4" />
      <TaskItems title="" date="01/08/21" limit="1" />
      <TaskItems title="" date="09/07/21" limit="4" />
      <TaskItems title="" date="09/07/21" limit="4" /> */}
    </div>
  );
};
export default TaskList;
