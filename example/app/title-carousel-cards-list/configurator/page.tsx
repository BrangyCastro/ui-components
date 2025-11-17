"use client";

import { useState } from "react";
import Link from "next/link";
import { TitleCarouselCardsList } from "@brangycastro/ui-components";
import "@brangycastro/ui-components/style.css";
import {
  TitleCarouselCardsListForm,
  TitleCarouselCardsListConfig,
} from "@/components/TitleCarouselCardsListForm";

export default function ConfiguratorPage() {
  const [config, setConfig] = useState<TitleCarouselCardsListConfig>({
    title: "¿Qué quieres hacer hoy?",
    titleStyle: "red-black",
    cards: [
      {
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        imageAlt: "Escanea y haz cashout",
        title: "Escanea y haz cashout fácilmente",
        description: "",
        listItems: [
          "Inicia sesión en Mi Billetera AT.",
          "Abre el menú y presiona \"Escanear\" para abrir tu cámara.",
          "Escanea el código de barras de tu ticket.",
          "¡Listo! Presiona \"Cobrar\" y olvídate de las colas.",
        ],
        cardBackgroundColor: "#ffffff",
        cardAlignment: "left",
      },
      {
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
        imageAlt: "Recarga tu cuenta",
        title: "Recarga tu cuenta al instante",
        description: "",
        listItems: [
          "Accede a tu cuenta desde cualquier dispositivo.",
          "Selecciona la opción de recarga en el menú principal.",
          "Elige el método de pago que prefieras.",
          "Confirma la transacción y recibe tu saldo inmediatamente.",
        ],
        cardBackgroundColor: "#ffffff",
        cardAlignment: "left",
      },
      {
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        imageAlt: "Juega y gana",
        title: "Juega y gana premios increíbles",
        description: "",
        listItems: [
          "Explora nuestra amplia selección de juegos.",
          "Elige tu juego favorito y comienza a jugar.",
          "Acumula puntos con cada partida ganada.",
          "Canjea tus puntos por premios exclusivos.",
        ],
        cardBackgroundColor: "#ffffff",
        cardAlignment: "left",
      },
    ],
    alignment: "center",
    backgroundColor: "#ffffff",
    autoplay: false,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    infinite: true,
  });

  const handleConfigChange = (newConfig: TitleCarouselCardsListConfig) => {
    setConfig(newConfig);
  };

  const escapeValue = (value: string) =>
    value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');

  const generateCode = () => {
    const cardsCode = config.cards
      .map((card) => {
        const listItemsCode = card.listItems
          .map((item) => `        "${escapeValue(item)}"`)
          .join(",\n");

        const descriptionLine = card.description
          ? `      description: "${escapeValue(card.description)}",\n`
          : "";

        return `    {
      image: "${escapeValue(card.image)}",
      imageAlt: "${escapeValue(card.imageAlt)}",
      title: "${escapeValue(card.title)}",
${descriptionLine}      listItems: [
${listItemsCode}
      ],
      cardAlignment: "${card.cardAlignment}",
      cardBackgroundColor: "${card.cardBackgroundColor}"
    }`;
      })
      .join(",\n");

    return `<TitleCarouselCardsList
  title="${config.title}"
  titleStyle="${config.titleStyle}"
  cards={[
${cardsCode}
  ]}
  alignment="${config.alignment}"
  backgroundColor="${config.backgroundColor}"
  autoplay={${config.autoplay}}
  autoplaySpeed={${config.autoplaySpeed}}
  dots={${config.dots}}
  arrows={${config.arrows}}
  slidesToShow={${config.slidesToShow}}
  infinite={${config.infinite}}
/>`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateCode());
    alert("¡Código copiado al portapapeles!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="border-b bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                Component Configurator
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                TitleCarouselCardsList Component
              </p>
            </div>
            <Link
              href="/title-carousel-cards-list"
              className="text-sm text-gray-600 hover:text-gray-900 underline"
            >
              ← Back to Documentation
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="space-y-8">
          {/* Form */}
          <div>
            <TitleCarouselCardsListForm
              onConfigChange={handleConfigChange}
              initialConfig={config}
            />
          </div>

          {/* Real-time Preview */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                <h3 className="text-xl font-bold">Real-Time Preview</h3>
              </div>

              <div className="border-2 border-gray-200 rounded-lg p-6 bg-gray-50">
                {config.title && config.cards.length > 0 ? (
                  <TitleCarouselCardsList
                    title={config.title}
                    titleStyle={config.titleStyle}
                    cards={config.cards}
                    alignment={config.alignment}
                    backgroundColor={config.backgroundColor}
                    autoplay={config.autoplay}
                    autoplaySpeed={config.autoplaySpeed}
                    dots={config.dots}
                    arrows={config.arrows}
                    slidesToShow={config.slidesToShow}
                    infinite={config.infinite}
                  />
                ) : (
                  <div className="text-center py-12 text-gray-400">
                    Configura tu componente para ver el preview
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Code Output */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Generated Code</h3>
                <button
                  onClick={copyToClipboard}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors shadow-md"
                >
                  Copy Code
                </button>
              </div>

              <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                <code>{generateCode()}</code>
              </pre>
            </div>
          </div>

          {/* Usage Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              How to use this code:
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-blue-800">
              <li>
                Make sure you have installed{" "}
                <code className="bg-blue-100 px-2 py-1 rounded">
                  @brangycastro/ui-components
                </code>{" "}
                and{" "}
                <code className="bg-blue-100 px-2 py-1 rounded">
                  react-slick
                </code>
              </li>
              <li>
                Import the component and styles in your file:
                <pre className="bg-blue-100 p-3 rounded mt-2 text-sm overflow-x-auto">
                  <code>
                    {`import { TitleCarouselCardsList } from '@brangycastro/ui-components';\nimport '@brangycastro/ui-components/style.css';`}
                  </code>
                </pre>
              </li>
              <li>Copy and paste the generated code above into your component</li>
              <li>
                Customize the images, text, and list items according to your needs
              </li>
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
}
