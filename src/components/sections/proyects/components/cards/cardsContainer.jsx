import styles from './cardsContainer.module.css';
import { proyects } from '../../../../../data/proyects';
import { Card } from './card.jsx';

export const CardsContainer=()=>{
    return(
        <div className={styles.container}>
            {proyects.map((data)=>{
                return(
                    <Card data={data}/>
                )
            })}
        </div>
    )
}