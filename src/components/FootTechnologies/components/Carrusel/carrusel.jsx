import { useSelector } from 'react-redux';
import styles from './carrusel.module.css';
import css from "../../../../assets/images/iconsTechnologies/css.png";
import docker from "../../../../assets/images/iconsTechnologies/docker.png";
import express from "../../../../assets/images/iconsTechnologies/express.png";
import html5 from "../../../../assets/images/iconsTechnologies/html5.png";
import js from "../../../../assets/images/iconsTechnologies/js.png";
import materialUi from "../../../../assets/images/iconsTechnologies/materialUi.png";
import mongodb from "../../../../assets/images/iconsTechnologies/mongodb.png";
import nextJs from "../../../../assets/images/iconsTechnologies/nextJs.png";
import nodeJs from "../../../../assets/images/iconsTechnologies/nodeJs.png";
import postgreSql from "../../../../assets/images/iconsTechnologies/postgreSql.png";
import react from "../../../../assets/images/iconsTechnologies/react.png";
import redux from "../../../../assets/images/iconsTechnologies/redux.png";
import sequelize from "../../../../assets/images/iconsTechnologies/sequelize.png";

export const Carrusel = ()=>{
    const start = useSelector((state)=>state.start)
    return(
        <div className={styles.container}>
            <div className={start? styles.carrusel : styles.carruselStatic}>
                <figure className={styles.figure}><img src={css}/></figure>
                <figure className={styles.figure}><img src={docker}/></figure>
                <figure className={styles.figure}><img src={express}/></figure>
                <figure className={styles.figure}><img src={html5}/></figure>
                <figure className={styles.figure}><img src={js}/></figure>
                <figure className={styles.figure}><img src={materialUi}/></figure>
                <figure className={styles.figure}><img src={mongodb}/></figure>
                <figure className={styles.figure}><img src={nextJs}/></figure>
                <figure className={styles.figure}><img src={nodeJs}/></figure>
                <figure className={styles.figure}><img src={postgreSql}/></figure>
                <figure className={styles.figure}><img src={react}/></figure>
                <figure className={styles.figure}><img src={redux}/></figure>
                <figure className={styles.figure}><img src={sequelize}/></figure>
                <div className={start? styles.interCarrusel : styles.interCarruselStatic}></div>
            </div>
        </div>
    )
}