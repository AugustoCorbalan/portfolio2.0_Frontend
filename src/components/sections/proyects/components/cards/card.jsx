import styles from './card.module.css';
import { HalfHexagon } from '../../../../svg/half_hexagon';
export const Card = ({ data })=>{
    return(
        <div className={styles.container_card}>
            <div className={styles.container_decoration}>
                <div className={styles.container_hexagon1}>
                    <HalfHexagon/>
                </div>
                <div className={styles.container_hexagon2}>
                    <HalfHexagon/>
                </div>
            </div>
            <div className={styles.container_proyectData}>
                <div className={styles.container_1}>
                    <div className={styles.container_title}>
                        {data.title.split("").map((letter)=>{
                            return(
                                <h2>{letter}</h2>
                            )
                        })}
                    </div>
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
                                Links
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