import styles from './navBar.module.css';
import { myData } from '../../data/my_data.js';

export const NavBar = ()=>{
    return(
        <div className={styles.container}>  
            <div className={styles.subContainer1}>
                
            </div>
            <div className={styles.subContainer2}>
                <button href="/" className={styles.link}>PRINCIPAL</button>
                <button href="/" className={styles.link}>SOBRE_MI</button>
                <button href="/" className={styles.link}>PROYECTOS</button>
                <button href="/" className={styles.link}>TECNOLOGÍAS</button>
            </div>
            <div className={styles.subContainer3}>
                <a href={myData.CV.link} className={styles.container_cv}>
                    <img src={myData.CV.icon} alt={myData.CV.name} />
                    <h2>Curriculum</h2>
                </a>
            </div>
        </div>
    )
}