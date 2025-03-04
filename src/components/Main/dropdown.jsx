import styles from "./dropdown.module.css"

function DropDown({ tasks, currentStatus, previousTasks, moveTask }) {
  const handleTaskMove = (task) => {
    moveTask(task, currentStatus);
  };

  return (
    <select
      className={styles.select}
      onChange={(e) => {
        const task = previousTasks.find((task) => task.id === e.target.value);
        if (task) handleTaskMove(task);
      }}
    >
      <option value=""></option>
      {previousTasks.map((task) => (
        <option key={task.id} value={task.id}>
          {task.title}
        </option>
      ))}
    </select>
  );
}

export default DropDown;
