import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Board from "./board";
import Task from "./task";
import styles from './board.module.css';

function Main (props) {
    return (
        <Router> {/* Обеспечивает контекст роутера */}
            <main className={styles.main}>
                <Routes>
                    <Route path="/" element={<Board {...props} />} />
                    <Route path="tasks/:taskId" element={<Task {...props} />} />
                    {/* Рассмотрите возможность добавления редиректа или обработки 404 */}
                </Routes>
            </main>
        </Router>
    );
}

export default Main;