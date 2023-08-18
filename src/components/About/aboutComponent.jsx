import { IoMdSend } from 'react-icons/io';
import { useState } from 'react';
import { FirstText } from './subComponents/firstText';
import { SecondText } from './subComponents/secondText';
import styles from './aboutComponent.module.css';
export const AboutComponent=()=>{
    const [page, setPage] = useState(1);
    return(
        <div className={styles.container}>
            <div className={styles.containerTitle}>
                {
                    page==1?
                        <h2>¿Quién soy?</h2>:
                        <h2>¿Cómo llegué a Full Stack Developer?</h2>
                }
                
            </div>
            <div className={styles.containerDescription}>
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
    )
}