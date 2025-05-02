import cinemaApp from "./assets/cinemaApp.jpeg";
import newsApp from "./assets/newsApp.png";
import memoryGame from "./assets/memoryGame.jpeg";
import taskList from "./assets/taskList.jpeg";
import mLearning from "./assets/mLearning.jpeg";
import RickMorty from "./assets/RickMorty.png";
import javaAirplane from "./assets/javaAirplane.jpeg";
import Datastructure from "./assets/DataStructure.jpeg";
import visorImagenes from "./assets/visorImagenes.png";

const infoProjects = [
    {
        name : 'APP NOTICIAS',
        description : 'Aplicación web para buscar noticias de cualquier tema. Utiliza la API de NewsAPI.',
        image : newsApp,
        url : 'https://newsdbevenntreg.netlify.app/',
        github : 'https://github.com/DBermudez23/News-App'
    },
    {
        name : 'APP DE TAREAS (CRUD)',
        description : 'Aplicación web para guardar y eliminar tareas. Realizado con django y bootstrap.',
        image : taskList,
        url : 'https://tasks-app-crud.onrender.com/signup/',
        github : 'https://github.com/DBermudez23/Tasks-app-CRUD'
    },
    {
        name : 'VISOR Y EDITOR DE IMAGENES CON PyQt & NumPy',
        description : 'Desarrollada en Python con PyQt6 que permite visualizar y editar imágenes con técnicas de procesamiento con NumPy y Matplotlib.',
        image : visorImagenes,
        url : 'https://github.com/DBermudez23/Visor_imagenes',
        github : 'https://github.com/DBermudez23/Visor_imagenes'
    },
    {
        name : 'APP DE RICK Y MORTY',
        description : 'Aplicación web responsiva desarrollada con SvelteKit y Tailwind CSS que consume la API de Rick and Morty.',
        image : RickMorty,
        url : 'https://rickmortydbermu.netlify.app/',
        github : 'https://github.com/DBermudez23/Rick-and-Morty/'
    },
    {
        name : 'JAVA APLICACIÓN SISTEMA DE RESERVAS AEROPUERTO',
        description : 'Aplicación Java desarrollada con Maven y Swing para la gestión de reservas de vuelos en una aerolínea.',
        image : javaAirplane,
        github : 'https://github.com/DBermudez23/Aeropuerto'
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
        name : 'MEMORY GAME (SOLO HTML Y CSS)',
        description : 'Juego de memoria con cartas, practica pura de estilizado y HTML. Realizado con HTML y CSS sin una sola linea de algún lenguaje de programación.',
        image : memoryGame,
        url : 'https://memoty-game-db.netlify.app/',
        github : 'https://github.com/DBermudez23/memory-game'
    },
    {
        name : 'APP CINEMA',
        description : 'Aplicación web para buscar películas, series de televisión y actores. Utiliza la API de The Movie Database (TMDb).',
        image : cinemaApp,
        url : 'https://cinema-appdb-tmdbapi.netlify.app/',
        github : 'https://github.com/DBermudez23/cinema-app-TMDB-API'
    }
]

export default infoProjects;