# @brangycastro/ui-components

Modern React component library for landing pages and marketing sections, built by FromSolvers. Powered by **React 19**, **TypeScript**, and **CSS Modules**.

## ✨ Features

- 🎨 **CSS Modules**: Scoped styles prevent conflicts with host project CSS
- 🛡️ **High Specificity**: All styles use `!important` to resist global CSS overrides
- 📦 **Fully Typed**: Complete TypeScript definitions included
- 🚀 **Production Ready**: Optimized bundle with minimal dependencies
- 🪶 **Lightweight**: Only 5.6 kB package size (gzipped CSS: 0.60 kB)
- 📱 **Responsive**: Mobile-first design with breakpoint at 768px
- ⚡ **React 18 & 19**: Compatible with both versions
- 🎯 **Zero Style Conflicts**: Works seamlessly with any CSS framework

## 📦 Installation

### 1. Configure GitHub Packages Authentication

Create a `.npmrc` file in your project root:

```
@brangycastro:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

To get a GitHub token:
1. Go to https://github.com/settings/tokens/new
2. Select scopes: `read:packages`
3. Generate and copy the token

### 2. Install the Package

```bash
npm install @brangycastro/ui-components
```

**That's it!** No additional dependencies required.

## 🚀 Quick Start

```tsx
import { TitleParagraphCTA } from '@brangycastro/ui-components';
import '@brangycastro/ui-components/style.css';

function App() {
  return (
    <TitleParagraphCTA
      title="Welcome to My Application"
      titleStyle="red-black"
      description="Build amazing landing pages with modern React components"
      alignment="center"
      buttonText="Get Started"
      buttonLink="/signup"
      backgroundColor="#f5f5f5"
      buttonColor="#FB3333"
      textColor="#ffffff"
      openInNewTab={false}
    />
  );
}
```

## 📚 Components

### TitleParagraphCTA

Versatile marketing component that combines a stylized title, optional description, and optional call-to-action button. Perfect for hero sections, landing pages, and promotional content.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | **required** | The main title text |
| `titleStyle` | `'red' \| 'black' \| 'red-black'` | **required** | Style of the title. `'red-black'` automatically splits the title in half |
| `description` | `string` | `undefined` | Optional description text below the title |
| `alignment` | `'left' \| 'center' \| 'right'` | `'center'` | Horizontal alignment of all content |
| `buttonText` | `string` | `undefined` | Text for the CTA button. Button won't render if omitted |
| `buttonLink` | `string` | `undefined` | URL for the button link |
| `textColor` | `string` | `'#ffffff'` | Button text color (any valid CSS color) |
| `buttonColor` | `string` | `'#FB3333'` | Button background color (any valid CSS color) |
| `backgroundColor` | `string` | `'#f5f5f5'` | Section background color (any valid CSS color) |
| `openInNewTab` | `boolean` | `true` | Whether to open the link in a new tab |
| `className` | `string` | `''` | Additional CSS classes for the wrapper |

#### Examples

**Full Featured with Red-Black Title:**
```tsx
<TitleParagraphCTA
  title="Transform Your Business Today"
  titleStyle="red-black"
  description="Join thousands of companies using our platform to scale and grow."
  alignment="center"
  buttonText="Start Free Trial"
  buttonLink="/signup"
  backgroundColor="#ffffff"
  buttonColor="#FB3333"
  textColor="#ffffff"
  openInNewTab={false}
/>
```

**All Red Title, Left Aligned:**
```tsx
<TitleParagraphCTA
  title="Premium Solutions"
  titleStyle="red"
  description="Enterprise-grade tools for modern teams"
  alignment="left"
  buttonText="Contact Sales"
  buttonLink="/contact"
/>
```

**Black Title, No Button:**
```tsx
<TitleParagraphCTA
  title="Simple and Elegant"
  titleStyle="black"
  description="Sometimes less is more"
  alignment="center"
/>
```

**Transparent Background:**
```tsx
<TitleParagraphCTA
  title="Overlay Section"
  titleStyle="red-black"
  description="Works great on top of images"
  backgroundColor="transparent"
  buttonText="Learn More"
  buttonLink="#"
/>
```

**Custom Brand Colors:**
```tsx
<TitleParagraphCTA
  title="Your Brand Here"
  titleStyle="red-black"
  description="Customize colors to match your brand"
  buttonText="Get Started"
  buttonLink="/start"
  backgroundColor="#1a1a1a"
  buttonColor="#3B82F6"
  textColor="#ffffff"
/>
```

## 🎨 CSS Architecture

This library uses **CSS Modules** for style isolation. All class names are automatically scoped with unique hashes, preventing conflicts with your project's CSS.

### Example Generated Classes

```css
.TitleParagraphCTA-module__root___0a8zD
.TitleParagraphCTA-module__title___qQDoP
.TitleParagraphCTA-module__button___zZg3-
```

### Protection Against Global Styles

All styles use `!important` to ensure components maintain their appearance even when the host project has aggressive global CSS like:

```css
/* These won't affect the component */
body * { font-size: 12px !important; }
* { box-sizing: content-box; }
div { padding: 0; margin: 0; }
```

The component's font sizes, spacing, and layout remain exactly as designed.

## 📱 Responsive Design

Components are built with a **mobile-first** approach:

- **Mobile (< 768px)**: Optimized for touch devices
- **Desktop (≥ 768px)**: Enhanced layout for larger screens

### TitleParagraphCTA Breakpoints

- **Mobile**: Title 1.75rem, Button padding 0.875rem 2.5rem
- **Desktop**: Title 2.5rem, Button padding 1rem 3rem

## 🧪 Interactive Example & Documentation

This library includes a complete example application with:
- **Component Lobby**: Browse all available components
- **Live Documentation**: See components in action
- **Interactive Configurator**: Test props in real-time
- **Code Generator**: Get copy-paste ready code

### Run Example Locally

```bash
# From project root
cd example
npm install
npm run dev
```

Visit http://localhost:3000 to explore:
- Component gallery and descriptions
- Live examples with different configurations
- Interactive prop configurator
- Generated code snippets

## 🛠️ Development

### Build the Library

```bash
npm run build
```

This generates:
- `dist/ui-components.es.js` (ES module)
- `dist/ui-components.umd.js` (UMD module)
- `dist/ui-components.css` (Styles with CSS Modules)
- `dist/*.d.ts` (TypeScript definitions)

### Publish to GitHub Packages

```bash
# Increment version
npm version patch|minor|major

# Build
npm run build

# Publish
npm publish
```

## 🔧 Customization

### Override Styles with className

You can add custom CSS classes for additional styling:

```tsx
<TitleParagraphCTA
  title="Custom Styled"
  titleStyle="red-black"
  className="my-custom-section"
/>
```

```css
.my-custom-section {
  padding: 8rem 2rem !important; /* More padding */
  max-width: 1400px;
  margin: 0 auto;
}
```

**Note**: Use `!important` if you need to override component styles.

### Dynamic Colors

All color props accept any valid CSS color value:

```tsx
// Hex colors
backgroundColor="#f0f0f0"
buttonColor="#FF6B6B"

// RGB/RGBA
backgroundColor="rgb(245, 245, 245)"
buttonColor="rgba(251, 51, 51, 0.9)"

// Named colors
backgroundColor="transparent"
buttonColor="crimson"

// HSL
backgroundColor="hsl(0, 0%, 96%)"
buttonColor="hsl(0, 87%, 59%)"
```

## 📦 Bundle Information

### Current Version: 1.3.2

**Package Size**: 5.6 kB
**Unpacked**: 16.7 kB
**CSS (minified)**: 2.24 kB
**CSS (gzipped)**: 0.60 kB
**JS ES (minified)**: 2.40 kB
**JS UMD (minified)**: 1.93 kB

## 🔄 Version History

### v1.3.2 (Latest)
- 🐛 Fixed title span font-size inheritance issue
- Added explicit `font-size: inherit !important` to title spans
- Ensures consistent title appearance across all projects

### v1.3.1
- 🐛 Added `!important` to all critical CSS properties
- Prevents global CSS from overriding component styles
- Added `box-sizing: border-box !important`

### v1.3.0
- ✨ Added `backgroundColor` prop to TitleParagraphCTA
- Default value: `#f5f5f5`

### v1.2.0
- ✨ Implemented CSS Modules for scoped styling
- Removed global CSS styles
- 83% bundle size reduction (from 10.97 kB to 1.89 kB)

### v1.1.1
- 🐛 Fixed React instance conflict
- Configured automatic JSX runtime
- Externalized `react/jsx-runtime`

### v1.1.0
- ✨ Added TitleParagraphCTA component
- Created lobby system for component browsing
- Rebuilt example with Next.js 15 + Shadcn UI
- Added interactive configurator

## 🧰 Tech Stack

- **React**: 18.0.0 or 19.0.0
- **TypeScript**: 5.9+
- **Build Tool**: Vite 7
- **Styling**: CSS Modules
- **Bundle**: ES Modules + UMD

## 📄 TypeScript Support

Full TypeScript definitions included. No need to install `@types` packages.

```tsx
import type { TitleParagraphCTAProps } from '@brangycastro/ui-components';

const config: TitleParagraphCTAProps = {
  title: "Type-safe Configuration",
  titleStyle: "red-black",
  // TypeScript will validate all props
};
```

## 🤝 Contributing

This is a private package for FromSolvers projects. For issues or feature requests, contact the development team.

## 📝 License

ISC

## 🔗 Links

- **Repository**: https://github.com/BrangyCastro/ui-components
- **Package**: https://github.com/BrangyCastro/ui-components/packages
- **Author**: FromSolvers

---

Built with ❤️ by FromSolvers
