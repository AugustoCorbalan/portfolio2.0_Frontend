import { IoMdSend } from 'react-icons/io';
import { useState } from 'react';
import { FirstText } from './subComponents/firstText';
import { SecondText } from './subComponents/secondText';
import { HalfHexagon } from '../../svg/half_hexagon';
import styles from './aboutComponent.module.css';
export const AboutComponent=()=>{
    const [page, setPage] = useState(1);
    const [ decoration_status, setDecoration ] = useState(false);

    const scroll_position =()=>{
        let verticalScroll = window.scrollY;
        if(verticalScroll >= 400 && verticalScroll < 900 ){
            setDecoration(true)
        }
        else {
            setDecoration(false)
        }
    }
    window.addEventListener("scroll", scroll_position);

    return(
        <div className={styles.container}>
            <div className={styles.containerTitle}>
                {
                    page==1?
                        <h2>¿Quién soy?</h2>:
                        <h2>¿Cómo llegué a Full Stack Developer?</h2>
                }
                
            </div>
            <div className={styles.container_description}>
                <div className={styles.container_text}>
                    {page==1? <FirstText/> : <SecondText/>}
                </div>
                <div className={styles.containerButton}>
                    {
                        page==1?
                        <button onClick={()=>setPage(page==1? 2 : 1)} className={styles.button}>
                            ¿Cómo llegué a Full Stack Developer?
                            <IoMdSend className={styles.icons}/>
                        </button> :
                        <button onClick={()=>setPage(page==1? 2 : 1)} className={styles.button}>
                            <IoMdSend className={styles.iconsReverse}/>
                            ¿Quién soy?
                        </button>
                    }
                </div>
            </div>
            <div className={styles.container_decoration}>
                <div className={decoration_status? styles.container_hexagon1_open : styles.container_hexagon1_close}>
                    <HalfHexagon/>
                </div>
                <div className={ decoration_status? styles.container_phrase_open : styles.container_phrase_close}>
                    <p>My mind does not stop <br/> searching for solutions, <br/>the code is my new best ally...</p>
                </div>
                <div className={decoration_status? styles.container_hexagon2_open : styles.container_hexagon2_close}>
                    <HalfHexagon/>
                </div>
            </div>
        </div>
    )
}