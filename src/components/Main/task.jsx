import { useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import styles from './task.module.css';

function Task(props) {
    const [isEdit, setIsEdit] = useState(false);
    const match = useMatch("tasks/:taskId");
    const navigate = useNavigate();
    const { taskId } = match.params;
    const { tasks, setTasks } = props;
    const task = tasks.find(task => task.id === taskId);

    const handleDescriptionEdit = (e) => {
        setTasks(tasks.map(t => t.id === taskId ? { ...t, description: e.target.value } : t));
    };

    const taskDescription = !isEdit ? (
        <div className={styles.description} onClick={() => setIsEdit(true)} title="Edit">
            {task?.description || "This task has no description. Click to add."}
        </div>
    ) : (
        <textarea
            className={styles.textArea}
            name="description"
            value={task?.description || ""}
            onChange={handleDescriptionEdit}
            onBlur={() => setIsEdit(false)}
            autoFocus
        />
    );

    if (!task) {
        return (
            <div className={styles.wrapper}>
                <button onClick={() => navigate('/')} className={styles.closeButton}>&#9587;</button>
                <div className={styles.header}>
                    <h2 className={styles.title}>No task with ID {taskId}</h2>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.wrapper}>
            <button onClick={() => navigate('/')} className={styles.closeButton}>&#9587;</button>
            <div className={styles.header}>
                <h2 className={styles.title}>{task.title}</h2>
                <p>{taskDescription}</p>
            </div>
        </div>
    );
}

export default Task;
