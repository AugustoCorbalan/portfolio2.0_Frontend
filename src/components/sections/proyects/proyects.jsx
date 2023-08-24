import { CarruselCards } from './components/carruselCards.jsx';
import styles from './proyects.module.css';
export const Proyects = ()=>{
    return(
        <div className={styles.principalContainer}>
            <CarruselCards/>
        </div>
    )
}