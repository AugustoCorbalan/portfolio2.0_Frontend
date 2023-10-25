import image_recipes from '../assets/images/proyects/backgroundRecipes.jpg';
import react from '../assets/images/iconsTechnologies/react.png'; 
import redux from '../assets/images/iconsTechnologies/redux.png'; 
import css from '../assets/images/iconsTechnologies/css.png'; 
import html from '../assets/images/iconsTechnologies/html5.png'; 
import nodeJs from '../assets/images/iconsTechnologies/nodeJs.png'; 
import postgreSQL from '../assets/images/iconsTechnologies/postgreSql.png'; 
import materialUi from '../assets/images/iconsTechnologies/materialUi.png'; 
import nextJs from '../assets/images/iconsTechnologies/nextJs.png'; 
import sequelize from '../assets/images/iconsTechnologies/sequelize.png'; 
import recipesImage from '../assets/images/proyects/backgroundRecipes.jpg';
import image_codeCuak from '../assets/images/proyects/backgroundcodeCuak.jpg';
import image_portfolio1 from '../assets/images/proyects/backgroundPortfolio1.jpg';
import image_portfolio2 from '../assets/images/proyects/backgroundPortfolio2.jpg';
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
        {name: "Sequelize", icon: sequelize},
        {name: "PostgreSql", icon: postgreSQL }
    ],
    links: {
        repository: {
            frontend:"https://github.com/AugustoCorbalan/PI-Henry-2/tree/main/client",
            backend: "https://github.com/AugustoCorbalan/PI-Henry-2/tree/main/api"
        },
        deploy: "https://pi-henry-2.vercel.app"
    },
    image: recipesImage
}
const codeCuak={
    title: "code Cuak",
    description: `Nace con la idea de crear un espacio amigable en el que los desarrolladores puedan 
                  distenderse, compartir ideas y proyectos propios. Resolver dudas, buscar compañeros 
                  para trabajar en equipo y buscar trabajo. Todo dentro de un mismo espacio`,
    image: image_codeCuak,
    technologies: [
        { name: "React", icon: react }, 
        { name: "Redux", icon: redux }, 
        {name: "MaterialUi", icon: materialUi},
        { name: "NodeJs", icon: nodeJs},
        {name: "Sequelize", icon: sequelize},
        {name: "PostgreSql", icon: postgreSQL} 
    ],
    links: {
        repository:{
            frontend: "https://github.com/SeroTomas/FrontEnd/tree/main/codecuakfront",
            backend: ""
        },
        deploy: "https://front-end-six-black.vercel.app"
    }
}

const portfolio1={
    title: "Portfolio 1.0",
    description: `Mi primer portafolio desarrollado en Next.js. El desarrollo del mismo me permitió aprender
                    y poner en práctica conceptos básicos del framework Next.js. En este proyecto se utilizó para los
                    estilos css puro, y la biblioteca particles.js para las particulas animadas. `,
    image: image_portfolio1,
    technologies: [
        { name: "nextJs", icon: nextJs },
        { name: "react", icon: react },
        { name: css, icon: css }
    ],
    links: {
        repository:{
            frontend: "https://github.com/AugustoCorbalan/Portfolio/tree/main/client",
            backend: "https://github.com/AugustoCorbalan/Portfolio/tree/main/api"
        },
        deploy: "https://portfolio-liard-mu-69.vercel.app/"
    }
}

const portfolio2={
    title: "Portfolio 2.0",
    description: `  Todas las animaciones e interactividad fue desarrollada con css puro, javascript y vectores SVG. En el cual intento mostrar mis habilidades en el
                    manejo de estas tecnologías.
                    PD: Sigo desarrollando y actualizando este portafolio con más animaciones e interactividad. Para hacerlo cada vez más interesante.`,
    image: image_portfolio2,
    technologies: [
        { name: "react", icon: react },
        { name: "redux", icon: redux },
        { name: css, icon: css }
    ],
    links: {
        repository: {
            frontend: "https://github.com/AugustoCorbalan/portfolio2.0_Frontend"
        },
        deploy: "https://portfolio2-0-drab.vercel.app/"
    }
}

export const proyects = [ recipes, codeCuak, portfolio1, portfolio2 ]