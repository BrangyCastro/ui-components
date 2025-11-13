"use client";

import Link from "next/link";
import { TitleCarouselCardsCTA } from "@brangycastro/ui-components";
import "@brangycastro/ui-components/style.css";

const VideoIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
    <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <rect x="4" y="5" width="4" height="3" fill="currentColor"/>
    <rect x="10" y="5" width="4" height="3" fill="currentColor"/>
    <rect x="16" y="5" width="4" height="3" fill="currentColor"/>
    <rect x="4" y="10" width="4" height="3" fill="currentColor"/>
    <rect x="10" y="10" width="4" height="3" fill="currentColor"/>
    <rect x="16" y="10" width="4" height="3" fill="currentColor"/>
    <path d="M10 15l5 3-5 3v-6z" fill="currentColor"/>
  </svg>
);

export default function TitleCarouselCardsCTAPage() {
  const exampleCards = [
    {
      icon: <VideoIcon />,
      title: "¿Cómo me registro en Mi Billetera AT?",
      description:
        "Regístrate en Mi Billetera AT para disfrutar de los juegos virtuales y conocer cómo estamos mejorando tu experiencia en tienda.",
      buttonText: "Ver video",
      buttonLink: "#",
    },
    {
      icon: <VideoIcon />,
      title: "¿Cómo recargo Mi Billetera AT?",
      description:
        "Es momento de recargar el saldo. Puedes hacerlo en cualquier tienda de Apuesta Total o desde nuestro canal de Teleservicios.",
      buttonText: "Ver video",
      buttonLink: "#",
    },
    {
      icon: <VideoIcon />,
      title: "¿Cómo jugar ruleta en Mi Billetera AT?",
      description:
        "Gracias a Mi Billetera AT, la ruleta de las tiendas de Apuesta Total ahora está disponible las 24 horas en tu celular.",
      buttonText: "Ver video",
      buttonLink: "#",
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
                TitleCarouselCardsCTA
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Responsive carousel with cards, title, and call-to-action buttons
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
            href="/title-carousel-cards-cta/configurator"
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
            The <code className="bg-gray-100 px-2 py-1 rounded">TitleCarouselCardsCTA</code> component is a powerful marketing component that combines a stylized title with a responsive carousel of cards. Each card can include an icon, title, description, and call-to-action button. Perfect for FAQ sections, feature showcases, and help centers.
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
              <div className="text-gray-900">1.5.0</div>
            </div>
          </div>
        </div>

        {/* Live Examples */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">Live Examples</h2>

          {/* Example 1: Full Featured */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Help Center Example (3 Cards, Red-Black Title)
            </h3>
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <TitleCarouselCardsCTA
                title="¿Necesitas ayuda?"
                titleStyle="red-black"
                cards={exampleCards}
                alignment="center"
                slidesToShow={3}
                dots={true}
                arrows={false}
              />
            </div>
          </div>

          {/* Example 2: 4 Cards with Autoplay */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Features Showcase (4 Cards, Autoplay)
            </h3>
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <TitleCarouselCardsCTA
                title="Nuestras Características"
                titleStyle="red"
                cards={[
                  {
                    icon: <VideoIcon />,
                    title: "Rápido y Seguro",
                    description: "Transacciones instantáneas con máxima seguridad.",
                    buttonText: "Conoce más",
                    buttonLink: "#",
                  },
                  {
                    icon: <VideoIcon />,
                    title: "24/7 Disponible",
                    description: "Accede a tus servicios en cualquier momento.",
                    buttonText: "Conoce más",
                    buttonLink: "#",
                  },
                  {
                    icon: <VideoIcon />,
                    title: "Soporte Dedicado",
                    description: "Nuestro equipo siempre listo para ayudarte.",
                    buttonText: "Conoce más",
                    buttonLink: "#",
                  },
                  {
                    icon: <VideoIcon />,
                    title: "Fácil de Usar",
                    description: "Interfaz intuitiva diseñada para todos.",
                    buttonText: "Conoce más",
                    buttonLink: "#",
                  },
                ]}
                alignment="center"
                autoplay={true}
                autoplaySpeed={4000}
                slidesToShow={4}
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
              <TitleCarouselCardsCTA
                title="Explora Nuestros Servicios"
                titleStyle="black"
                cards={exampleCards}
                alignment="center"
                slidesToShow={3}
                dots={false}
                arrows={true}
              />
            </div>
          </div>

          {/* Example 4: Cards Without Button */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Information Cards (Without CTA Button)
            </h3>
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <TitleCarouselCardsCTA
                title="Beneficios de Nuestro Servicio"
                titleStyle="red-black"
                cards={[
                  {
                    icon: <VideoIcon />,
                    title: "Acceso Inmediato",
                    description: "Disfruta de acceso instantáneo a todos nuestros servicios desde cualquier dispositivo. Sin esperas, sin complicaciones.",
                    buttonText: "",
                    buttonLink: "",
                  },
                  {
                    icon: <VideoIcon />,
                    title: "Seguridad Garantizada",
                    description: "Protegemos tu información con los más altos estándares de seguridad. Tu privacidad es nuestra prioridad número uno.",
                    buttonText: "",
                    buttonLink: "",
                  },
                  {
                    icon: <VideoIcon />,
                    title: "Soporte Premium",
                    description: "Nuestro equipo de expertos está disponible las 24 horas del día para resolver cualquier duda o problema que puedas tener.",
                    buttonText: "",
                    buttonLink: "",
                  },
                ]}
                alignment="center"
                slidesToShow={3}
                dots={true}
                arrows={false}
              />
            </div>
          </div>

          {/* Example 5: 6 Cards with Slider */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Carousel with 6 Cards (Slider Demo)
            </h3>
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <TitleCarouselCardsCTA
                title="Descubre Todo lo que Ofrecemos"
                titleStyle="red"
                cards={[
                  {
                    icon: <VideoIcon />,
                    title: "Tutorial de Registro",
                    description: "Aprende paso a paso cómo crear tu cuenta y comenzar a disfrutar de nuestros servicios en minutos.",
                    buttonText: "Ver tutorial",
                    buttonLink: "#",
                  },
                  {
                    icon: <VideoIcon />,
                    title: "Gestión de Saldo",
                    description: "Descubre cómo recargar, transferir y administrar tu saldo de manera fácil y segura desde cualquier lugar.",
                    buttonText: "Aprender más",
                    buttonLink: "#",
                  },
                  {
                    icon: <VideoIcon />,
                    title: "Juegos y Entretenimiento",
                    description: "Explora nuestra amplia selección de juegos disponibles 24/7 directamente desde tu dispositivo móvil.",
                    buttonText: "Explorar juegos",
                    buttonLink: "#",
                  },
                  {
                    icon: <VideoIcon />,
                    title: "Promociones Exclusivas",
                    description: "No te pierdas nuestras ofertas especiales y promociones exclusivas diseñadas especialmente para ti.",
                    buttonText: "Ver ofertas",
                    buttonLink: "#",
                  },
                  {
                    icon: <VideoIcon />,
                    title: "Programa de Recompensas",
                    description: "Acumula puntos con cada transacción y canjéalos por increíbles premios y beneficios únicos.",
                    buttonText: "Conocer más",
                    buttonLink: "#",
                  },
                  {
                    icon: <VideoIcon />,
                    title: "Centro de Ayuda",
                    description: "Encuentra respuestas a tus preguntas frecuentes y accede a guías detalladas en nuestro centro de ayuda.",
                    buttonText: "Ir al centro",
                    buttonLink: "#",
                  },
                ]}
                alignment="center"
                autoplay={true}
                autoplaySpeed={3500}
                slidesToShow={3}
                dots={true}
                arrows={true}
              />
            </div>
          </div>

          {/* Example 6: Independent Card Alignment */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Independent Card Alignment (Each Card with Different Alignment)
            </h3>
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <TitleCarouselCardsCTA
                title="Alineación Personalizada por Tarjeta"
                titleStyle="red-black"
                cards={[
                  {
                    icon: <VideoIcon />,
                    title: "Alineada a la Izquierda",
                    description: "Esta tarjeta tiene todo su contenido alineado a la izquierda, incluyendo el ícono, título, descripción y botón.",
                    buttonText: "Ver más",
                    buttonLink: "#",
                    cardAlignment: "left",
                  },
                  {
                    icon: <VideoIcon />,
                    title: "Alineada al Centro",
                    description: "Esta tarjeta está centrada, que es el comportamiento por defecto. Todo su contenido está alineado al centro.",
                    buttonText: "Ver más",
                    buttonLink: "#",
                    cardAlignment: "center",
                  },
                  {
                    icon: <VideoIcon />,
                    title: "Alineada a la Derecha",
                    description: "Esta tarjeta tiene todo su contenido alineado a la derecha, creando una apariencia visual diferente.",
                    buttonText: "Ver más",
                    buttonLink: "#",
                    cardAlignment: "right",
                  },
                ]}
                alignment="center"
                slidesToShow={3}
                dots={true}
                arrows={false}
              />
            </div>
          </div>

          {/* Example 7: No Infinite Loop */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Without Infinite Loop (Has Beginning and End)
            </h3>
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <TitleCarouselCardsCTA
                title="Carousel con Inicio y Final"
                titleStyle="black"
                cards={[
                  {
                    icon: <VideoIcon />,
                    title: "Primera Tarjeta",
                    description: "Esta es la primera tarjeta del carrusel. Al llegar al final, no volverá al inicio automáticamente.",
                    buttonText: "Ver más",
                    buttonLink: "#",
                  },
                  {
                    icon: <VideoIcon />,
                    title: "Segunda Tarjeta",
                    description: "Con infinite=false, el carrusel tiene un inicio y un final definidos. Las flechas se deshabilitarán al llegar a los extremos.",
                    buttonText: "Ver más",
                    buttonLink: "#",
                  },
                  {
                    icon: <VideoIcon />,
                    title: "Tercera Tarjeta",
                    description: "Útil cuando quieres que los usuarios sepan cuándo han visto todo el contenido disponible.",
                    buttonText: "Ver más",
                    buttonLink: "#",
                  },
                  {
                    icon: <VideoIcon />,
                    title: "Última Tarjeta",
                    description: "Esta es la última tarjeta. Las flechas de navegación se comportarán de acuerdo al límite del contenido.",
                    buttonText: "Ver más",
                    buttonLink: "#",
                  },
                ]}
                alignment="center"
                slidesToShow={3}
                dots={true}
                arrows={true}
                infinite={false}
              />
            </div>
          </div>

          {/* Example 8: Different Button Colors per Card */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Custom Button Colors per Card (Independent Styling)
            </h3>
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <TitleCarouselCardsCTA
                title="Botones con Colores Personalizados"
                titleStyle="red-black"
                cards={[
                  {
                    icon: <VideoIcon />,
                    title: "Botón Rojo",
                    description: "Esta tarjeta tiene un botón con estilo rojo personalizado, perfecto para llamadas a la acción importantes.",
                    buttonText: "Ver ahora",
                    buttonLink: "#",
                    buttonTextColor: "#DC2626",
                    buttonBorderColor: "#DC2626",
                  },
                  {
                    icon: <VideoIcon />,
                    title: "Botón Azul",
                    description: "Un botón azul para acciones informativas o de navegación, transmitiendo confianza y estabilidad.",
                    buttonText: "Explorar",
                    buttonLink: "#",
                    buttonTextColor: "#2563EB",
                    buttonBorderColor: "#2563EB",
                  },
                  {
                    icon: <VideoIcon />,
                    title: "Botón Verde",
                    description: "El color verde es ideal para acciones positivas como confirmar, continuar o acceder a nuevas funcionalidades.",
                    buttonText: "Comenzar",
                    buttonLink: "#",
                    buttonTextColor: "#16A34A",
                    buttonBorderColor: "#16A34A",
                  },
                  {
                    icon: <VideoIcon />,
                    title: "Botón Púrpura",
                    description: "Un toque de creatividad con púrpura, perfecto para destacar contenido premium o especial.",
                    buttonText: "Descubrir",
                    buttonLink: "#",
                    buttonTextColor: "#9333EA",
                    buttonBorderColor: "#9333EA",
                  },
                ]}
                alignment="center"
                slidesToShow={3}
                dots={true}
                arrows={true}
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
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">CarouselCard[]</td>
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
                  <td className="py-3 px-4 font-mono text-sm">3</td>
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
            <h3 className="text-xl font-bold mb-4">CarouselCard Interface</h3>
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
                    <td className="py-3 px-4 font-mono text-sm">icon</td>
                    <td className="py-3 px-4 font-mono text-sm text-blue-600">React.ReactNode</td>
                    <td className="py-3 px-4 font-mono text-sm">undefined</td>
                    <td className="py-3 px-4 text-sm">Optional icon element</td>
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
                    <td className="py-3 px-4 text-sm">Card description (required)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-mono text-sm">buttonText</td>
                    <td className="py-3 px-4 font-mono text-sm text-blue-600">string</td>
                    <td className="py-3 px-4 font-mono text-sm">-</td>
                    <td className="py-3 px-4 text-sm">CTA button text (required, use empty string to hide button)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-mono text-sm">buttonLink</td>
                    <td className="py-3 px-4 font-mono text-sm text-blue-600">string</td>
                    <td className="py-3 px-4 font-mono text-sm">undefined</td>
                    <td className="py-3 px-4 text-sm">Optional button URL</td>
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
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">buttonTextColor</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">string</td>
                  <td className="py-3 px-4 font-mono text-sm">&quot;#FB3333&quot;</td>
                  <td className="py-3 px-4 text-sm">Button text color (hex, rgb, etc.) for this card; defaults to the brand red</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">buttonBorderColor</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">string</td>
                  <td className="py-3 px-4 font-mono text-sm">&quot;#FB3333&quot;</td>
                  <td className="py-3 px-4 text-sm">Button border color (hex, rgb, etc.) for this card; defaults to the brand red</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">openInNewTab</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">boolean</td>
                  <td className="py-3 px-4 font-mono text-sm">true</td>
                  <td className="py-3 px-4 text-sm">Whether to open button link in a new tab</td>
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
                <code>{`import { TitleCarouselCardsCTA } from '@brangycastro/ui-components';
import '@brangycastro/ui-components/style.css';`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">3. Use the component</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`const VideoIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
    {/* Your icon SVG */}
  </svg>
);

<TitleCarouselCardsCTA
  title="¿Necesitas ayuda?"
  titleStyle="red-black"
  cards={[
    {
      icon: <VideoIcon />,
      title: "¿Cómo me registro?",
      description: "Aprende a registrarte en nuestra plataforma.",
      buttonText: "Ver video",
      buttonLink: "#",
      cardBackgroundColor: "#FFF5F5", // Optional background per card
      cardAlignment: "center", // Optional: "left" | "center" | "right"
      buttonTextColor: "#DC2626", // Optional: custom button color
      buttonBorderColor: "#DC2626", // Optional: custom border color
      openInNewTab: true // Optional: open link in new tab (default: true)
    },
    {
      icon: <VideoIcon />,
      title: "Gestión de cuenta",
      description: "Administra tu cuenta fácilmente.",
      buttonText: "Ver más",
      buttonLink: "#",
      cardBackgroundColor: "#EEF2FF",
      cardAlignment: "left", // Each card can have independent alignment
      buttonTextColor: "#2563EB", // Each card can have its own colors
      buttonBorderColor: "#2563EB",
      openInNewTab: false // This card opens in same tab
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
                <h3 className="font-semibold mb-1">Responsive Carousel</h3>
                <p className="text-gray-600 text-sm">Adapts from 3 cards on desktop to 1 on mobile</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Fully Customizable</h3>
                <p className="text-gray-600 text-sm">Control colors, alignment, icons, and behavior</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Independent Card Alignment</h3>
                <p className="text-gray-600 text-sm">Each card can have its own alignment (left, center, right)</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Consistent Card Heights</h3>
                <p className="text-gray-600 text-sm">Text limited to 2 lines (title) and 4 lines (description) for uniform appearance</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Per-Card Button Colors</h3>
                <p className="text-gray-600 text-sm">Each card can have its own button text and border colors for dynamic styling</p>
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
