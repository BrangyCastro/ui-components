# Example App - @fromsolvers/ui-components

Esta es una aplicación de demostración que muestra todos los componentes de la librería `@fromsolvers/ui-components` en acción.

## Características

- 🎨 Navegación interactiva entre diferentes componentes
- 📝 Ejemplos de código para cada componente
- 🎯 Demostración de todas las variantes y tamaños
- 📱 Responsive design
- ⚡ Hot Module Replacement (HMR) habilitado

## Ejecutar la aplicación

Desde la raíz del proyecto principal:

```bash
npm run example
```

O directamente desde esta carpeta:

```bash
npm run dev
```

## Componentes demostrados

### Hero
Sección principal con título, subtítulo y botones de CTA.

### Navbar
Barra de navegación responsiva con logo y enlaces.

### CTAButton
Botones con 3 variantes:
- **Primary**: Botón principal con gradiente
- **Secondary**: Botón secundario con fondo gris
- **Outline**: Botón con borde y fondo transparente

Y 3 tamaños:
- Small
- Medium
- Large

### Card
Tarjetas para mostrar contenido con:
- Título opcional
- Imagen opcional
- Contenido personalizable
- Efectos hover
- Clickeable

### Footer
Pie de página con:
- Múltiples secciones con enlaces
- Copyright
- Diseño responsive en grid

## Estructura del código

```
example/
├── src/
│   ├── App.tsx          # Aplicación principal con todos los ejemplos
│   ├── index.css        # Estilos con Tailwind CSS
│   └── main.tsx         # Punto de entrada
├── tailwind.config.js   # Configuración de Tailwind
├── postcss.config.js    # Configuración de PostCSS
└── vite.config.ts       # Configuración de Vite con alias
```

## Desarrollo

Esta aplicación usa directamente el código fuente de los componentes (no el build) mediante un alias en Vite.

Cualquier cambio que hagas en los componentes de la librería se reflejará automáticamente en esta aplicación gracias al Hot Module Replacement.

## Build

Para construir la aplicación de ejemplo:

```bash
npm run build
```

O desde la raíz:

```bash
npm run example:build
```
