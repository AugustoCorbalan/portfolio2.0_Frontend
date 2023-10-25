import styles from './contact.module.css';
import { myData } from '../../../data/my_data.js';

export const Contact = ()=>{
    return (
        <div className={styles.contact_container}> 
            <div className={styles.links_container}>
                {
                    myData.contact.map((el)=>{
                        return(
                            <a href={el.link} className={styles.container_icon} target='_blank' >
                                <img src={el.icon} alt={`icono de ${el.name}`}/>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}