import styles from './navBar.module.css';

export const NavBar = ()=>{
    return(
        <div className={styles.container}>  
            <div className={styles.subContainer1}>
                <button href="/" className={styles.link}>PRINCIPAL</button>
                <button href="/" className={styles.link}>SOBRE_MI</button>
                <button href="/" className={styles.link}>PORTFOLIO</button>
                <button href="/" className={styles.link}>TECNOLOGÍAS</button>
            </div>
        </div>
    )
}