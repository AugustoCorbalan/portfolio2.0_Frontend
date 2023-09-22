import { useState } from 'react';
import styles from './card.module.css';
import { HalfHexagon } from '../../../../svg/half_hexagon';
import icon_Link from '../../../../../assets/images/iconsLinks/link_icon.png';
import icon_github from '../../../../../assets/images/iconsLinks/github.png';
export const Card = ({ data })=>{
    const [ card_status, setStatus ] = useState( false );

    const scroll_position =()=>{
        let verticalScroll = window.scrollY;
        if(verticalScroll >= 1000 && verticalScroll < 2200 ){
            setStatus(true)
        }
        else {
            setStatus(false)
        }
    }
    window.addEventListener("scroll", scroll_position);
    
    return(
        <div className={styles.container_card}>
            <div className={styles.container_decoration}>
                <div className={ card_status? styles.container_hexagon1_open : styles.container_hexagon1_close}>
                    <HalfHexagon/>
                </div>
                <div className={ card_status? styles.container_hexagon2_open : styles.container_hexagon2_close }>
                    <HalfHexagon/>
                </div>
            </div>
            <div className={ card_status? styles.container_proyectData_open : styles.container_proyectData_close}>
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
                                <a href="http://localhost:3000/">
                                    <img src={icon_github} alt='Link de repositorio'/>
                                    <p>Front-end</p>
                                </a>
                                <a href="http://localhost:3000/">
                                    <img src={icon_github} alt='Link de repositorio'/>
                                    <p>Back-end</p>
                                </a>
                                <a href={data.links.deploy}>
                                    <img src={icon_Link} alt='Link del proyecto'/>
                                    <p>Deploy</p>
                                </a>
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