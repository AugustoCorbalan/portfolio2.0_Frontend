import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStart } from '../Redux/actions';
import styles from './initialPage.module.css';
import { NavBar } from '../components/navBar/navBar';
import { FrontCard } from '../components/sections/frontCard/frontCard';
import { FootTechnologies } from '../components/footTechnologies/footTechnologies';
import { FirstModal } from '../components/modals/firstModal';
import { AboutComponent } from '../components/sections/about/aboutComponent';
import { Proyects } from '../components/sections/proyects/proyects';
import { LoaderPage } from '../components/loader_page/loaderPage';
import { InitialAnimation } from '../components/initial_animation/initialAnimation';
import { Technologies } from '../components/sections/technologies/technologies';
export const InitialPage = ()=>{
    const dispatch= useDispatch();
    const start = useSelector((state)=>state.start)
    useEffect(()=>{
        setTimeout(()=>{
            dispatch(setStart(true))
        }, 13000)
    },[])
    return(
        <>
            <LoaderPage/>
            <div className={styles.container_navBar}>
                <NavBar/>
            </div>
            <InitialAnimation/>
            <div className={styles.container_foottechnologies}>
                <FootTechnologies/>
            </div>
            <div className={styles.container_frontCard}>
                <FrontCard/>
            </div>
            <section className={styles.container_about}>
                <AboutComponent/>
            </section>
            <section className={styles.container_proyects}>
                <Proyects/>
            </section>
            <section className={styles.container_technologies}>
                <Technologies/>
            </section>
        </>
    )
}