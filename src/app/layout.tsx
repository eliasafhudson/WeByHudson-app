import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WeByHudson | Diseño y Desarrollo Web Profesional',
  description: 'Creamos páginas web profesionales, rápidas y optimizadas para SEO que generan resultados reales para tu negocio.',
  openGraph: {
    title: 'WeByHudson | Diseño y Desarrollo Web Profesional',
    description: 'Creamos páginas web profesionales, rápidas y optimizadas para SEO que generan resultados reales para tu negocio.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
