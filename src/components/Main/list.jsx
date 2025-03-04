import { useState } from "react";
import { Link } from "react-router-dom";
import AddForm from './addForm';
import styles from './list.module.css';
import DropDown from "./dropdown";
import { LIST_TYPES } from "../../config";

function List({ type, title, filteredTasks, previousTasks, addNewTask, moveTask }) {
  console.log(`Filtered tasks for ${type}:`, filteredTasks);

  const [isFormVisible, setFormVisible] = useState(false);

  const handleAddNewClick = () => {
    setFormVisible(!isFormVisible);
  };

  const formSubmit = (title) => {
    addNewTask(title);
    setFormVisible(false);
  };

  const handleMoveTask = (task, currentStatus) => {
    moveTask(task, currentStatus);
    setFormVisible(false);
  };

  return (
    <div className={styles.list}>
      <h2 className={styles.listTitle}>{title}</h2>
      {filteredTasks.length ? (
        filteredTasks.map(task => (
          <Link to={`/tasks/${task.id}`} key={task.id} className={styles.taskLink}>
            <div className={styles.task}>{task.title}</div>
          </Link>
        ))
      ) : (
        <p className={styles.notask}>No tasks added yet</p>
      )}
      {!isFormVisible && (
        <button
        onClick={type === LIST_TYPES.BACKLOG || previousTasks.length ? handleAddNewClick : null}
        className={type === LIST_TYPES.BACKLOG || previousTasks.length ? styles.addButton : styles.addInactive}
        disabled={!type === LIST_TYPES.BACKLOG && !previousTasks.length}
      >
          + Add card...
        </button>
      )}
      {isFormVisible && type === LIST_TYPES.BACKLOG && (
        <AddForm formSubmit={formSubmit} setFormVisible={setFormVisible}/>
      )}
      {isFormVisible && type !== LIST_TYPES.BACKLOG && (
        <DropDown
          tasks={filteredTasks}
          currentStatus={type}
          previousTasks={previousTasks}
          moveTask={handleMoveTask}
        />
      )}
    </div>
  );
}

export default List;
