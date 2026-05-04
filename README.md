# WeByHudson — Landing Page

Sitio web de presentación para **WeByHudson**, un estudio de diseño y desarrollo web. Landing page de una sola página (SPA-style) construida con **Next.js 15**, **TypeScript**, **Tailwind CSS v4** y **Motion (Framer Motion)**, con envío real de correos desde el formulario de contacto mediante **Resend**.

---

## Tabla de contenidos

- [Stack tecnológico](#stack-tecnológico)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Secciones de la página](#secciones-de-la-página)
- [Componentes](#componentes)
- [Animaciones](#animaciones)
- [API de contacto](#api-de-contacto)
- [Variables de entorno](#variables-de-entorno)
- [Estilos y tema](#estilos-y-tema)
- [Cómo correr el proyecto](#cómo-correr-el-proyecto)

---

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| [Next.js](https://nextjs.org) | 15 | Framework principal, App Router, SSR, Route Handlers |
| [React](https://react.dev) | 19 | UI |
| [TypeScript](https://www.typescriptlang.org) | 5 | Tipado estático |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Estilos utilitarios |
| [Motion](https://motion.dev) | 12 | Animaciones (alias de Framer Motion) |
| [Resend](https://resend.com) | 4 | Envío de correos transaccionales |
| [Lucide React](https://lucide.dev) | — | Iconos SVG |
| [Bootstrap Icons](https://icons.getbootstrap.com) | 1.13 | Iconos adicionales (footer) |

---

## Estructura del proyecto

```
/
├── public/
│   └── Logo w.png              # Favicon y logo público
│
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout raíz: metadata, fuente, globals.css
│   │   ├── page.tsx            # Página principal — ensambla todos los componentes
│   │   ├── globals.css         # Estilos globales, tema de colores, Tailwind
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts    # Route Handler POST para envío de correos
│   │
│   ├── components/
│   │   ├── CanvasBackground.tsx
│   │   ├── Navbar/
│   │   │   └── Navbar.tsx
│   │   ├── Hero/
│   │   │   └── Hero.tsx
│   │   ├── Servicios/
│   │   │   ├── Servicios.tsx
│   │   │   └── WhyBox.tsx
│   │   ├── Proceso/
│   │   │   ├── Procesos.tsx
│   │   │   └── ProcesosBox.tsx
│   │   ├── Planes/
│   │   │   └── Planes.tsx
│   │   ├── Faqs/
│   │   │   └── Faqs.tsx
│   │   ├── Form/
│   │   │   └── Form.tsx
│   │   └── Footer/
│   │       └── Footer.tsx
│   │
│   ├── assets/                 # Imágenes locales (logo, banner, fotos)
│   │
│   └── utility/
│       └── animation.ts        # Variantes de animación reutilizables + smoothScroll
│
├── .env.local.example          # Plantilla de variables de entorno
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

---

## Secciones de la página

La página está compuesta por secciones apiladas verticalmente en este orden:

```
CanvasBackground  →  fondo animado fijo (canvas)
Navbar            →  navegación fija en la parte superior
Hero              →  presentación principal con CTA
Servicios         →  qué ofrece el estudio
Procesos          →  cómo trabajan paso a paso
Planes            →  tabla de precios (Básico / Profesional / Premium)
FAQs              →  preguntas frecuentes en acordeón
Form              →  formulario de contacto + sección "Quiénes somos"
Footer            →  links, contacto y redes sociales
```

Cada sección tiene un `id` HTML que permite la navegación por anclas (`#servicios`, `#precios`, `#faqs`, `#contacto`).

---

## Componentes

### `CanvasBackground`

Fondo interactivo de partículas dibujado con la Canvas API del navegador. Crea 60 partículas que se mueven, rebotan en los bordes y se conectan con líneas cuando están a menos de 150px entre sí. Las partículas se alejan del cursor del mouse. Se renderiza como `position: fixed` detrás de todo el contenido (`z-0`).

Directiva: `"use client"` — usa `useEffect` y `useRef`.

---

### `Navbar`

Barra de navegación fija en la parte superior. Comportamiento:

- Transparente al inicio, cambia a fondo oscuro con blur cuando el usuario hace scroll más de 20px.
- Links de navegación con smooth scroll hacia las secciones.
- Menú hamburguesa animado para móviles (con `AnimatePresence`).
- Botón CTA "Cotiza tu web" que abre WhatsApp.
- Logo con `next/image` y `next/link`.

Directiva: `"use client"` — usa `useState`, `useEffect`.

---

### `Hero`

Sección principal de bienvenida. Contiene:

- Título, subtítulo y dos botones CTA (ir a contacto / ver planes).
- Tarjeta decorativa estilo editor de código con stats (proyectos, responsive, valoración).
- Todas las entradas animadas con `slipeUp` y `slipeInFromSide`.

Directiva: `"use client"` — usa animaciones de Motion.

---

### `Servicios` + `WhyBox`

Sección que describe los servicios del estudio. `Servicios` maneja el encabezado animado y delega el contenido de las tarjetas a `WhyBox`. Las animaciones se activan al entrar en el viewport con `useInView`.

Directiva: `"use client"`.

---

### `Procesos` + `ProcesosBox`

Sección que explica el proceso de trabajo paso a paso. Misma estructura que Servicios: componente padre con encabezado + componente hijo con las tarjetas de cada paso.

Directiva: `"use client"`.

---

### `Planes`

Tabla de precios con tres planes: **Básico ($199)**, **Profesional ($349)** y **Premium ($599)**, todos de pago único. El plan Profesional está destacado visualmente (escala mayor, fondo verde, badge "Más popular"). Las tarjetas tienen animación `whileHover` que las eleva al pasar el cursor.

Directiva: `"use client"`.

---

### `Faqs`

Sección de preguntas frecuentes con acordeón animado. Cada pregunta se expande/colapsa con `AnimatePresence` y animación de altura. El estado de apertura es independiente por ítem. Incluye un CTA al final para contactar por WhatsApp.

Directiva: `"use client"` — usa `useState`.

---

### `Form`

Sección dividida en dos columnas:

**Izquierda — Quiénes somos:**
- Descripción del estudio.
- Imagen de equipo con `next/image`.
- Stats animados (proyectos, satisfacción, experiencia).

**Derecha — Formulario de contacto:**
- Campos: nombre (requerido), email (requerido), teléfono (opcional), mensaje (requerido).
- Estado de carga con spinner en el botón.
- Mensaje de éxito animado al enviar correctamente.
- Mensaje de error descriptivo si la API responde con error.
- Llama a `POST /api/contact` con `fetch`.

Directiva: `"use client"` — usa `useState`, `useRef`, `useInView`.

---

### `Footer`

Pie de página con cuatro columnas: marca/descripción, links de servicios, links de empresa y contacto. Incluye barra inferior con copyright y links a redes sociales. Usa `smoothScroll` para los links internos.

Directiva: `"use client"` — usa `useInView`.

---

## Animaciones

Todas las variantes de animación están centralizadas en `src/utility/animation.ts`:

| Función | Descripción |
|---|---|
| `slipeUp(delay)` | Entrada desde abajo con fade |
| `slipeInFromSide(direction, delay)` | Entrada desde izquierda o derecha con fade |
| `fadeIn(delay)` | Fade in simple |
| `fadeInView` | Variante para `useInView` (hidden → visible) con stagger por índice |
| `scaleIn(delay)` | Entrada con escala desde 0.85 |
| `smoothScroll(targetId)` | Scroll suave hacia un elemento por selector CSS, con offset de 80px para el navbar |

Los componentes que usan `useInView` activan sus animaciones una sola vez (`once: true`) cuando el elemento entra en el viewport con un margen de `-80px`.

---

## API de contacto

**Endpoint:** `POST /api/contact`

**Archivo:** `src/app/api/contact/route.ts`

### Request body (JSON)

```json
{
  "name": "string (requerido)",
  "email": "string (requerido, formato válido)",
  "phone": "string (opcional)",
  "message": "string (requerido)"
}
```

### Respuestas

| Status | Descripción |
|---|---|
| `200` | Correo enviado correctamente |
| `400` | Validación fallida (campo vacío o email inválido) |
| `500` | Error de configuración (variables de entorno faltantes) o fallo del servicio de correo |

### Flujo interno

1. Parsea el body JSON.
2. Valida que `name`, `email` y `message` no estén vacíos.
3. Valida el formato del email con regex.
4. Verifica que `RESEND_API_KEY`, `EMAIL_FROM` y `EMAIL_TO` estén definidas.
5. Envía el correo con Resend usando un template HTML.
6. Retorna respuesta apropiada.

Los errores internos nunca exponen detalles técnicos al cliente.

---

## Variables de entorno

Copia `.env.local.example` a `.env.local` y completa los valores:

```env
# API Key de Resend — obtén la tuya en https://resend.com
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Dirección desde la que se envían los correos
# Debe ser un dominio verificado en Resend (o usar onboarding@resend.dev para pruebas)
EMAIL_FROM=WeByHudson <noreply@tudominio.com>

# Dirección donde recibirás los mensajes del formulario
EMAIL_TO=hola@webyhudson.com
```

> **Importante:** Nunca uses el prefijo `NEXT_PUBLIC_` para estas variables. Son exclusivas del servidor y no deben exponerse al cliente.

---

## Estilos y tema

El sistema de diseño usa Tailwind CSS v4 con variables de color personalizadas definidas en `globals.css`:

| Variable | Color | Uso |
|---|---|---|
| `--color-primary` | `#0D1117` | Fondo principal (negro GitHub) |
| `--color-secondary` | `#2EA043` | Verde oscuro (bordes, badges) |
| `--color-green` | `#E6EDF3` | Texto principal (blanco suave) |
| `--color-four` | `#3FB950` | Verde brillante (acentos, CTAs) |
| `--color-five` | `#161B22` | Fondo secundario (cards, inputs) |
| `--color-six` | `#818181` | Texto secundario |

**Fuente:** Plus Jakarta Sans (Google Fonts), pesos 200–800.

**Clase utilitaria global:**
```css
.primary-btn  /* botón con borde verde, hover con fondo verde translúcido */
```

---

## Cómo correr el proyecto

### Requisitos

- Node.js 18+
- Una cuenta en [Resend](https://resend.com) para el envío de correos

### Instalación

```bash
npm install
```

### Configurar variables de entorno

```bash
cp .env.local.example .env.local
# Edita .env.local con tus credenciales de Resend
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

### Producción

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```
