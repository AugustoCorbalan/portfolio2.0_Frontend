import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './dynamicText.module.css';
import soundWriting from '../../../../assets/sounds/writing.mp3';
import soundIntro from '../../../../assets/sounds/soundIntro.mp3';
export const DynamicText = ({arrayTexts})=>{
    const [writing, setWriting] = useState(["", "", ""])
    const sound = useSelector((state)=>state.sound);
    const soundKey = new Audio(soundWriting);
    const soundButtonIntro = new Audio(soundIntro);
    
    useEffect(()=>{
        if(arrayTexts[0].length>0 || arrayTexts[1].length>0 || arrayTexts[2].length>0){
            typewriter(arrayTexts)
        }
        return ()=>setWriting(["", "", ""])
    },[sound, arrayTexts])

    const typewriter = async (arrayTexts)=>{
        if(sound){
            soundKey.playbackRate = 1.3;
            soundKey.play();
        };
        for(let i=0; i<arrayTexts.length; i++){
            for(let j=0; j<arrayTexts[i].length; j++){
                setWriting((prevState)=>{
                    const newState=[...prevState];
                    newState[i]= newState[i]+arrayTexts[i][j];
                    return newState;
                })
                await new Promise((resolve)=>setTimeout(resolve, 80));
            }
        }
        if(sound){
            soundKey.pause()
            soundKey.currentTime=0;
        }
    }
    
    return(
        <div className={styles.container}>
            <p>{writing[0]}</p>
            <p>{writing[1]}</p>
            <p>{writing[2]}</p>
        </div>
    )
}