import styles from './header.module.css';
import Avatar from './avatar';
function Header (){
    return(
        <>
        <header className={styles.header}>
            <h1>
            Awesome Kanban Board
            </h1>
            <Avatar/>
        </header>
        </>
    )
}

export default Header