import styles from './projects.module.css';
import { NavBar } from '../../components/navBar/navBar';
import { CarruselProjects } from './components/carruselProjects/carruselProjects';
export const Projects =()=>{
    return(
        <div className={styles.container}>
            <NavBar/>
            <CarruselProjects/>
        </div>
    )
}