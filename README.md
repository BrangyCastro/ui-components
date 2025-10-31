# @brangycastro/ui-components

Librería de componentes React para landing pages y lobbies desarrollada por FromSolvers. Construida con **React**, **TypeScript** y **CSS vanilla**.

## Características

- ✨ Componentes modernos y responsivos
- 🎨 Estilados con CSS vanilla (sin dependencias)
- 📦 Tipado completo con TypeScript
- 🚀 Optimizado para producción
- 🎯 Fácil de usar - solo instala e importa
- 🪶 Ligera - sin dependencias de estilos
- 📱 Diseño responsive mobile-first (breakpoint md: 768px)
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
@brangycastro:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=TU_TOKEN_GITHUB
```

### 2. Instalar el paquete

```bash
npm install @brangycastro/ui-components
```

**¡Eso es todo!** No necesitas instalar ninguna dependencia adicional.

## Uso

### Importar componentes y estilos

```tsx
import { Hero, Navbar, CTAButton, Card, Footer } from '@brangycastro/ui-components';
import '@brangycastro/ui-components/dist/style.css';

function App() {
  return (
    <Hero title="Mi Aplicación" subtitle="Fácil de usar">
      <CTAButton variant="primary">Comenzar</CTAButton>
    </Hero>
  );
}
```

## Componentes

### Hero

Componente principal para la sección hero de landing pages.

```tsx
import { Hero, CTAButton } from '@brangycastro/ui-components';

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
import { Navbar } from '@brangycastro/ui-components';

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
import { CTAButton } from '@brangycastro/ui-components';

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
import { Card } from '@brangycastro/ui-components';

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
import { Footer } from '@brangycastro/ui-components';

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

## Diseño Responsive

Los componentes están diseñados con un enfoque **mobile-first**:

- **Por defecto (< 768px)**: Diseño optimizado para móviles
- **md (≥ 768px)**: Diseño optimizado para web/desktop

### Breakpoints

- **Mobile**: < 768px
- **Desktop/Web (md)**: ≥ 768px
- **Large (lg)**: ≥ 1024px (usado en Footer)

## Personalización

Puedes personalizar los componentes pasando clases CSS personalizadas a través de la prop `className`:

```tsx
<Hero
  title="Mi título"
  subtitle="Mi subtítulo"
  className="mi-clase-personalizada"
>
  <CTAButton className="mi-boton-custom">
    Mi botón personalizado
  </CTAButton>
</Hero>
```

Luego en tu CSS:

```css
.mi-clase-personalizada {
  min-height: 700px;
  /* tus estilos personalizados */
}

.mi-boton-custom {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  /* tus estilos personalizados */
}
```

### Personalizar colores de gradiente

Los componentes usan gradientes CSS predefinidos. Puedes sobrescribir los estilos usando CSS:

```css
/* Personalizar el gradiente del Hero */
.hero {
  background: linear-gradient(to bottom right, #tu-color-primario, #tu-color-secundario) !important;
}

/* Personalizar el gradiente del botón primario */
.cta-button--primary {
  background: linear-gradient(to bottom right, #tu-color-primario, #tu-color-secundario) !important;
}
```

## Tecnologías

- **React 18+**
- **TypeScript 5+**
- **CSS vanilla** (sin dependencias)
- **Vite** (bundler)

## Licencia

ISC
