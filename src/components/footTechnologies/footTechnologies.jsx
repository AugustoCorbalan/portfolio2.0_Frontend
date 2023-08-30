import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Carrusel } from './components/Carrusel/carrusel'
import styles from './footTechnologies.module.css'

export const FootTechnologies = ()=>{
    const start = useSelector((state)=>state.start);
    const [opacity, setOpacity]=useState(1);

    document.addEventListener("scroll",()=>{
        if(start){
            const fadeStart=50;
            const fadeEnd=300;
            const fadeRange= fadeEnd-fadeStart;
            const position= window.scrollY;
            let opacity= 1-((position-fadeStart)/fadeRange)
            if(opacity>1) opacity=1;
            if(opacity<0) opacity=0;
            setOpacity(opacity)
        }
    })

    return(
        <div className={styles.container} style={{opacity}}>
            <div className={styles.subContainer}>
                <Carrusel/>
            </div>
        </div>
    )
}