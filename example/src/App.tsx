import { useState } from 'react';
import { Hero, Navbar, CTAButton, Card, Footer } from '@fromsolvers/ui-components';
import '../../src/styles/index.css';

function App() {
  const [activeTab, setActiveTab] = useState<'all' | 'hero' | 'navbar' | 'buttons' | 'cards' | 'footer'>('all');

  const navItems = [
    { label: 'Inicio', href: '#', onClick: () => setActiveTab('all') },
    { label: 'Hero', href: '#hero', onClick: () => setActiveTab('hero') },
    { label: 'Navbar', href: '#navbar', onClick: () => setActiveTab('navbar') },
    { label: 'Buttons', href: '#buttons', onClick: () => setActiveTab('buttons') },
    { label: 'Cards', href: '#cards', onClick: () => setActiveTab('cards') },
    { label: 'Footer', href: '#footer', onClick: () => setActiveTab('footer') },
  ];

  const footerSections = [
    {
      title: 'Productos',
      links: [
        { label: 'Producto 1', href: '#' },
        { label: 'Producto 2', href: '#' },
        { label: 'Producto 3', href: '#' }
      ]
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Acerca de', href: '#' },
        { label: 'Contacto', href: '#' },
        { label: 'Careers', href: '#' }
      ]
    },
    {
      title: 'Recursos',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Documentación', href: '#' },
        { label: 'Soporte', href: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacidad', href: '#' },
        { label: 'Términos', href: '#' },
        { label: 'Cookies', href: '#' }
      ]
    }
  ];

  const showHero = activeTab === 'all' || activeTab === 'hero';
  const showNavbar = activeTab === 'navbar';
  const showButtons = activeTab === 'all' || activeTab === 'buttons';
  const showCards = activeTab === 'all' || activeTab === 'cards';
  const showFooter = activeTab === 'all' || activeTab === 'footer';

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar Demo */}
      <Navbar
        logo={<span className="text-primary-600">FromSolvers UI</span>}
        items={navItems}
      />

      {/* Hero Section Demo */}
      {showHero && (
        <section id="hero">
          <Hero
            title="FromSolvers UI Components"
            subtitle="Una librería moderna de componentes React con Tailwind CSS para landing pages y lobbies"
          >
            <div className="flex gap-4 justify-center flex-wrap">
              <CTAButton variant="primary" size="large">
                Comenzar
              </CTAButton>
              <CTAButton variant="outline" size="large">
                Ver Documentación
              </CTAButton>
            </div>
          </Hero>
        </section>
      )}

      {/* Navbar Examples */}
      {showNavbar && (
        <section id="navbar" className="py-16 bg-gray-50">
          <div className="container mx-auto px-8">
            <h2 className="text-4xl font-bold text-center mb-4">Navbar Component</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Barra de navegación responsiva con logo y enlaces. Se adapta automáticamente a dispositivos móviles.
            </p>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Ejemplo de uso:</h3>
              <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
{`import { Navbar } from '@fromsolvers/ui-components';

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Contacto', href: '/contacto' }
];

<Navbar
  logo={<span>Mi Logo</span>}
  items={navItems}
/>`}
              </pre>
            </div>
          </div>
        </section>
      )}

      {/* Button Examples */}
      {showButtons && (
        <section id="buttons" className="py-16 bg-white">
          <div className="container mx-auto px-8">
            <h2 className="text-4xl font-bold text-center mb-4">CTAButton Component</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Botones de llamada a la acción con múltiples variantes y tamaños.
            </p>

            <div className="space-y-12">
              {/* Variants */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-center">Variantes</h3>
                <div className="flex gap-4 justify-center flex-wrap">
                  <CTAButton variant="primary" size="medium">
                    Primary Button
                  </CTAButton>
                  <CTAButton variant="secondary" size="medium">
                    Secondary Button
                  </CTAButton>
                  <CTAButton variant="outline" size="medium">
                    Outline Button
                  </CTAButton>
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-center">Tamaños</h3>
                <div className="flex gap-4 justify-center items-center flex-wrap">
                  <CTAButton variant="primary" size="small">
                    Small
                  </CTAButton>
                  <CTAButton variant="primary" size="medium">
                    Medium
                  </CTAButton>
                  <CTAButton variant="primary" size="large">
                    Large
                  </CTAButton>
                </div>
              </div>

              {/* States */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-center">Estados</h3>
                <div className="flex gap-4 justify-center flex-wrap">
                  <CTAButton variant="primary" size="medium">
                    Normal
                  </CTAButton>
                  <CTAButton variant="primary" size="medium" disabled>
                    Disabled
                  </CTAButton>
                </div>
              </div>

              {/* Code Example */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Ejemplo de uso:</h3>
                <pre className="bg-white p-4 rounded overflow-x-auto text-sm border">
{`import { CTAButton } from '@fromsolvers/ui-components';

<CTAButton
  variant="primary"
  size="large"
  onClick={() => console.log('clicked')}
>
  Mi Botón
</CTAButton>`}
                </pre>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Card Examples */}
      {showCards && (
        <section id="cards" className="py-16 bg-gray-50">
          <div className="container mx-auto px-8">
            <h2 className="text-4xl font-bold text-center mb-4">Card Component</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Tarjetas elegantes para mostrar contenido con imagen opcional y efectos hover.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card title="Card Simple">
                <p className="text-gray-600">
                  Esta es una tarjeta simple sin imagen. Perfecta para mostrar información textual.
                </p>
                <CTAButton variant="primary" size="small" className="mt-4">
                  Ver más
                </CTAButton>
              </Card>

              <Card title="Card con Acción" onClick={() => alert('Card clicked!')}>
                <p className="text-gray-600">
                  Esta tarjeta es clickeable. Pasa el cursor sobre ella para ver el efecto hover.
                </p>
              </Card>

              <Card title="Card Personalizada" className="border-2 border-primary-500">
                <p className="text-gray-600">
                  Usa clases de Tailwind para personalizar tus cards.
                </p>
                <div className="flex gap-2 mt-4">
                  <CTAButton variant="outline" size="small">
                    Cancelar
                  </CTAButton>
                  <CTAButton variant="primary" size="small">
                    Aceptar
                  </CTAButton>
                </div>
              </Card>
            </div>

            {/* Code Example */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Ejemplo de uso:</h3>
              <pre className="bg-gray-50 p-4 rounded overflow-x-auto text-sm">
{`import { Card } from '@fromsolvers/ui-components';

<Card
  title="Mi Tarjeta"
  onClick={() => console.log('clicked')}
>
  <p>Contenido de la tarjeta...</p>
</Card>`}
              </pre>
            </div>
          </div>
        </section>
      )}

      {/* Footer Examples */}
      {showFooter && (
        <section id="footer" className="py-16 bg-white">
          <div className="container mx-auto px-8">
            <h2 className="text-4xl font-bold text-center mb-4">Footer Component</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Pie de página con secciones organizadas y diseño responsive.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Ejemplo de uso:</h3>
              <pre className="bg-white p-4 rounded overflow-x-auto text-sm border">
{`import { Footer } from '@fromsolvers/ui-components';

const sections = [
  {
    title: 'Productos',
    links: [
      { label: 'Producto 1', href: '#' },
      { label: 'Producto 2', href: '#' }
    ]
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Acerca de', href: '#' },
      { label: 'Contacto', href: '#' }
    ]
  }
];

<Footer
  sections={sections}
  copyright="© 2025 Mi Empresa"
/>`}
              </pre>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <Footer
        sections={footerSections}
        copyright="© 2025 FromSolvers. Todos los derechos reservados."
      />
    </div>
  );
}

export default App;
