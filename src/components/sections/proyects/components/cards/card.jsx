import { useState, useEffect } from 'react';
import styles from './card.module.css';
import { HalfHexagon } from '../../../../svg/half_hexagon';
import icon_Link from '../../../../../assets/images/iconsLinks/link_icon.png';
import icon_github from '../../../../../assets/images/iconsLinks/github.png';
export const Card = ({ data, display })=>{
    const [ cardStatus, setCardStatus ] = useState( false );

    const handle_decoration =()=>{
        // Almaceno en constantes los datos de posicion del elemento "about" y la altura de la vntana grafica.
        const element = document.querySelector("#container_card");
        const elementInfo = element.getBoundingClientRect();
        const elementHeigth = elementInfo.height; //Altura de todo el elemento "about"
        const topDistance = elementInfo.top; //Distancia desde borde superior del elemento about hasta borde superior de ventana gráfica
        const windowsHeight = window.innerHeight; // Altura de la ventana gráfica.
        //Calculo el punto crítico en donde quiero que se ejecute la acción. (Cuando se este visibilizando por lo menos la mitad del elemento "about")
        const criticalPoint = windowsHeight - (elementHeigth*(3/4))
        if(topDistance <= criticalPoint){
            setCardStatus(true)
        }
        else {
            setCardStatus(false)
        }
    }
    window.addEventListener("scroll", handle_decoration);
    
    return(
        <div id="container_card" className={styles.container_card}>
            <div className={styles.container_decoration}>
                <div className={ (cardStatus || display) ? styles.container_hexagon1_open : styles.container_hexagon1_close}>
                    <HalfHexagon/>
                </div>
                <div className={ (cardStatus || display)? styles.container_hexagon2_open : styles.container_hexagon2_close }>
                    <HalfHexagon/>
                </div>
            </div>
            <div className={ (cardStatus || display)? styles.container_proyectData_open : styles.container_proyectData_close}>
                <div className={styles.container_1}>
                    {
                        data.title.split(" ").map((word)=>{
                            return(
                                <div className={styles.container_title}>
                                    {word.split("").map((letter)=>{
                                        return(
                                            <h2>{letter}</h2>
                                            )
                                        })}
                                </div>
                            )
                        })
                    }   
                </div>
                <div className={styles.container_2}>
                    <div className={styles.subcontainer_1}>
                        <p>
                            {data.description}
                        </p>
                    </div>
                    <div className={styles.subcontainer_2}>
                        <div className={styles.container_icons}>
                            <div className={styles.container_technologies}>
                                {
                                    data.technologies.map((technology)=>{
                                        return(
                                            <div className={styles.icon}>
                                                <img src={technology.icon} alt={technology.name} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className={styles.container_links}>
                                {
                                    <>
                                        {
                                           data.links.repository.frontend ?
                                                <a href={data.links.repository.frontend} target='_blank'>
                                                    <img src={icon_github} alt='Link de repositorio'/>
                                                    <p>Front-end</p>
                                                </a> :
                                                null
                                        }
                                        {
                                            data.links.repository.backend ?
                                                <a href={data.links.repository.backend} target='_blank'>
                                                    <img src={icon_github} alt='Link de repositorio'/>
                                                    <p>Back-end</p>
                                                </a> :
                                                null
                                        }
                                        {
                                            data.links.deploy?
                                                <a href={data.links.deploy} target='_blank'>
                                                    <img src={icon_Link} alt='Link del proyecto'/>
                                                    <p>Deploy</p>
                                                </a> :
                                                null
                                        }
                                    </>
                                }
                            </div>
                        </div>
                        <div className={styles.container_image}>
                            <img src={data.image} alt='Imagen del proyecto'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}