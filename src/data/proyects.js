import image_recipes from '../assets/images/proyects/backgroundRecipes.jpg';
import react from '../assets/images/iconsTechnologies/react.png'; 
import redux from '../assets/images/iconsTechnologies/redux.png'; 
import nodeJs from '../assets/images/iconsTechnologies/nodeJs.png'; 
import postgreSQL from '../assets/images/iconsTechnologies/postgreSql.png'; 
import materialUi from '../assets/images/iconsTechnologies/materialUi.png'; 
import recipesImage from '../assets/images/proyects/backgroundRecipes.jpg';
import codeCuakImage from '../assets/images/proyects/backgroundcodeCuak.jpg';
// import sequelize from '../assets/images/iconsTechnologies/'; 

const recipes={
    title: "Recipes Henry",
    description: `"RecipesHenry" es una aplicación en la cual se pueden ver distintas recetas de comida 
                    junto con información relevante de las mismas utilizando la api externa "spoonacular" 
                    y a partir de ella poder, entre otras cosas: Buscar, Filtrar y Ordenar resultados y Crear nuevas recetas`,
    image: image_recipes,
    technologies: [
        { name: "React", icon: react }, 
        { name: "Redux", icon: redux }, 
        { name: "NodeJs", icon: nodeJs},
        {name: "PostgreSql", icon: postgreSQL } 
    ],
    links: {
        repository: "",
        deploy: "https://pi-henry-2.vercel.app"
    },
    image: recipesImage
}
const codeCuak={
    title: "code Cuak",
    description: `Nace con la idea de crear un espacio amigable en el que los desarrolladores puedan 
                  distenderse, compartir ideas y proyectos propios. Resolver dudas, buscar compañeros 
                  para trabajar en equipo y buscar trabajo. Todo dentro de un mismo espacio`,
    image: image_recipes,
    technologies: [
        { name: "React", icon: react }, 
        { name: "Redux", icon: redux }, 
        { name: "NodeJs", icon: nodeJs},
        {name: "PostgreSql", icon: postgreSQL}, 
        {name: "MaterialUi", icon: materialUi} 
    ],
    links: {
        repository: "",
        deploy: "https://front-end-six-black.vercel.app"
    },
    image: codeCuakImage
}

export const proyects = [ recipes, codeCuak ]