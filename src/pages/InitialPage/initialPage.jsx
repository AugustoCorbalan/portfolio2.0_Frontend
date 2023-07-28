import { useSelector } from 'react-redux';
import styles from './initialPage.module.css';
import { NavBar } from '../../components/navBar/navBar';
import { FrontCard } from '../../components/frontCard/frontCard';
import { FootTechnologies } from '../../components/FootTechnologies/footTechnologies';
import { FirstModal } from '../../components/Modals/firstModal';
import { AboutComponent } from '../../components/About/aboutComponent';
export const InitialPage = ()=>{
    const start = useSelector((state)=>state.start)
    return(
        <>
            <NavBar/>
            {!start ? <FirstModal/> : null}
            <section className={styles.container1}>
                <div className={styles.container}>
                    <FrontCard/>
                </div>
                <FootTechnologies/>
            </section>
            {start?
                <section className={styles.container2}>
                    <AboutComponent/>
                </section>
                :null
            }
        </>
    )
}