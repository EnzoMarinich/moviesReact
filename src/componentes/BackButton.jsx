import {FaReply} from "react-icons/fa";
import styles from "./BackButton.module.css"

const BackButton = ()=>{

    const back = ()=> window.history.back()
    return <button className={styles.back} onClick={back}><FaReply size={50}/></button>
}

export default BackButton