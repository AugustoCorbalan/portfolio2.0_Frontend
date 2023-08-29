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
export const InitialPage = ()=>{
    const dispatch= useDispatch();
    const start = useSelector((state)=>state.start)
    useEffect(()=>{
        setTimeout(()=>{
            dispatch(setStart(true))
        }, 5800)
    },[])
    return(
        <>
            {/* <NavBar/> */}
            {!start ? <LoaderPage/> : null}
            <InitialAnimation/>
            {/* <section className={styles.container1}>
                <div className={styles.container}>
                    <FrontCard/>
                </div>
                <FootTechnologies/>
            </section> */}
            {/* {start?
                <>
                    <section className={styles.container2}>
                        <AboutComponent/>
                    </section>
                    <section className={styles.container3}>
                        <Proyects/>
                    </section>
                </>
                :null
            } */}
        </>
    )
}