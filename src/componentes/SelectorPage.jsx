import {MdNavigateNext , MdNavigateBefore} from "react-icons/md"
import styles from "./SelectorPage.module.css"

export const SelectorPage = ({page, setPage})=>{

    const nextPage = ()=>{
        setPage(page + 1)
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    }

    const beforePage = ()=>{
        setPage(page - 1)
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    }

    return(
        <div className={styles.div}>
            <MdNavigateBefore className={styles.before} onClick={beforePage}/>
            <p className={styles.num}>{page}</p>
            <MdNavigateNext className={styles.next} onClick={nextPage}/>
        </div>
    )

}