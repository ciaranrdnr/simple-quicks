import Task from "../task";
import AddTask from "../addTask";

const TaskList = ({
  showNewTask,
  tasks,
  type,
  handleAddTask,
  handleEditTask,
  handleDeleteTask,
}) => {
  if (tasks.length === 0) {
    return (
      <div className="tasks-list">
        {showNewTask ? (
          <AddTask handleAddTask={handleAddTask} type={type} />
        ) : (
          <div className="emptyTask">
            <p>{type} is empty :(</p>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="tasks-list">
        {showNewTask ? (
          <AddTask handleAddTask={handleAddTask} type={type} />
        ) : null}

        {tasks
          .slice(0)
          .reverse()
          .map((task) => (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              // type={task.type}
              description={task.description}
              date={task.date}
              done={task.done}
              handleEditTask={handleEditTask}
              handleDeleteTask={handleDeleteTask}
            />
          ))}
      </div>
    );
  }
};
export default TaskList;
