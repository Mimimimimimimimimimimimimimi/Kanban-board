import { useState } from "react"
import styles from './header.module.css';
import ArrowUp from '../../assets/arrow-up.svg';
import ArrowDown from '../../assets/arrow-down.svg';
import AvatarSvg from '../../assets/user-avatar.svg'

function Avatar (){
    const [userOpen, setUserOpen] = useState(false);
    const toggleUserOpen = () => setUserOpen(!userOpen);
    return(
        <div className="avatar" >
        <img src={AvatarSvg} alt='User Avatar'/>
        {userOpen ? (
            <> 
            <ul className={styles.profile}>
            <li>Profile</li>
            <li>Log out</li>
            </ul>
            <img src={ArrowUp} className={styles.arrow} onClick={toggleUserOpen}/>
            </>
        ) : (
            <img className={styles.arrow} src={ArrowDown} onClick={toggleUserOpen}/>
        )}
            </div>
    )
}

export default Avatar