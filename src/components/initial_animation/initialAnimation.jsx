import styles from './initialAnimation.module.css';
import { Icon } from './components/icon/icon.jsx';

export const InitialAnimation = ()=>{
    return(
        <div className={styles.container}>
            <Icon/>
        </div>
    )
}