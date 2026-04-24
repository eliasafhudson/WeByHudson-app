# WeByHudson App

Landing page profesional para una agencia de diseño y desarrollo web. Construida con React + Vite y estilizada con Tailwind CSS v4.

## Tecnologías

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Motion](https://motion.dev/) — animaciones (framer-motion compatible)
- [Lucide React](https://lucide.dev/) — iconos
- [Bootstrap Icons](https://icons.getbootstrap.com/) — iconos adicionales

## Estructura del proyecto

```
src/
├── assets/                  # Imágenes y recursos estáticos
├── componets/
│   ├── Navbar/              # Barra de navegación responsive con animación de entrada
│   ├── Hero/                # Sección principal con CTA y tarjeta de código animada
│   ├── Servicios/           # Grid de servicios con animaciones al hacer scroll
│   │   ├── Servicios.jsx    # Header de sección
│   │   └── WhyBox.jsx       # Cards de servicios con hover animado
│   ├── Proceso/             # Pasos del proceso de trabajo
│   │   ├── Procesos.jsx     # Header de sección
│   │   └── ProcesosBox.jsx  # Steps con línea conectora
│   ├── Planes/              # Sección de precios con card destacada
│   └── Footer/              # Footer con links, contacto y redes sociales
├── utility/
│   └── animation.js         # Variantes de animación reutilizables (slipeUp, slipeInFromSide, fadeIn, fadeInView, scaleIn, smoothScroll)
├── App.jsx                  # Canvas de partículas + composición de secciones
├── index.css                # Tema de colores Tailwind + fuente Plus Jakarta Sans
└── main.jsx
```

## Paleta de colores

| Token       | Valor     | Uso                          |
|-------------|-----------|------------------------------|
| `primary`   | `#0D1117` | Fondo principal              |
| `secondary` | `#2EA043` | Verde GitHub (bordes, badges)|
| `green`     | `#E6EDF3` | Texto principal claro        |
| `four`      | `#3FB950` | Verde acento (CTAs, iconos)  |
| `five`      | `#161B22` | Fondo secundario             |

## Instalación

```bash
npm install
npm run dev
```

## Scripts

| Comando           | Descripción                        |
|-------------------|------------------------------------|
| `npm run dev`     | Servidor de desarrollo             |
| `npm run build`   | Build de producción                |
| `npm run preview` | Vista previa del build             |
| `npm run lint`    | Linter con ESLint                  |
| `npm run deploy`  | Deploy a GitHub Pages (gh-pages)   |

## Secciones

| Sección    | ID          | Descripción                                              |
|------------|-------------|----------------------------------------------------------|
| Navbar     | —           | Fija, con efecto blur al hacer scroll y menú hamburguesa |
| Hero       | —           | Headline, CTA doble y tarjeta de código con stats        |
| Servicios  | `#servicios`| 6 cards de servicios con animación stagger al entrar     |
| Proceso    | `#proceso`  | 4 pasos con línea conectora en desktop                   |
| Planes     | `#precios`  | 3 planes de precios con card destacada escalada          |
| Footer     | —           | Links, contacto, redes sociales y copyright              |

## Animaciones

Todas las secciones usan `useInView` de Motion para disparar animaciones solo cuando el elemento entra en el viewport (`once: true`). Las variantes reutilizables están en `src/utility/animation.js`.

- **Navbar**: slide down al cargar
- **Hero**: stagger de elementos con slide up y slide desde lados
- **Servicios / Proceso / Planes**: fade + slide up con delay escalonado por card
- **Footer**: fade in al entrar en viewport

## Deploy

El proyecto está configurado para deploy en GitHub Pages:

```bash
npm run deploy
```

Homepage configurada en `package.json` → `https://eliasafhudson.github.io/WeByHudson-app`
