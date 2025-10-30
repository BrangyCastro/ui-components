# @fromsolvers/ui-components

Librería de componentes React para landing pages y lobbies desarrollada por FromSolvers. Construida con **React**, **TypeScript** y **Tailwind CSS**.

## Características

- ✨ Componentes modernos y responsivos
- 🎨 Estilados con Tailwind CSS
- 📦 Tipado completo con TypeScript
- 🚀 Optimizado para producción
- 🎯 Fácil de personalizar
- 📚 Incluye ejemplo interactivo de todos los componentes

## Demo y Ejemplos

Esta librería incluye una carpeta `example/` con una aplicación de demostración que muestra todos los componentes en acción con ejemplos de código.

### Ver los ejemplos localmente

```bash
# Desde la raíz del proyecto
npm run example
```

Esto iniciará un servidor de desarrollo en http://localhost:5173/ donde podrás:
- Ver todos los componentes funcionando
- Navegar entre diferentes ejemplos
- Ver el código de uso de cada componente
- Probar interacciones y variantes

La aplicación de ejemplo usa los componentes directamente desde el código fuente, por lo que cualquier cambio que hagas en los componentes se reflejará automáticamente.

## Instalación

### 1. Configurar autenticación con GitHub Packages

Crea un archivo `.npmrc` en la raíz de tu proyecto:

```
@fromsolvers:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=TU_TOKEN_GITHUB
```

### 2. Instalar el paquete

```bash
npm install @fromsolvers/ui-components
```

### 3. Configurar Tailwind CSS en tu proyecto

Esta librería usa Tailwind CSS. Necesitas tener Tailwind configurado en tu proyecto.

Si aún no tienes Tailwind CSS instalado:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

Actualiza tu `tailwind.config.js` para incluir los componentes de la librería:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@fromsolvers/ui-components/dist/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7ff',
          100: '#ebf0fe',
          200: '#cdd9fd',
          300: '#afc2fc',
          400: '#7394f9',
          500: '#667eea',
          600: '#4c63d2',
          700: '#3d4eb8',
          800: '#303e95',
          900: '#263073',
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#764ba2',
          600: '#5b3a7d',
          700: '#4a2f66',
          800: '#3a2550',
          900: '#2b1c3a',
        },
      },
    },
  },
  plugins: [],
}
```

## Uso

### Importar componentes y estilos

```tsx
import { Hero, Navbar, CTAButton, Card, Footer } from '@fromsolvers/ui-components';
import '@fromsolvers/ui-components/dist/style.css';
```

## Componentes

### Hero

Componente principal para la sección hero de landing pages.

```tsx
import { Hero, CTAButton } from '@fromsolvers/ui-components';

function App() {
  return (
    <Hero
      title="Bienvenido a FromSolvers"
      subtitle="Creamos soluciones innovadoras"
      backgroundImage="/hero-bg.jpg"
    >
      <CTAButton variant="primary" size="large">
        Comenzar
      </CTAButton>
    </Hero>
  );
}
```

**Props:**
- `title` (string, requerido): Título principal
- `subtitle` (string, opcional): Subtítulo
- `backgroundImage` (string, opcional): URL de la imagen de fondo
- `className` (string, opcional): Clases CSS adicionales
- `children` (ReactNode, opcional): Contenido hijo

### Navbar

Barra de navegación responsiva.

```tsx
import { Navbar } from '@fromsolvers/ui-components';

function App() {
  const navItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Contacto', href: '/contacto' }
  ];

  return (
    <Navbar
      logo={<img src="/logo.png" alt="Logo" />}
      items={navItems}
    />
  );
}
```

**Props:**
- `logo` (ReactNode, opcional): Logo o elemento personalizado
- `items` (NavItem[], requerido): Array de items de navegación
- `className` (string, opcional): Clases CSS adicionales

**NavItem:**
- `label` (string): Texto del enlace
- `href` (string): URL del enlace
- `onClick` (función, opcional): Manejador de clic

### CTAButton

Botón de llamada a la acción con múltiples variantes.

```tsx
import { CTAButton } from '@fromsolvers/ui-components';

function App() {
  return (
    <>
      <CTAButton variant="primary" size="large">
        Acción Principal
      </CTAButton>

      <CTAButton variant="secondary" size="medium">
        Acción Secundaria
      </CTAButton>

      <CTAButton variant="outline" size="small">
        Outline
      </CTAButton>
    </>
  );
}
```

**Props:**
- `children` (ReactNode, requerido): Contenido del botón
- `onClick` (función, opcional): Manejador de clic
- `variant` ('primary' | 'secondary' | 'outline', default: 'primary'): Variante del botón
- `size` ('small' | 'medium' | 'large', default: 'medium'): Tamaño del botón
- `className` (string, opcional): Clases CSS adicionales
- `disabled` (boolean, default: false): Estado deshabilitado
- `type` ('button' | 'submit' | 'reset', default: 'button'): Tipo de botón

### Card

Tarjeta para mostrar contenido con imagen opcional.

```tsx
import { Card } from '@fromsolvers/ui-components';

function App() {
  return (
    <Card
      title="Título de la tarjeta"
      image="/card-image.jpg"
    >
      <p>Contenido de la tarjeta aquí</p>
    </Card>
  );
}
```

**Props:**
- `title` (string, opcional): Título de la tarjeta
- `image` (string, opcional): URL de la imagen
- `children` (ReactNode, requerido): Contenido de la tarjeta
- `className` (string, opcional): Clases CSS adicionales
- `onClick` (función, opcional): Manejador de clic

### Footer

Pie de página con secciones y enlaces.

```tsx
import { Footer } from '@fromsolvers/ui-components';

function App() {
  const footerSections = [
    {
      title: 'Productos',
      links: [
        { label: 'Producto 1', href: '/producto1' },
        { label: 'Producto 2', href: '/producto2' }
      ]
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Acerca de', href: '/about' },
        { label: 'Contacto', href: '/contact' }
      ]
    }
  ];

  return (
    <Footer
      sections={footerSections}
      copyright="© 2025 FromSolvers. Todos los derechos reservados."
    />
  );
}
```

**Props:**
- `sections` (FooterSection[], opcional): Array de secciones
- `copyright` (string, opcional): Texto de copyright
- `className` (string, opcional): Clases CSS adicionales
- `children` (ReactNode, opcional): Contenido personalizado

## Desarrollo

### Construir la librería

```bash
npm run build
```

### Publicar en GitHub Packages

1. Asegúrate de tener un token de GitHub con permisos de `write:packages`
2. Configura la variable de entorno `GITHUB_TOKEN`
3. Ejecuta:

```bash
npm run build
npm publish
```

## TypeScript

Esta librería incluye definiciones de tipos TypeScript. No necesitas instalar `@types` adicionales.

## Personalización

### Extender clases de Tailwind

Puedes personalizar los componentes pasando clases de Tailwind adicionales a través de la prop `className`:

```tsx
<Hero
  title="Mi título"
  subtitle="Mi subtítulo"
  className="bg-blue-900 min-h-[700px]"
>
  <CTAButton className="shadow-2xl">
    Mi botón personalizado
  </CTAButton>
</Hero>
```

### Personalizar colores

Los componentes usan los colores `primary` y `secondary` de Tailwind. Puedes personalizar estos colores en tu `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: {
        500: '#tu-color-primario',
      },
      secondary: {
        500: '#tu-color-secundario',
      },
    },
  },
}
```

## Tecnologías

- **React 18+**
- **TypeScript 5+**
- **Tailwind CSS 4+**
- **Vite** (bundler)

## Licencia

ISC
