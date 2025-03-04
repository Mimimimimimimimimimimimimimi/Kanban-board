import uniqid from "uniqid";
import List from "./list";
import { LIST_TYPES, LIST_COPY, LIST_PREVIOUS } from "../../config";
import styles from './board.module.css';

function Board({ tasks, setTasks }) {
  const addNewTask = (title, description) => {
    const task = {
      id: uniqid(),
      title,
      description,
      created: new Date().toISOString(),
      status: 'Backlog',
    };
    setTasks([...tasks, task]);
  };

  const moveTask = (task, newStatus) => {
    const updatedTasks = tasks.map(t =>
      t.id === task.id ? { ...t, status: newStatus } : t
    );
    setTasks(updatedTasks);
  };

  return (
    <div className={styles.board}>
      {Object.values(LIST_TYPES).map(type => {
        const listTasks = tasks.filter(task => task.status === type);
        const previousTasks = tasks.filter(task => task.status === LIST_PREVIOUS[type]);
        return (
          <List
            key={type}
            type={type}
            title={LIST_COPY[type]}
            filteredTasks={listTasks}
            previousTasks={previousTasks}
            addNewTask={addNewTask}
            moveTask={moveTask}
          />
        );
      })}
    </div>
  );
}

export default Board;
