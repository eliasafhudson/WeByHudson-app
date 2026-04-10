# WebyHudson App

Landing page profesional para una agencia de diseño y desarrollo web. Construida con React + Vite y estilizada con Tailwind CSS.

## Tecnologías

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Motion](https://motion.dev/) — animaciones
- [Bootstrap Icons](https://icons.getbootstrap.com/)

## Estructura del proyecto

```
src/
├── assets/          # Imágenes y recursos estáticos
├── componets/
│   ├── Navbar/      # Barra de navegación responsive
│   └── Hero/        # Sección principal con CTA
├── utility/
│   └── animation.js # Variantes de animación reutilizables
├── App.jsx
└── main.jsx
```

## Instalación

```bash
npm install
```

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run preview` | Vista previa del build |
| `npm run lint` | Linter con ESLint |

## Características

- Navbar fija con efecto de scroll y menú hamburguesa para móviles
- Sección Hero con imagen de fondo, animaciones y botón de cotización vía WhatsApp
- Diseño responsive (mobile-first)
