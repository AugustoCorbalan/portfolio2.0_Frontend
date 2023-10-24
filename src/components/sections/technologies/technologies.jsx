import { useState } from 'react';
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
    const [ decoration_status, setDecoration ] = useState(false);
    
    const scroll_position =()=>{
        let verticalScroll = window.scrollY;
        if(verticalScroll >= 1770){
            setDecoration(true)
        }
        else {
            setDecoration(false)
        }
    }
    window.addEventListener("scroll", scroll_position);
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
                                    <p>Html</p>
                                </div>
                                <div className={styles.icon}>
                                    <img src={css} alt="icon css" />
                                    <p>Css</p>
                                </div>
                                <div className={styles.icon}>
                                    <img src={js} alt="icon js" />
                                    <p>JS</p>
                                </div>
                                <div className={styles.icon}>
                                    <img src={materialUi} alt="icon materialUi" />
                                    <p>Material-UI</p>
                                </div>
                                <div className={styles.icon}>
                                    <img src={react} alt="icon react" />
                                    <p>React</p>
                                </div>
                                <div className={styles.icon}>
                                    <img src={redux} alt="icon redux" />
                                    <p>Redux</p>
                                </div>
                                <div className={styles.icon}>
                                    <img src={nextJs} alt="icon nextJs" />
                                    <p>Next</p>
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
                                    <img src={nodeJs} alt="icon nodeJS" />
                                    <p>NodeJS</p>
                                </div>
                                <div className={styles.icon}>
                                    <img src={docker} alt="icon docker" />
                                    <p>Docker</p>
                                </div>
                                <div className={styles.icon}>
                                    <img src={express} alt="icon express" />
                                    <p>Express</p>
                                </div>
                                <div className={styles.icon}>
                                    <img src={sequelize} alt="icon sequelize" />
                                    <p>Sequelize</p>
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
                                    <p>MongoDB</p>
                                </div>
                                <div className={styles.container_icons}>
                                    <div className={styles.icon}>
                                        <img src={postgreSql} alt="icon postgreSql" />
                                        <p>PostgreSQL</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={styles.container_decoration}>
                    <div className={decoration_status? styles.container_hexagon1_open : styles.container_hexagon1_close}>
                        <HalfHexagon/>
                    </div>
                    <div className={decoration_status? styles.container_phrase_open : styles.container_phrase_close}>
                        <p>In the programming universe, <br/> curiosity is your compass and <br/> humility your constant companion.</p>
                    </div>
                    <div className={decoration_status? styles.container_hexagon2_open : styles.container_hexagon2_close}>
                        <HalfHexagon/>
                    </div>
                </div>
            </div>
        </div>
    )
} 