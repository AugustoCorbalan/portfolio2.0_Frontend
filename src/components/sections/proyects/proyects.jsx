import { CarruselCards } from './components/carruselCards.jsx';
import styles from './proyects.module.css';
export const Proyects = ()=>{
    return(
        <div className={styles.principalContainer}>
            <div className={styles.container}>
                <div className={styles.containerTitle}>
                    <h2>Proyectos:</h2>
                </div>
                <div className={styles.containerProyects}>
                    <CarruselCards/>
                </div>
            </div>
        </div>
    )
}