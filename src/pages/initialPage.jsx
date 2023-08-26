import { useSelector } from 'react-redux';
import styles from './initialPage.module.css';
import { NavBar } from '../components/navBar/navBar';
import { FrontCard } from '../components/sections/frontCard/frontCard';
import { FootTechnologies } from '../components/footTechnologies/footTechnologies';
import { FirstModal } from '../components/modals/firstModal';
import { AboutComponent } from '../components/sections/about/aboutComponent';
import { Proyects } from '../components/sections/proyects/proyects';
import { LoaderPage } from '../components/loader_page/loaderPage';
import { Curtain } from '../components/loader_page/components/curtain/curtain';
export const InitialPage = ()=>{
    const start = useSelector((state)=>state.start)
    return(
        <>
            <NavBar/>
            {!start ? <Curtain/> : null}
            <section className={styles.container1}>
                <div className={styles.container}>
                    <FrontCard/>
                </div>
                <FootTechnologies/>
            </section>
            {start?
                <>
                    <section className={styles.container2}>
                        <AboutComponent/>
                    </section>
                    <section className={styles.container3}>
                        <Proyects/>
                    </section>
                </>
                :null
            }
        </>
    )
}