import { useState } from 'react';
import styles from './navBar_mobile.module.css';
import { Icon } from './components/icon/icon.jsx';
import { myData } from '../../data/my_data.js';
import icon_menu from '../../assets/images/icons/menu.svg';

export const NavBar_mobile = ()=>{

    const [ sectionSelect, setSelect ] = useState("ppal");
    const [ open, setOpen ] = useState(false)
    
    return(
        <>
            <button className={styles.button_dropdown} onClick={()=>setOpen(!open)}>
                <img src={icon_menu}/>
            </button>
            {
                open?
                <div className={styles.container}>  
                    {/* <div className={styles.subContainer1}>
                        <Icon/>
                    </div> */}
                    <div className={styles.subContainer2}>
                        <a id="ppal" onClick={({target})=> setSelect(target.id)} href="#principal" className={ sectionSelect == "ppal" ? styles.linkSelect : null }>PRINCIPAL</a>
                        <a id="abt" onClick={({target})=> setSelect(target.id)} href="#about" className={sectionSelect == "abt" ? styles.linkSelect : null}>SOBRE_MI</a>
                        <a id="prts" onClick={({target})=> setSelect(target.id)} href="#proyects" className={sectionSelect == "prts" ? styles.linkSelect : null}>PROYECTOS</a>
                        <a id="tches" onClick={({target})=> setSelect(target.id)} href="#technologies" className={sectionSelect == "tches" ? styles.linkSelect : null}>TECNOLOGÍAS</a>
                    </div>
                    <div className={styles.subContainer3}>
                        <a href={myData.CV.link} className={styles.container_cv}>
                            <img src={myData.CV.icon} alt={myData.CV.name} />
                            <h2>Curriculum</h2>
                        </a>
                    </div>
                </div> :
                null
            }
        </>
    )
}