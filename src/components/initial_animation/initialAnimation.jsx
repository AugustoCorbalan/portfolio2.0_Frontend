import styles from './initialAnimation.module.css';
import { Icon } from './components/icon/icon.jsx';
import { Plot } from './components/plot/plot';

export const InitialAnimation = ()=>{
    return(
        <div className={styles.container}>
            <Icon/>
            <Plot/>
        </div>
    )
}