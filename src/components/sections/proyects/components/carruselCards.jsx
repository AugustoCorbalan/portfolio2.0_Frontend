import { Card } from './card.jsx';
import styles from './carruselCards.module.css'
export const CarruselCards =()=>{
    return(
        <div className={styles.container}>
            <div className={styles.carrusel}>
                <div className={styles.element}><Card/></div>
                <div className={styles.element}><Card/></div>
                <div className={styles.element}><Card/></div>
                <div className={styles.element}><Card/></div>
                <div className={styles.element}><Card/></div>
                <div className={styles.element}><Card/></div>
                <div className={styles.element}><Card/></div>
                <div className={styles.element}><Card/></div>
                <div className={styles.element}><Card/></div>
                <div className={styles.element}><Card/></div>
                <div className={styles.element}><Card/></div>
                <div className={styles.element}><Card/></div>
                <div className={styles.interCarrusel}/>
            </div>
        </div>
    )
}