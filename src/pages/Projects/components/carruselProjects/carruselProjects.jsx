import styles from './carruselProjects.module.css'
import { CardPiFood } from '../cards/cardPiFood.jsx'
export const CarruselProjects = ()=>{
    return(
        <div className={styles.container}>
            <div className={styles.carrusel}>
                <CardPiFood/>
            </div>
        </div>
    )
}