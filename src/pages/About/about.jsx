import { AboutComponent } from '../../components/About/aboutComponent';
import { NavBar } from '../../components/navBar/navBar';
import styles from './about.module.css';
export const About=()=>{
    return(
        <div className={styles.container}>
            <NavBar/>
            <AboutComponent/>
        </div>
    )
}