import cinemaApp from "./assets/cinemaApp.jpeg";
import newsApp from "./assets/newsApp.jpeg";
import memoryGame from "./assets/memoryGame.jpeg";
import taskList from "./assets/taskList.jpeg";
import mLearning from "./assets/mLearning.jpeg";
import threeInLine from "./assets/threeInLine.jpeg";
import javaAirplane from "./assets/javaAirplane.jpeg";
import Datastructure from "./assets/DataStructure.jpeg";

const infoProjects = [
    {
        name : 'APP NOTICIAS',
        description : 'Aplicación web para buscar noticias de cualquier tema. Utiliza la API de NewsAPI.',
        image : newsApp,
        url : 'https://newsdbevenntreg.netlify.app/',
        github : 'https://github.com/DBermudez23/News-App'
    },
    {
        name : 'MEMORY GAME (SOLO HTML Y CSS)',
        description : 'Juego de memoria con cartas, practica pura de estilizado y HTML. Realizado con HTML y CSS sin una sola linea de algún lenguaje de programación.',
        image : memoryGame,
        url : 'https://memoty-game-db.netlify.app/',
        github : 'https://github.com/DBermudez23/memory-game'
    },
    {
        name : 'APP DE TAREAS (CRUD)',
        description : 'Aplicación web para guardar y eliminar tareas. Realizado con django y bootstrap.',
        image : taskList,
        url : 'https://tasks-app-crud.onrender.com/signup/',
        github : 'https://github.com/DBermudez23/Tasks-app-CRUD'
    },
    {
        name : 'JAVA APLICACIÓN SISTEMA DE RESERVAS AEROPUERTO',
        description : 'Aplicación Java desarrollada con Maven y Swing para la gestión de reservas de vuelos en una aerolínea.',
        image : javaAirplane,
        github : 'https://github.com/DBermudez23/Aeropuerto'
    },
    {
        name : 'APP CINEMA',
        description : 'Aplicación web para buscar películas, series de televisión y actores. Utiliza la API de The Movie Database (TMDb).',
        image : cinemaApp,
        url : 'https://cinema-appdb-tmdbapi.netlify.app/',
        github : 'https://github.com/DBermudez23/cinema-app-TMDB-API'
    },
    {
        name : 'CLASIFICACIÓN DE PAISES POR RIESGO ENERGETICO (MACHINE LEARNING)',
        description : 'Clasificación de paises por riesgo energético. Realizado con Python y la librería Scikit-Learn.',
        image : mLearning,
        github : 'https://github.com/DBermudez23/Machine-learning-project/tree/main'
    },
    {
        name : 'ESTRUCTURAS DE DATOS (C++)',
        description : 'Un proyecto de C++ centrado en la implementación y manipulación de estructuras de datos básicas, como pilas, colas y árboles.',
        image : Datastructure,
        github : 'https://github.com/DBermudez23/Data-Structure-Project'
    },
    {
        name : '3 EN LINEA',
        description : 'Juego de 3 en línea. Realizado con HTML, CSS y JavaScript. De mis primeros proyectos.',
        image : threeInLine,
        url : 'https://3-in-linejs.netlify.app/'
    }
]

export default infoProjects;