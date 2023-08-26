import { Loader } from './components/loader/loader';
import styles from './loaderPage.module.css';
export const LoaderPage=()=>{
    return(
        <div className={styles.container}>
            <Loader/>
        </div>
    )
}