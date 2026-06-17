# Portfolio Personal - Next.js 15

Portfolio personal optimizado para SEO desarrollado con Next.js 15, TypeScript, Tailwind CSS y las mejores prácticas de rendimiento web.

## Tecnologías

- **Next.js 16** - App Router, Turbopack, Metadata API
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Estilos utilitarios
- **ESLint** - Código limpio y consistente

## Características

- SEO optimizado con Metadata API (Open Graph, Twitter Cards, Robots)
- Sitemap dinámico generado automáticamente
- Imágenes optimizadas con `next/image` (AVIF, WebP, lazy loading)
- Diseño responsive y premium minimalista
- Animaciones y transiciones suaves
- Navegación sticky
- Modo oscuro nativo

## Instalación

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Estructura

```
src/
├── app/
│   ├── page.tsx            # Home
│   ├── layout.tsx          # Layout + SEO global
│   ├── about/page.tsx      # Sobre mí
│   ├── contact/page.tsx    # Contacto
│   ├── projects/
│   │   ├── page.tsx        # Lista de proyectos
│   │   └── [slug]/page.tsx # Detalle dinámico
│   ├── sitemap.ts          # Sitemap XML
│   └── robots.ts           # Robots.txt
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   └── ContactForm.tsx
├── lib/data.ts             # Datos del portafolio
└── types/index.ts          # Interfaces TypeScript
```

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Desarrollo con Turbopack |
| `npm run build` | Build de producción |
| `npm run start` | Servir build |
| `npm run lint` | Análisis ESLint |

## Despliegue

### Vercel (recomendado)

```bash
npm i -g vercel
vercel
```

O conectar el repositorio desde [vercel.com/new](https://vercel.com/new).

### URL

[https://portfolio-antony.vercel.app](https://portfolio-antony.vercel.app)

## Lighthouse

- Performance > 90
- Accessibility > 90
- Best Practices > 90
- SEO > 90
# project-elver-cholan-portafolio
