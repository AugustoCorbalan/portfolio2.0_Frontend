import styles from './navBar.module.css';
import { Buttons_mobile } from './components/buttons_mobile.jsx';
import { Buttons_desktop } from './components/buttons_desktop.jsx';


export const NavBar = ()=>{
    
    return(
        <div className={styles.container}>
            <Buttons_desktop/>
            <Buttons_mobile/>
        </div>
    )
}