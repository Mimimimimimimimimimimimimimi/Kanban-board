import { LIST_TYPES } from "../../config";
import styles from './footer.module.css';

function Footer({ tasks }) {
    const { active, done } = tasks.reduce((acc, task) => {
        if (task.status === LIST_TYPES.DONE) {
            acc.done += 1;
        } else {
            acc.active += 1;
        }
        return acc;
    }, { active: 0, done: 0 });

    return (
        <div className={styles.footer}>
            <div className={styles.countTask}>
                <span className={styles.counter}>Active tasks: {active}</span>
                <span className={styles.counter}>Finished tasks: {done}</span>
            </div>
            <div className={styles.counter}>Kanban board by Mimimimimimimimimi, 2025</div>
        </div>
    );
}

export default Footer;