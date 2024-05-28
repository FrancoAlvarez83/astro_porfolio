import { TAGS } from "./TagsObject"

export const PROJECTS = [
    {
        title: 'Bienes Raices',
        description: 'Mercado de bienes raíces moderno con autenticación de jwt y el kit de herramientas de redux. Usando React, MongoDB, Express.js, Node.js y Firebase.',
        link: 'https://mern-estate-i2x8.onrender.com/',
        github: 'https://github.com/FrancoAlvarez83/mern-estate',
        image: './mern_estate.png',
        tags: [TAGS.REACT, TAGS.MONGO, TAGS.FIREBASE]
    },
    {
        title: 'Landing Moderna',
        description: 'Landing page moderna basada en la Fórmula 1. Creada con Vite usando Tailwind CSS y Framer Motion.',
        link: 'https://glistening-starlight-256505.netlify.app/',
        github: 'https://github.com/FrancoAlvarez83/f1_landing_react',
        image: './modern_ui_project.png',
        tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.FRAMER]
    },
    {
        title: 'Contro de Costos',
        description: 'Aplicación para controlar gastos a partir de un presupuesto determinado por el usuario. Permitiendo editar y eliminar los gastos, y utilizar filtros mostrando los cambios en tiempo real.',
        link: 'https://superlative-parfait-506a46.netlify.app/',
        github: 'https://github.com/FrancoAlvarez83/expenses_control',
        image: './expenses_project.png',
        tags: [TAGS.REACT, TAGS.CSS, TAGS.JAVASCRIPT]
    }
]

export const PROJECTS_COMPONENT = [   
    {
        title: 'Landing Moderna',
        description: 'Landing page moderna basada en la Fórmula 1. Creada con Vite usando Tailwind CSS y Framer Motion.',
        link: 'https://glistening-starlight-256505.netlify.app/',
        github: 'https://github.com/FrancoAlvarez83/f1_landing_react',
        image: '/modern_ui_project.png',
        tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.FRAMER]
    }, 
]