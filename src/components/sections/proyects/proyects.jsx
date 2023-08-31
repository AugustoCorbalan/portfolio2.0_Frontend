import { Card } from './components/cards/card.jsx';
import { CardsContainer } from './components/cards/cardsContainer.jsx';
import styles from './proyects.module.css';
export const Proyects = ()=>{
    return(
        <div className={styles.principal_container}>
            <div className={styles.container}>
                <div className={styles.container_title}>
                    <h2>Proyectos:</h2>
                </div>
                <div className={styles.container_proyects}>
                    <CardsContainer/>
                </div>
            </div>
        </div>
    )
}