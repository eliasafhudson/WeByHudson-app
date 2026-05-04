# Plan de Implementación: Migración React + Vite → Next.js con envío de correos

## Descripción general

Migrar el proyecto WeByHudson de React + Vite a Next.js con App Router, preservando toda la funcionalidad visual y de animaciones, mejorando el SEO con SSR y añadiendo envío real de correos desde el formulario de contacto mediante un Route Handler.

El lenguaje de implementación es **TypeScript** con **Next.js App Router**.

---

## Tareas

- [x] 1. Inicializar proyecto Next.js y configurar dependencias
  - Crear un nuevo proyecto Next.js con App Router y TypeScript en el directorio raíz (o en una carpeta paralela para migración incremental)
  - Instalar dependencias: `next`, `react`, `react-dom`, `tailwindcss`, `@tailwindcss/postcss`, `motion`, `lucide-react`, `bootstrap-icons`, `resend` (o `nodemailer`)
  - Crear `next.config.ts` con configuración base (habilitar `images.remotePatterns` si aplica)
  - Crear `tsconfig.json` con path alias `@/*` apuntando a `src/*`
  - Verificar que `next dev` arranca sin errores
  - _Requisitos: 1.1, 1.5, 1.6_

- [x] 2. Configurar estilos globales y Tailwind CSS v4
  - [x] 2.1 Crear `src/app/globals.css` con las variables de color `@theme`, la importación de "Plus Jakarta Sans", la importación de `bootstrap-icons` y la clase `.primary-btn`
    - Preservar exactamente: `--color-primary`, `--color-secondary`, `--color-green`, `--color-four`, `--color-five`, `--color-six`
    - _Requisitos: 3.1, 3.2, 3.3, 3.5_
  - [x] 2.2 Crear `postcss.config.mjs` con el plugin `@tailwindcss/postcss`
    - _Requisitos: 3.1_
  - [x] 2.3 Crear `app/layout.tsx` e importar `globals.css`
    - Incluir el HTML base (`<html lang="es">`, `<body>`)
    - Exportar el objeto `metadata` con `title`, `description` y campos Open Graph
    - _Requisitos: 1.2, 3.4, 4.1, 4.2, 4.3, 4.4_

- [x] 3. Migrar utilidades y assets
  - [x] 3.1 Copiar `src/utility/animation.js` a `src/utility/animation.ts` añadiendo tipos TypeScript básicos
    - Preservar `slipeUp`, `slipeInFromSide`, `fadeIn`, `fadeInView`, `scaleIn` y `smoothScroll`
    - Marcar el archivo como compatible con entorno browser (no añadir `"use client"` aquí; los componentes que lo usen lo harán)
    - _Requisitos: 2.5_
  - [x] 3.2 Copiar todos los assets de `src/assets/` a `public/` o mantenerlos en `src/assets/` según la estrategia de `next/image`
    - _Requisitos: 2.4_

- [x] 4. Migrar componente CanvasBackground
  - [x] 4.1 Crear `src/components/CanvasBackground.tsx` con la directiva `"use client"`
    - Extraer toda la lógica del canvas de `App.jsx`: clase `Particle`, `init`, `animate`, listeners de `mousemove` y `resize`
    - Preservar el `useEffect` con cleanup de `cancelAnimationFrame` y `removeEventListener`
    - Aplicar clases: `fixed top-0 left-0 w-full h-full pointer-events-none z-0`
    - _Requisitos: 2.1, 2.3, 8.1, 8.2, 8.4_

- [x] 5. Migrar componente Navbar
  - [x] 5.1 Crear `src/components/Navbar/Navbar.tsx` con la directiva `"use client"`
    - Preservar estado `isOpen` y `scrolled`, listeners de scroll, animaciones de `motion/react`
    - Reemplazar `<a href="/">` del logo por `<Link href="/">` de `next/link`
    - Reemplazar `<img>` del logo por `<Image>` de `next/image` con `width`, `height` y `alt`
    - Preservar `smoothScroll` para los links de navegación
    - _Requisitos: 2.1, 2.2, 2.4, 2.6_

- [x] 6. Migrar componente Hero
  - [x] 6.1 Crear `src/components/Hero/Hero.tsx` con la directiva `"use client"`
    - Preservar animaciones de `framer-motion` / `motion/react` usando `slipeUp` y `slipeInFromSide`
    - Preservar `smoothScroll` en los botones CTA
    - _Requisitos: 2.1, 2.2, 2.5_

- [x] 7. Migrar componentes de secciones estáticas
  - [x] 7.1 Crear `src/components/Servicios/Servicios.tsx` y `WhyBox.tsx` con `"use client"` (usan `useInView`)
    - Preservar animaciones y estilos Tailwind
    - _Requisitos: 2.1, 2.2_
  - [x] 7.2 Crear `src/components/Proceso/Procesos.tsx` y `ProcesosBox.tsx` con `"use client"`
    - Preservar animaciones y estilos Tailwind
    - _Requisitos: 2.1, 2.2_
  - [x] 7.3 Crear `src/components/Planes/Planes.tsx` con `"use client"`
    - Preservar animaciones, tarjetas de planes y estilos Tailwind
    - _Requisitos: 2.1, 2.2_
  - [x] 7.4 Crear `src/components/Faqs/Faqs.tsx` con `"use client"`
    - Preservar estado de acordeón, `AnimatePresence` y estilos Tailwind
    - _Requisitos: 2.1, 2.2_
  - [x] 7.5 Crear `src/components/Footer/Footer.tsx` con `"use client"` (usa `useInView` y `smoothScroll`)
    - Reemplazar `<img>` del logo por `<Image>` de `next/image`
    - _Requisitos: 2.1, 2.2, 2.4_

- [x] 8. Checkpoint — Verificar estructura visual base
  - Asegurarse de que todos los tests pasan y que la página renderiza correctamente con todos los componentes migrados. Consultar al usuario si surgen dudas.

- [x] 9. Migrar componente Contact Form (sin envío real aún)
  - [x] 9.1 Crear `src/components/Form/Form.tsx` con la directiva `"use client"`
    - Preservar estado `form`, `sent`, `loading` y el handler `handleChange`
    - Preservar todas las animaciones de `motion/react` y los estilos Tailwind
    - Preservar todos los campos: nombre, email, teléfono (opcional) y mensaje
    - Reemplazar `<img>` de `nosotros.avif` por `<Image>` de `next/image`
    - Dejar el `handleSubmit` preparado para llamar a `/api/contact` (implementar en tarea 11)
    - _Requisitos: 2.1, 2.2, 2.4, 6.1, 6.6, 6.7_

- [x] 10. Crear `app/page.tsx` y ensamblar la landing page
  - Importar y renderizar en orden: `CanvasBackground`, `Navbar`, `Hero`, `Servicios`, `Procesos`, `Planes`, `Faqs`, `Form`, `Footer`
  - Envolver los componentes en la estructura `<div>` con `canvas` fijo y contenido relativo `z-10`
  - Verificar que la página completa renderiza sin errores en `next dev`
  - _Requisitos: 1.3, 8.3_

- [x] 11. Implementar Route Handler para envío de correos
  - [x] 11.1 Crear `app/api/contact/route.ts` con la función `POST` exportada
    - Parsear el body JSON y extraer `name`, `email`, `phone`, `message`
    - Validar que `name`, `email` y `message` no estén vacíos y que el formato del email sea válido (regex básico)
    - Retornar HTTP 400 con mensaje descriptivo en JSON si la validación falla
    - _Requisitos: 5.1, 5.2, 5.3_
  - [x] 11.2 Integrar el Email_Service (Resend o Nodemailer) en el Route Handler
    - Leer credenciales exclusivamente desde `process.env` (sin prefijo `NEXT_PUBLIC_`)
    - Si alguna variable de entorno requerida no está definida, retornar HTTP 500 con mensaje de error de configuración
    - Invocar el servicio de correo con los datos del formulario
    - Retornar HTTP 200 con mensaje de confirmación en JSON si el envío es exitoso
    - Retornar HTTP 500 con mensaje genérico (sin detalles internos) si el servicio falla
    - _Requisitos: 5.4, 5.5, 5.6, 5.7, 7.3, 7.4_

- [x] 12. Conectar Contact Form con el Route Handler
  - [x] 12.1 Actualizar `handleSubmit` en `Form.tsx` para enviar `fetch` POST a `/api/contact`
    - Enviar `Content-Type: application/json` con los datos del formulario
    - Mientras la petición está en curso: mostrar spinner y deshabilitar el botón
    - Si la respuesta es HTTP 200: mostrar mensaje de éxito y limpiar campos
    - Si la respuesta es HTTP 400 o 500: mostrar mensaje de error descriptivo sin recargar la página
    - _Requisitos: 6.2, 6.3, 6.4, 6.5_

- [x] 13. Configurar variables de entorno
  - Crear `.env.local.example` documentando todas las variables necesarias (p. ej. `RESEND_API_KEY`, `EMAIL_FROM`, `EMAIL_TO`) sin valores reales
  - Verificar que `.env.local` está en `.gitignore`
  - _Requisitos: 7.1, 7.2_

- [x] 14. Checkpoint final — Verificar flujo completo
  - Asegurarse de que todos los tests pasan, que el formulario envía correos correctamente en entorno local y que la página renderiza sin errores de hidratación. Consultar al usuario si surgen dudas.

---

## Notas

- Las tareas marcadas con `*` son opcionales y pueden omitirse para un MVP más rápido.
- Cada tarea referencia los requisitos específicos para trazabilidad.
- Los checkpoints garantizan validación incremental antes de continuar.
- El diseño no incluye una sección de "Correctness Properties", por lo que no se añaden tareas de property-based tests; se usan pruebas manuales y de integración.
- Todos los componentes que usen hooks de React o APIs del navegador deben llevar `"use client"` al inicio del archivo.
