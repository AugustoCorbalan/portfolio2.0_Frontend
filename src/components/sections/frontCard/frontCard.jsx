import { useSelector } from 'react-redux';
import styles from './frontCard.module.css';
import { DynamicText } from './components/dynamicText/dynamicText';
import { Plot } from './components/plot/plot/plot.jsx';
import { useEffect, useState } from 'react';

export const FrontCard = ()=>{
    const start = useSelector((state)=>state.start)
    const [arrayTexts, setArrayTexts]= useState(["","",""]);
    // const texts =[
    //     ["¡Hola!", "Bienvenido a mi portfolio"],
    //     ["En este espacio, te invito a explorar mis proyectos, conocer mi perfil profesional y explorar las habilidades que he desarrollado hasta ahora.."],
    //     ["Trataré que sea una experiencia divertida y creativa.."," ", "¡Adelante, la puerta a mi mundo está abierta!"]
    // ] 
    const texts =[
        ["¡Hola!", "¡Bienvenido/a a mi portafolio!"]
    ] 
    useEffect(()=>{
        if(start){
            administratorText();
        }
    },[start])

    const administratorText = async ()=>{   
        await new Promise((resolve)=>setTimeout(resolve, 1000))
        setArrayTexts(texts[0]);
        // await new Promise((resolve)=>setTimeout(resolve, 5000))
        // setArrayTexts(texts[1]);
        // await new Promise((resolve)=>setTimeout(resolve, 15000))
        // setArrayTexts(texts[2]);
    }


    return(
        <div className={styles.container}>
            <Plot/>
            <div className={styles.subContainer}>
                <div className={styles.title}>
                    <h1>CORBALAN AUGUSTO</h1>
                    <h2>{`< Full Stack Web Developer />`}</h2>
                </div>
                <div className={styles.dynamicText}>
                    <div className={styles.dynamicText_console_container}>
                        <div className={styles.dynamicText_console}>
                            <DynamicText arrayTexts={arrayTexts}/> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}