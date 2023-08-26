import styles from './curtain.module.css';
import { Loader } from '../loader/loader';
export const Curtain =()=>{
    return(
        <div className={styles.container}>
            <div className={styles.container_left}>
                <Loader/>
            </div>
            <div className={styles.container_right}>
                <Loader/>
            </div>
        </div>
    )
}