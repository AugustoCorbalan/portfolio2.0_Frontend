import styles from './cardsContainer.module.css';
import { proyects } from '../../../../../data/proyects';
import { Card } from './card.jsx';
import { useState } from 'react';
import icon_arrow_down from '../../../../../assets/images/icons/arrow-down.svg';
import icon_arrow_up from '../../../../../assets/images/icons/arrow-up.svg';

export const CardsContainer=()=>{

    const [statusDisplay, setStatusDisplay] = useState(false);
    const principalProyects = proyects.slice(0,2);

    const handleClickShowMore=()=>{
        setStatusDisplay(true);
    }
    const handleClickShowLess=()=>{
        setStatusDisplay(false);
        const section = document.getElementById("proyects");
        section.scrollIntoView({behavior: 'smooth'});
    }

    return(
        <div className={styles.container}>
            <div className={styles.container_cards}>
                {
                    statusDisplay?
                        proyects.map((data)=>{
                        return(
                            <Card data={data} display={statusDisplay}/>
                        )
                    }) :
                    
                    principalProyects.map((data)=>{
                        return(
                            <Card data={data} display={statusDisplay}/>
                        )
                    })
                }
            </div>
            <div className={styles.container_button}>
                {
                    statusDisplay?
                    <>
                        <button onClick={handleClickShowLess}>
                            <img src={icon_arrow_up} alt='icon arrow up'/>
                        </button>
                        <span>Mostrar menos</span>
                    </> :
                    <>
                        <button onClick={handleClickShowMore}>
                            <img src={icon_arrow_down} alt='icon arrow down'/>
                        </button>
                        <span>Mostrar más proyectos</span>
                    </>
                }
            </div>
        </div>
    )
}