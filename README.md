# Portfolio — Julen Hidalgo Chamero

Portfolio personal desarrollado con **React + Vite**, listo para desplegar en Vercel.

## Stack

- React 18
- Vite 5
- CSS Modules
- Fuentes: Syne + DM Sans (Google Fonts)

## Estructura

```
src/
├── components/
│   ├── Navbar.jsx / .module.css
│   ├── Hero.jsx / .module.css
│   ├── Skills.jsx / .module.css
│   ├── Experience.jsx / .module.css
│   ├── Projects.jsx / .module.css
│   ├── Education.jsx / .module.css
│   ├── Contact.jsx / .module.css
│   └── Footer.jsx / .module.css
├── hooks/
│   └── useReveal.js
├── data.js          ← Todos los textos y proyectos aquí
├── App.jsx
├── main.jsx
└── index.css        ← Variables CSS globales y estilos base
```

## Desarrollo local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Despliegue en Vercel

1. Sube el repositorio a GitHub
2. En [vercel.com](https://vercel.com), importa el repositorio
3. Vercel detecta Vite automáticamente — sin configuración extra
4. ¡Listo!

## Personalización

Para modificar contenido (proyectos, skills, experiencia, contacto), edita únicamente el archivo `src/data.js`.
