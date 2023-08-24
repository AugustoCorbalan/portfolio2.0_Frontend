import { useDispatch } from 'react-redux';
import styles from './firstModal.module.css';
import {setSound, setStart} from '../../Redux/actions';
export const FirstModal = ()=>{
    const dispatch = useDispatch();
    const handleButton=(statusSound)=>{
        dispatch(setSound(statusSound));
        dispatch(setStart(true));
    }
                
    return(
        <div className={styles.background}>
            <div className={styles.container}>
                <h1>
                    ¡Hola, Bienvenido!
                </h1>
                <div className={styles.containerTitle}>
                    <h2>¿A que versión del portfolio desea acceder?</h2>
                </div>
                <div className={styles.containerText}>
                    <p>- Versión completa: Con sonidos y animaciones (Recomendada)</p>
                    <p>- Versión Simple: Sin sonidos y animaciones</p>
                </div>
                <div className={styles.containerButtons}>
                    <button className={styles.button} onClick={()=>{handleButton(true)}}>
                        Versión Completa
                    </button>
                    <button className={styles.button} onClick={()=>{handleButton(false)}}>
                        Versión Simple
                    </button>
                </div>
            </div>
        </div>
    )
}