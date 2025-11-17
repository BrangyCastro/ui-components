"use client";

import Link from "next/link";
import { TitleCarouselCardsList } from "@brangycastro/ui-components";
import "@brangycastro/ui-components/style.css";

export default function TitleCarouselCardsListPage() {
  const exampleCards = [
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      imageAlt: "Escanea y haz cashout",
      title: "Escanea y haz cashout fácilmente",
      listItems: [
        "Inicia sesión en Mi Billetera AT.",
        "Abre el menú y presiona \"Escanear\" para abrir tu cámara.",
        "Escanea el código de barras de tu ticket.",
        "¡Listo! Presiona \"Cobrar\" y olvídate de las colas.",
      ],
    },
    {
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      imageAlt: "Recarga tu cuenta",
      title: "Recarga tu cuenta al instante",
      listItems: [
        "Accede a tu cuenta desde cualquier dispositivo.",
        "Selecciona la opción de recarga en el menú principal.",
        "Elige el método de pago que prefieras.",
        "Confirma la transacción y recibe tu saldo inmediatamente.",
      ],
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      imageAlt: "Juega y gana",
      title: "Juega y gana premios increíbles",
      listItems: [
        "Explora nuestra amplia selección de juegos.",
        "Elige tu juego favorito y comienza a jugar.",
        "Acumula puntos con cada partida ganada.",
        "Canjea tus puntos por premios exclusivos.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="border-b bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                TitleCarouselCardsList
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Responsive carousel with cards containing images and numbered lists
              </p>
            </div>
            <Link
              href="/"
              className="text-sm text-gray-600 hover:text-gray-900 underline"
            >
              ← Back to Components
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Quick Actions */}
        <div className="flex gap-4 mb-8">
          <Link
            href="/title-carousel-cards-list/configurator"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            Interactive Configurator
          </Link>
        </div>

        {/* Component Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">Overview</h2>
          <p className="text-gray-600 text-lg mb-6">
            The <code className="bg-gray-100 px-2 py-1 rounded">TitleCarouselCardsList</code> component displays a responsive carousel of cards with images and numbered lists. Each card features a prominent image and a structured list of items, perfect for step-by-step guides, tutorials, and feature explanations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-blue-600 font-semibold mb-2">Category</div>
              <div className="text-gray-900">Marketing / Carousel</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-green-600 font-semibold mb-2">Status</div>
              <div className="text-gray-900">Stable</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="text-purple-600 font-semibold mb-2">Version</div>
              <div className="text-gray-900">1.6.0</div>
            </div>
          </div>
        </div>

        {/* Live Examples */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">Live Examples</h2>

          {/* Example 1: Basic with 1 Card */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              How-to Guide Example (Red-Black Title)
            </h3>
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <TitleCarouselCardsList
                title="¿Qué quieres hacer hoy?"
                titleStyle="red-black"
                cards={exampleCards}
                alignment="center"
                dots={true}
                arrows={false}
              />
            </div>
          </div>

          {/* Example 2: With Autoplay */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Step-by-Step Tutorial (With Autoplay)
            </h3>
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <TitleCarouselCardsList
                title="Guía Completa de Uso"
                titleStyle="red"
                cards={[
                  {
                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
                    imageAlt: "Paso 1",
                    title: "Paso 1: Registro",
                    listItems: [
                      "Descarga la aplicación desde tu tienda favorita.",
                      "Completa el formulario de registro con tus datos.",
                      "Verifica tu correo electrónico.",
                    ],
                  },
                  {
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
                    imageAlt: "Paso 2",
                    title: "Paso 2: Configuración Inicial",
                    listItems: [
                      "Personaliza tu perfil con una foto y nombre.",
                      "Configura tus preferencias de notificaciones.",
                      "Vincula tu método de pago preferido.",
                    ],
                  },
                  {
                    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&h=400&fit=crop",
                    imageAlt: "Paso 3",
                    title: "Paso 3: Primera Transacción",
                    listItems: [
                      "Explora las opciones disponibles en el menú.",
                      "Selecciona el servicio que deseas utilizar.",
                      "Completa tu primera transacción exitosamente.",
                    ],
                  },
                  {
                    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
                    imageAlt: "Paso 4",
                    title: "Paso 4: Disfruta del Servicio",
                    listItems: [
                      "Accede a todas las funcionalidades premium.",
                      "Participa en promociones exclusivas.",
                      "Recomienda la app y gana recompensas.",
                    ],
                  },
                ]}
                alignment="center"
                autoplay={true}
                autoplaySpeed={4000}
                dots={true}
                arrows={false}
              />
            </div>
          </div>

          {/* Example 3: With Arrows */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              With Navigation Arrows
            </h3>
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <TitleCarouselCardsList
                title="Aprende a Usar Nuestros Servicios"
                titleStyle="black"
                cards={exampleCards}
                alignment="center"
                dots={false}
                arrows={true}
              />
            </div>
          </div>

          {/* Example 4: Custom Background */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Custom Card Backgrounds
            </h3>
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <TitleCarouselCardsList
                title="Personaliza tu Experiencia"
                titleStyle="red-black"
                cards={[
                  {
                    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
                    imageAlt: "Card 1",
                    title: "Opción Premium",
                    listItems: [
                      "Acceso ilimitado a todos los servicios.",
                      "Soporte prioritario 24/7.",
                      "Sin anuncios publicitarios.",
                    ],
                    cardBackgroundColor: "#FFF5F5",
                  },
                  {
                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
                    imageAlt: "Card 2",
                    title: "Opción Estándar",
                    listItems: [
                      "Acceso a funciones básicas.",
                      "Soporte por correo electrónico.",
                      "Anuncios ocasionales.",
                    ],
                    cardBackgroundColor: "#EEF2FF",
                  },
                  {
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
                    imageAlt: "Card 3",
                    title: "Opción Básica",
                    listItems: [
                      "Funcionalidades esenciales incluidas.",
                      "Acceso a la comunidad de usuarios.",
                      "Actualizaciones regulares gratuitas.",
                    ],
                    cardBackgroundColor: "#F0FDF4",
                  },
                ]}
                alignment="center"
                dots={true}
                arrows={false}
              />
            </div>
          </div>

          {/* Example 5: Without Infinite Loop */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Without Infinite Loop (Has Beginning and End)
            </h3>
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <TitleCarouselCardsList
                title="Carousel con Inicio y Final"
                titleStyle="black"
                cards={[
                  {
                    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
                    imageAlt: "Primera tarjeta",
                    title: "Primera Tarjeta",
                    listItems: [
                      "Este es el inicio del carrusel.",
                      "Las flechas se deshabilitarán al llegar al final.",
                      "Útil para contenido secuencial.",
                    ],
                  },
                  {
                    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
                    imageAlt: "Segunda tarjeta",
                    title: "Segunda Tarjeta",
                    listItems: [
                      "Contenido estructurado paso a paso.",
                      "Navegación clara y predecible.",
                      "Experiencia de usuario mejorada.",
                    ],
                  },
                  {
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
                    imageAlt: "Tercera tarjeta",
                    title: "Tercera Tarjeta",
                    listItems: [
                      "Perfecto para tutoriales progresivos.",
                      "El usuario sabe cuándo ha visto todo.",
                      "Ideal para procesos de onboarding.",
                    ],
                  },
                  {
                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
                    imageAlt: "Última tarjeta",
                    title: "Última Tarjeta",
                    listItems: [
                      "Este es el final del carrusel.",
                      "La flecha derecha se deshabilitará aquí.",
                      "Completa visibilidad del contenido.",
                    ],
                  },
                ]}
                alignment="center"
                dots={true}
                arrows={true}
                infinite={false}
              />
            </div>
          </div>

          {/* Example 6: With Description Paragraphs */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              With Optional Description Paragraphs
            </h3>
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <TitleCarouselCardsList
                title="Nuestros Servicios Premium"
                titleStyle="red-black"
                cards={[
                  {
                    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
                    imageAlt: "Servicio Premium",
                    title: "Plan Premium Plus",
                    description: "El plan más completo para profesionales que buscan el máximo rendimiento. Incluye todas las funcionalidades avanzadas y soporte dedicado.",
                    listItems: [
                      "Acceso ilimitado a todas las herramientas premium.",
                      "Soporte técnico prioritario disponible 24/7.",
                      "Almacenamiento en la nube hasta 1TB.",
                      "Reportes y análisis avanzados en tiempo real.",
                    ],
                    cardBackgroundColor: "#FFF5F5",
                  },
                  {
                    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
                    imageAlt: "Servicio Empresarial",
                    title: "Plan Empresarial",
                    description: "Diseñado específicamente para equipos y empresas en crecimiento. Gestiona múltiples usuarios y proyectos con facilidad.",
                    listItems: [
                      "Gestión de equipos hasta 50 usuarios.",
                      "Colaboración en tiempo real entre miembros.",
                      "Integraciones con herramientas empresariales.",
                      "Panel de administración avanzado.",
                    ],
                    cardBackgroundColor: "#EEF2FF",
                  },
                  {
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
                    imageAlt: "Servicio Starter",
                    title: "Plan Starter",
                    description: "Perfecto para comenzar tu viaje. Incluye todas las funciones básicas que necesitas para empezar con el pie derecho.",
                    listItems: [
                      "Acceso a funcionalidades esenciales.",
                      "Hasta 3 proyectos activos simultáneos.",
                      "5GB de almacenamiento en la nube.",
                      "Actualizaciones automáticas incluidas.",
                    ],
                    cardBackgroundColor: "#F0FDF4",
                  },
                ]}
                alignment="center"
                dots={true}
                arrows={false}
              />
            </div>
          </div>
        </div>

        {/* Props Documentation */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">Props</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold">Prop</th>
                  <th className="text-left py-3 px-4 font-semibold">Type</th>
                  <th className="text-left py-3 px-4 font-semibold">Default</th>
                  <th className="text-left py-3 px-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">title</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">string</td>
                  <td className="py-3 px-4 font-mono text-sm">-</td>
                  <td className="py-3 px-4 text-sm">The main title text (required)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">titleStyle</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">&quot;red&quot; | &quot;black&quot; | &quot;red-black&quot;</td>
                  <td className="py-3 px-4 font-mono text-sm">-</td>
                  <td className="py-3 px-4 text-sm">Style of the title (required)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">cards</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">CarouselListCard[]</td>
                  <td className="py-3 px-4 font-mono text-sm">-</td>
                  <td className="py-3 px-4 text-sm">Array of card objects (required)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">alignment</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">&quot;left&quot; | &quot;center&quot; | &quot;right&quot;</td>
                  <td className="py-3 px-4 font-mono text-sm">&quot;center&quot;</td>
                  <td className="py-3 px-4 text-sm">Horizontal alignment of content</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">backgroundColor</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">string</td>
                  <td className="py-3 px-4 font-mono text-sm">&quot;#ffffff&quot;</td>
                  <td className="py-3 px-4 text-sm">Section background color</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">slidesToShow</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">number</td>
                  <td className="py-3 px-4 font-mono text-sm">1</td>
                  <td className="py-3 px-4 text-sm">Number of cards visible on desktop</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">autoplay</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">boolean</td>
                  <td className="py-3 px-4 font-mono text-sm">false</td>
                  <td className="py-3 px-4 text-sm">Enable carousel autoplay</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">autoplaySpeed</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">number</td>
                  <td className="py-3 px-4 font-mono text-sm">3000</td>
                  <td className="py-3 px-4 text-sm">Autoplay speed in milliseconds</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">dots</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">boolean</td>
                  <td className="py-3 px-4 font-mono text-sm">true</td>
                  <td className="py-3 px-4 text-sm">Show dot indicators</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">arrows</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">boolean</td>
                  <td className="py-3 px-4 font-mono text-sm">false</td>
                  <td className="py-3 px-4 text-sm">Show navigation arrows</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">infinite</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">boolean</td>
                  <td className="py-3 px-4 font-mono text-sm">true</td>
                  <td className="py-3 px-4 text-sm">Enable infinite loop mode</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">CarouselListCard Interface</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold">Property</th>
                    <th className="text-left py-3 px-4 font-semibold">Type</th>
                    <th className="text-left py-3 px-4 font-semibold">Default</th>
                    <th className="text-left py-3 px-4 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 px-4 font-mono text-sm">image</td>
                    <td className="py-3 px-4 font-mono text-sm text-blue-600">string</td>
                    <td className="py-3 px-4 font-mono text-sm">-</td>
                    <td className="py-3 px-4 text-sm">Image URL (required)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-mono text-sm">imageAlt</td>
                    <td className="py-3 px-4 font-mono text-sm text-blue-600">string</td>
                    <td className="py-3 px-4 font-mono text-sm">title</td>
                    <td className="py-3 px-4 text-sm">Alternative text for the image</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-mono text-sm">title</td>
                    <td className="py-3 px-4 font-mono text-sm text-blue-600">string</td>
                    <td className="py-3 px-4 font-mono text-sm">-</td>
                    <td className="py-3 px-4 text-sm">Card title (required)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-mono text-sm">description</td>
                    <td className="py-3 px-4 font-mono text-sm text-blue-600">string</td>
                    <td className="py-3 px-4 font-mono text-sm">-</td>
                    <td className="py-3 px-4 text-sm">Optional paragraph text between title and list</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-mono text-sm">listItems</td>
                    <td className="py-3 px-4 font-mono text-sm text-blue-600">string[]</td>
                    <td className="py-3 px-4 font-mono text-sm">-</td>
                    <td className="py-3 px-4 text-sm">Array of list items (required)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-mono text-sm">cardAlignment</td>
                    <td className="py-3 px-4 font-mono text-sm text-blue-600">&quot;left&quot; | &quot;center&quot; | &quot;right&quot;</td>
                    <td className="py-3 px-4 font-mono text-sm">&quot;center&quot;</td>
                    <td className="py-3 px-4 text-sm">Content alignment for this card</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-mono text-sm">cardBackgroundColor</td>
                    <td className="py-3 px-4 font-mono text-sm text-blue-600">string</td>
                    <td className="py-3 px-4 font-mono text-sm">&quot;#ffffff&quot;</td>
                    <td className="py-3 px-4 text-sm">Optional background color override for this card</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Installation & Usage */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">Installation & Usage</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">1. Install the package</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>npm install @brangycastro/ui-components react-slick</code>
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">2. Import the component and styles</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`import { TitleCarouselCardsList } from '@brangycastro/ui-components';
import '@brangycastro/ui-components/style.css';`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">3. Use the component</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`<TitleCarouselCardsList
  title="¿Qué quieres hacer hoy?"
  titleStyle="red-black"
  cards={[
    {
      image: "https://example.com/image.jpg",
      imageAlt: "Descriptive text",
      title: "Escanea y haz cashout fácilmente",
      description: "Convierte tus tickets en efectivo de manera rápida y segura.", // Optional
      listItems: [
        "Inicia sesión en Mi Billetera AT.",
        "Abre el menú y presiona 'Escanear'.",
        "Escanea el código de barras.",
        "¡Listo! Presiona 'Cobrar'.",
      ],
      cardBackgroundColor: "#FFF5F5", // Optional
      cardAlignment: "center", // Optional: "left" | "center" | "right"
    },
    // ... more cards
  ]}
  alignment="center"
  slidesToShow={3}
  dots={true}
  arrows={false}
  infinite={true}
/>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Responsive Design</h3>
                <p className="text-gray-600 text-sm">Adapts from 3 cards on desktop to 1 on mobile</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Image Support</h3>
                <p className="text-gray-600 text-sm">Beautiful images with hover effects</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Numbered Lists</h3>
                <p className="text-gray-600 text-sm">Styled numbered lists with custom counters</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Performance Optimized</h3>
                <p className="text-gray-600 text-sm">Built with react-slick for smooth animations</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">SSR Safe</h3>
                <p className="text-gray-600 text-sm">Works perfectly with Next.js and server-side rendering</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Fully Customizable</h3>
                <p className="text-gray-600 text-sm">Control colors, alignment, and card backgrounds</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t bg-white">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-gray-600">
            © 2025 FromSolvers. Modern UI components for React.
          </p>
        </div>
      </footer>
    </div>
  );
}
