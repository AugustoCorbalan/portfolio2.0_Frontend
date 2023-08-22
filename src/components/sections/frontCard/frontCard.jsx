import { UseSelector, useSelector } from 'react-redux';
import styles from './frontCard.module.css';
import { DynamicText } from './dynamicText/dynamicText';
import { useEffect, useState } from 'react';

export const FrontCard = ()=>{
    const start = useSelector((state)=>state.start)
    const [arrayTexts, setArrayTexts]= useState(["","",""]);
    const texts =[
        ["¡Hola!", "Bienvenido a mi portfolio"],
        ["En este espacio, te invito a explorar mis proyectos, conocer mi perfil profesional y explorar las habilidades que he desarrollado hasta ahora.."],
        ["Trataré que sea una experiencia divertida y creativa.."," ", "¡Adelante, la puerta a mi mundo está abierta!"]
    ] 
    useEffect(()=>{
        if(start){
            administratorText();
        }
    },[start])

    const administratorText = async ()=>{   
        setArrayTexts(texts[0]);
        await new Promise((resolve)=>setTimeout(resolve, 5000))
        setArrayTexts(texts[1]);
        await new Promise((resolve)=>setTimeout(resolve, 15000))
        setArrayTexts(texts[2]);
    }


    return(
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <div className={styles.title}>
                    <h1>CORBALAN AUGUSTO N.</h1>
                    <h2>Full Stack Web Developer</h2>
                    <div className={styles.dynamicText}>
                        <DynamicText arrayTexts={arrayTexts}/>
                    </div>
                </div>
                <div className={styles.image}>

                </div>
            </div>
        </div>
    )
}