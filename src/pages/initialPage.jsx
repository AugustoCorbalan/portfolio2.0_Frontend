import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { setStart, setPresentation } from '../Redux/actions';
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
import { Contact } from '../components/sections/contact/contact';
export const InitialPage = ()=>{
    const dispatch= useDispatch();
    const {start, presentation} = useSelector((state)=>state);
    const [ buttonStatus, setButtonStatus ]  = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            dispatch(setStart(true))
        }, 13000)
    },[])
    useEffect(()=>{
        setTimeout(()=>{
            setButtonStatus(true)
        }, 4000)
    }, [])

    const presentation_Off=()=>{
        setButtonStatus(false);
        dispatch(setPresentation(false));
        dispatch(setStart(true));
    }
    return(
        < div className={styles.general_container}>
            <LoaderPage/> 
            {
                buttonStatus && !start ?
                <>
                    <button onClick={ presentation_Off }className={styles.button_presentation_Off}>
                        Omitir presentación
                    </button>
                </> :
                    null
            }
            { presentation ? <InitialAnimation/> : null }
            <div className={ presentation? styles.container_navBar : styles.container_navBar_NonePresentation}>
                <NavBar/>
            </div>
            <section id='principal'>
                <div className={ presentation? styles.container_foottechnologies : styles.container_foottechnologies_NonePresentation}>
                    <FootTechnologies/>
                </div>
                <div className={ presentation? styles.container_frontCard : styles.container_frontCard_NonePresentation}>
                    <FrontCard/>
                </div>
            </section>
            {start ?
                <>
                    <section id='about' className={styles.container_about}>
                        <AboutComponent/>
                    </section>
                    <section id='proyects' className={styles.container_proyects}>
                        <Proyects/>
                    </section>
                    <section id='technologies' className={styles.container_technologies}>
                        <Technologies/>
                    </section>
                    <section id='contact' className={styles.container_contact}>
                        <Contact/>
                    </section>
                </> :
                null
            }    
        </div>
    )
}