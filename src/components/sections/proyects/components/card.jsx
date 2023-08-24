import styles from './card.module.css';
import { Carrusel } from './subComponents/carrusel/carrusel.jsx';
import backgroundRecipes from '../../../../assets/images/proyects/backgroundRecipes.jpg';
export const Card = ()=>{
    return(
        <div className={styles.principalContainer}>
            <div className={styles.subContainer1}>
                <div className={styles.description}>
                    <p>
                        "RecipesHenry" es una aplicación en la cual se pueden ver distintas recetas de comida 
                        junto con información relevante de las mismas utilizando la api externa "spoonacular" 
                        y a partir de ella poder, entre otras cosas: Buscar, Filtrar y Ordenar resultados y Crear nuevas recetas
                    </p>
                </div>
                <div className={styles.containerImage}>
                    <img src={backgroundRecipes} alt='Imagen del proyecto'/>
                </div>
            </div>
            <div className={styles.subContainer2}>
                <div className={styles.technologies}>
                    <Carrusel/>
                </div>
            </div>
        </div>
    )
}