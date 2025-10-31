# FromSolvers UI Components - Example

Este es un proyecto de ejemplo que demuestra el uso de los componentes de FromSolvers UI con Next.js, Tailwind CSS y Shadcn UI.

## Tecnologías

- **Next.js 15** - Framework de React para producción
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework de CSS utility-first
- **Shadcn UI** - Componentes UI reutilizables y accesibles

## Instalación

1. Instala las dependencias:

```bash
npm install
```

2. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Componentes Incluidos

### TitleParagraphCTA

Un componente elegante que combina:
- Título con texto destacado en color
- Párrafo descriptivo
- Botón de llamada a la acción (CTA)

**Ejemplo de uso:**

```tsx
import { TitleParagraphCTA } from '@brangycastro/ui-components';

<TitleParagraphCTA
  highlightText="¿Estas list@"
  titleText="para Mi Billetera AT?"
  paragraph="Conoce cómo estamos revolucionando tu experiencia en las tiendas de Apuesta Total."
  buttonText="Regístrate"
  onButtonClick={() => console.log('Clicked!')}
/>
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## Estructura del Proyecto

```
example/
├── app/
│   ├── globals.css       # Estilos globales con Tailwind
│   ├── layout.tsx        # Layout principal
│   └── page.tsx          # Página principal
├── components/           # Componentes de Shadcn UI (cuando se agreguen)
├── lib/
│   └── utils.ts         # Utilidades (cn function)
├── components.json      # Configuración de Shadcn UI
├── tailwind.config.ts   # Configuración de Tailwind
└── package.json

```

## Agregando Componentes de Shadcn UI

Para agregar componentes de Shadcn UI al proyecto:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add tabs
```

Los componentes se agregarán automáticamente a la carpeta `components/ui/`.

## Más Información

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com)
- [FromSolvers UI Components](../README.md)
