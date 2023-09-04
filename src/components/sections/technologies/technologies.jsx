import styles from './technologies.module.css';
import html from '../../../assets/images/iconsTechnologies/html5.png';
import css from '../../../assets/images/iconsTechnologies/css.png';
import js from '../../../assets/images/iconsTechnologies/js.png';
import materialUi from '../../../assets/images/iconsTechnologies/materialUi.png';
import  react from '../../../assets/images/iconsTechnologies/react.png';
import  redux from '../../../assets/images/iconsTechnologies/redux.png';
import  nextJs from '../../../assets/images/iconsTechnologies/nextJs.png';
import  nodeJs from '../../../assets/images/iconsTechnologies/nodeJs.png';
import  docker from '../../../assets/images/iconsTechnologies/docker.png';
import  express from '../../../assets/images/iconsTechnologies/express.png';
import  sequelize from '../../../assets/images/iconsTechnologies/sequelize.png';
import  mongodb from '../../../assets/images/iconsTechnologies/mongodb.png';
import  postgreSql from '../../../assets/images/iconsTechnologies/postgreSql.png';


import { HalfHexagon } from '../../svg/half_hexagon';

export const Technologies =()=>{
    return(
        <div className={styles.principal_container}>
            <div className={styles.container_title}>
                <div className={styles.title}>
                    <h2>Tecnologías</h2>
                </div>
            </div>
            <div className={styles.container_content}>
                <div className={styles.container_left}>
                    <div className={styles.container_technologies}>
                        <div className={styles.container_frontend}>
                            <div className={styles.container_subtitle}>
                                <div className={styles.subtitle}>
                                    <h2>Frontend</h2>
                                </div>
                            </div>
                            <div className={styles.container_icons}>
                                <div className={styles.icon}>
                                    <img src={html} alt="icon html" />
                                </div>
                                <div className={styles.icon}>
                                    <img src={css} alt="icon css" />
                                </div>
                                <div className={styles.icon}>
                                    <img src={js} alt="icon js" />
                                </div>
                                <div className={styles.icon}>
                                    <img src={materialUi} alt="icon materialUi" />
                                </div>
                                <div className={styles.icon}>
                                    <img src={react} alt="icon react" />
                                </div>
                                <div className={styles.icon}>
                                    <img src={redux} alt="icon redux" />
                                </div>
                                <div className={styles.icon}>
                                    <img src={nextJs} alt="icon nextJs" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.container_backend}>
                            <div className={styles.container_subtitle}>
                                <div className={styles.subtitle}>
                                    <h2>Backend</h2>
                                </div>
                            </div>
                            <div className={styles.container_icons}>
                                <div className={styles.icon}>
                                    <img src={nodeJs} alt="icon react" />
                                </div>
                                <div className={styles.icon}>
                                    <img src={docker} alt="icon docker" />
                                </div>
                                <div className={styles.icon}>
                                    <img src={express} alt="icon express" />
                                </div>
                                <div className={styles.icon}>
                                    <img src={sequelize} alt="icon sequelize" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.container_database}>
                            <div className={styles.container_subtitle}>
                                <div className={styles.subtitle}>
                                    <h2>DataBase</h2>
                                </div>
                            </div>
                            <div className={styles.container_icons}>
                                <div className={styles.icon}>
                                    <img src={mongodb} alt="icon mongodb" />
                                </div>
                            </div>
                            <div className={styles.container_icons}>
                                <div className={styles.icon}>
                                    <img src={postgreSql} alt="icon postgreSql" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={styles.container_decoration}>
                    <div className={styles.container_hexagon1}>
                        <HalfHexagon/>
                    </div>
                    <div className={styles.container_phrase}>
                        <p>In the programming universe, <br/> curiosity is your compass and <br/> humility your constant companion.</p>
                    </div>
                    <div className={styles.container_hexagon2}>
                        <HalfHexagon/>
                    </div>
                </div>
            </div>
        </div>
    )
} 