import image_recipes from '../assets/images/proyects/backgroundRecipes.jpg';
import react from '../assets/images/iconsTechnologies/react.png'; 
import redux from '../assets/images/iconsTechnologies/redux.png'; 
import nodeJs from '../assets/images/iconsTechnologies/nodeJs.png'; 
import postgreSQL from '../assets/images/iconsTechnologies/postgreSql.png'; 
import recipesImage from '../assets/images/proyects/backgroundRecipes.jpg';
// import sequelize from '../assets/images/iconsTechnologies/'; 

const recipes={
    title: "Recipes",
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

export const proyects = [ recipes ]