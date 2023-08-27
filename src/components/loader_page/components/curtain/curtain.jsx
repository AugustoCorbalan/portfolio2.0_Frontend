import styles from './curtain.module.css';
import { LoaderAnimated } from './components/loader_animated/loaderAnimated';
import { LoaderStatic } from './components/loader_static/loaderStatic';
export const Curtain =()=>{
    return(
        <div className={styles.container}>
            <div className={styles.container_center}>
                <div className={styles.container_loader_center}>
                    <LoaderAnimated/>
                </div>
            </div>
            <div className={styles.container_left}>
                <div className={styles.container_loader_left}>
                    <LoaderStatic/>
                </div>
            </div>
            <div className={styles.container_right}>
                <div className={styles.container_loader_right}>
                    <LoaderStatic/>
                </div>
            </div>
        </div>
    )
}