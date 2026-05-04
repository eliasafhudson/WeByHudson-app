# Requirements Document

## Introduction

Este documento describe los requisitos para migrar el proyecto **WeByHudson** de su stack actual (React + Vite) a **Next.js con App Router**, e implementar el envío real de correos electrónicos desde el formulario de contacto mediante un Route Handler de Next.js.

El sitio es una landing page corporativa de una sola página con las secciones: Navbar, Hero, Servicios, Proceso, Planes, FAQs, Formulario de contacto y Footer. La migración debe preservar toda la funcionalidad visual y de animaciones existente, mejorar el SEO mediante Server-Side Rendering, y añadir la capacidad de enviar correos desde el formulario de contacto.

---

## Glossary

- **Next.js_App**: La aplicación Next.js resultante de la migración, usando App Router.
- **Route_Handler**: Endpoint de API implementado como `app/api/contact/route.ts` en Next.js que procesa el envío de correos.
- **Email_Service**: Servicio externo de envío de correos (Resend o Nodemailer + SMTP) invocado por el Route_Handler.
- **Contact_Form**: El componente de formulario de contacto (`Form.jsx`) migrado a Next.js como Client Component.
- **Client_Component**: Componente React marcado con `"use client"` que se ejecuta en el navegador.
- **Server_Component**: Componente React que se renderiza en el servidor por defecto en Next.js App Router.
- **Metadata_API**: API de Next.js para definir metadatos SEO (`title`, `description`, `og:*`) en `layout.tsx`.
- **Canvas_Background**: Animación de partículas interactivas implementada en `App.jsx` que debe preservarse.
- **Smooth_Scroll**: Función utilitaria que realiza scroll suave hacia secciones de la página por ID.
- **Environment_Variable**: Variable de configuración sensible (credenciales de correo) almacenada en `.env.local`.

---

## Requirements

### Requirement 1: Estructura del proyecto Next.js

**User Story:** Como desarrollador, quiero que el proyecto tenga la estructura correcta de Next.js con App Router, para que el código esté organizado según las convenciones del framework y sea mantenible a largo plazo.

#### Acceptance Criteria

1. THE Next.js_App SHALL usar App Router con el directorio `app/` como raíz de rutas.
2. THE Next.js_App SHALL incluir un archivo `app/layout.tsx` que defina el layout raíz con el HTML base, fuentes y estilos globales.
3. THE Next.js_App SHALL incluir un archivo `app/page.tsx` que renderice todas las secciones de la landing page en orden: Navbar, Hero, Servicios, Proceso, Planes, FAQs, Form y Footer.
4. THE Next.js_App SHALL mantener los componentes en el directorio `src/components/` (corrigiendo el typo `componets` del proyecto original).
5. THE Next.js_App SHALL incluir un archivo `next.config.ts` con la configuración base del proyecto.
6. THE Next.js_App SHALL incluir un archivo `tsconfig.json` configurado para TypeScript con path aliases (`@/*` apuntando a `src/*`).

---

### Requirement 2: Migración de componentes React

**User Story:** Como desarrollador, quiero que todos los componentes existentes sean migrados correctamente a Next.js, para que el sitio mantenga su apariencia y comportamiento visual sin regresiones.

#### Acceptance Criteria

1. WHEN un componente usa hooks de React (`useState`, `useEffect`, `useRef`) o event handlers del navegador, THE Next.js_App SHALL marcar ese componente con la directiva `"use client"` al inicio del archivo.
2. THE Next.js_App SHALL migrar los componentes Navbar, Hero, Servicios, Proceso, Planes, FAQs, Form y Footer preservando toda su lógica, estilos Tailwind y animaciones de Framer Motion / Motion.
3. THE Next.js_App SHALL convertir el componente Canvas_Background (actualmente en `App.jsx`) en un Client_Component separado (`CanvasBackground.tsx`) con la directiva `"use client"`.
4. WHEN un componente usa `import` de imágenes locales, THE Next.js_App SHALL reemplazar las etiquetas `<img>` por el componente `<Image>` de `next/image` con los atributos `width`, `height` y `alt` requeridos.
5. THE Next.js_App SHALL preservar la función `smoothScroll` en `src/utility/animation.ts` y su uso en Navbar y Hero.
6. WHEN el Navbar usa `<a href="/">` para el logo, THE Next.js_App SHALL reemplazarlo por el componente `<Link>` de `next/link`.

---

### Requirement 3: Configuración de estilos y Tailwind CSS

**User Story:** Como desarrollador, quiero que Tailwind CSS v4 y los estilos globales sean configurados correctamente en Next.js, para que el diseño visual del sitio sea idéntico al original.

#### Acceptance Criteria

1. THE Next.js_App SHALL instalar y configurar Tailwind CSS v4 usando el paquete `@tailwindcss/postcss` compatible con Next.js.
2. THE Next.js_App SHALL preservar todas las variables de color personalizadas (`--color-primary`, `--color-secondary`, `--color-green`, `--color-four`, `--color-five`, `--color-six`) definidas en el bloque `@theme` de `index.css`.
3. THE Next.js_App SHALL preservar la importación de la fuente "Plus Jakarta Sans" desde Google Fonts y la clase `.primary-btn` definida en los estilos globales.
4. THE Next.js_App SHALL importar los estilos globales (`globals.css`) en `app/layout.tsx`.
5. THE Next.js_App SHALL preservar la importación de `bootstrap-icons` en los estilos globales.

---

### Requirement 4: SEO y Metadata

**User Story:** Como dueño del negocio, quiero que el sitio tenga metadatos SEO correctamente configurados, para que aparezca bien posicionado en buscadores y se vea correctamente al compartirse en redes sociales.

#### Acceptance Criteria

1. THE Next.js_App SHALL exportar un objeto `metadata` desde `app/layout.tsx` usando la Metadata_API de Next.js con los campos `title` y `description`.
2. THE Next.js_App SHALL incluir metadatos Open Graph (`og:title`, `og:description`, `og:type`) en el objeto `metadata` de `app/layout.tsx`.
3. THE Next.js_App SHALL configurar el campo `title` con el valor `"WeByHudson | Diseño y Desarrollo Web Profesional"`.
4. THE Next.js_App SHALL configurar el campo `description` con una descripción del negocio de máximo 160 caracteres.

---

### Requirement 5: Route Handler para envío de correos

**User Story:** Como visitante del sitio, quiero enviar un mensaje desde el formulario de contacto y recibir una confirmación, para que pueda comunicarme con WeByHudson sin salir del sitio.

#### Acceptance Criteria

1. THE Route_Handler SHALL ser implementado en `app/api/contact/route.ts` y exportar una función `POST`.
2. WHEN el Route_Handler recibe una petición POST con los campos `name`, `email`, `phone` y `message`, THE Route_Handler SHALL validar que los campos requeridos (`name`, `email`, `message`) no estén vacíos.
3. IF algún campo requerido está vacío o el formato del email es inválido, THEN THE Route_Handler SHALL retornar una respuesta HTTP 400 con un mensaje de error descriptivo en formato JSON.
4. WHEN todos los campos requeridos son válidos, THE Route_Handler SHALL invocar al Email_Service para enviar el correo con los datos del formulario.
5. WHEN el Email_Service envía el correo exitosamente, THE Route_Handler SHALL retornar una respuesta HTTP 200 con un mensaje de confirmación en formato JSON.
6. IF el Email_Service falla al enviar el correo, THEN THE Route_Handler SHALL retornar una respuesta HTTP 500 con un mensaje de error genérico en formato JSON sin exponer detalles internos.
7. THE Route_Handler SHALL leer las credenciales del Email_Service exclusivamente desde Environment_Variables, nunca desde valores hardcodeados en el código.

---

### Requirement 6: Componente Contact_Form con envío real

**User Story:** Como visitante del sitio, quiero que el formulario de contacto envíe mis datos al servidor y me muestre el resultado, para que sepa si mi mensaje fue recibido correctamente.

#### Acceptance Criteria

1. THE Contact_Form SHALL ser un Client_Component marcado con `"use client"`.
2. WHEN el usuario hace clic en el botón "Enviar mensaje", THE Contact_Form SHALL enviar una petición `fetch` de tipo POST al endpoint `/api/contact` con los datos del formulario en formato JSON.
3. WHILE la petición está en curso, THE Contact_Form SHALL mostrar un indicador de carga (spinner) y deshabilitar el botón de envío para prevenir envíos duplicados.
4. WHEN el Route_Handler retorna una respuesta HTTP 200, THE Contact_Form SHALL mostrar el mensaje de éxito y limpiar todos los campos del formulario.
5. IF el Route_Handler retorna una respuesta HTTP 400 o 500, THEN THE Contact_Form SHALL mostrar un mensaje de error descriptivo al usuario sin recargar la página.
6. THE Contact_Form SHALL preservar todos los campos existentes: nombre, email, teléfono (opcional) y mensaje.
7. THE Contact_Form SHALL preservar todas las animaciones de Framer Motion y los estilos Tailwind del componente original.

---

### Requirement 7: Configuración de variables de entorno

**User Story:** Como desarrollador, quiero que las credenciales del servicio de correo estén correctamente gestionadas como variables de entorno, para que no se expongan en el repositorio de código.

#### Acceptance Criteria

1. THE Next.js_App SHALL incluir un archivo `.env.local.example` (sin valores reales) que documente todas las Environment_Variables necesarias para el Email_Service.
2. THE Next.js_App SHALL incluir `.env.local` en el archivo `.gitignore` para prevenir que las credenciales reales sean commiteadas al repositorio.
3. THE Route_Handler SHALL acceder a las credenciales del Email_Service usando `process.env.VARIABLE_NAME` sin el prefijo `NEXT_PUBLIC_`, ya que son variables exclusivas del servidor.
4. IF una Environment_Variable requerida no está definida al iniciar el servidor, THEN THE Route_Handler SHALL retornar una respuesta HTTP 500 indicando un error de configuración del servidor.

---

### Requirement 8: Preservación del Canvas Background

**User Story:** Como visitante del sitio, quiero ver la animación de partículas interactivas de fondo, para que la experiencia visual del sitio sea la misma que en la versión original.

#### Acceptance Criteria

1. THE Canvas_Background SHALL ser implementado como un Client_Component separado en `src/components/CanvasBackground.tsx`.
2. THE Canvas_Background SHALL preservar toda la lógica de animación de partículas, conexiones entre partículas y la interacción con el movimiento del mouse.
3. THE Canvas_Background SHALL ser incluido en `app/page.tsx` o en `app/layout.tsx` como componente de fondo fijo.
4. WHEN la ventana del navegador cambia de tamaño, THE Canvas_Background SHALL redimensionar el canvas para cubrir toda la pantalla.
