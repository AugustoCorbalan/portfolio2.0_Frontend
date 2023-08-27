import { Curtain } from './components/curtain/curtain';
import styles from './loaderPage.module.css';
export const LoaderPage=()=>{
    return(
        <div className={styles.container}>
            <Curtain/>
        </div>
    )
}