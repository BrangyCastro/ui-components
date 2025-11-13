"use client";

import { useState } from "react";
import Link from "next/link";
import { TitleCarouselCardsCTA } from "@brangycastro/ui-components";
import "@brangycastro/ui-components/style.css";
import {
  TitleCarouselCardsCTAForm,
  TitleCarouselCardsCTAConfig,
} from "@/components/TitleCarouselCardsCTAForm";

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

const getIconComponent = (iconName: string) => {
  // For now, we'll just return the VideoIcon for all icons
  // You can expand this to return different icons based on iconName
  return <VideoIcon />;
};

export default function ConfiguratorPage() {
  const [config, setConfig] = useState<TitleCarouselCardsCTAConfig>({
    title: "Bienvenidos a Mi Billetera AT",
    titleStyle: "red-black",
    cards: [
      {
        icon: "video",
        title: "¿Cómo me registro en Mi Billetera AT?",
        description:
          "Regístrate en Mi Billetera AT para disfrutar de los juegos virtuales y conocer cómo estamos mejorando tu experiencia en tienda.",
        buttonText: "Ver video",
        buttonLink: "#",
        cardBackgroundColor: "#ffffff",
        buttonTextColor: "#FB3333",
        buttonBorderColor: "#FB3333",
        openInNewTab: true,
        cardAlignment: "center",
      },
      {
        icon: "video",
        title: "¿Cómo recargo Mi Billetera AT?",
        description:
          "Es momento de recargar el saldo. Puedes hacerlo en cualquier tienda de Apuesta Total o desde nuestro canal de Teleservicios.",
        buttonText: "Ver video",
        buttonLink: "#",
        cardBackgroundColor: "#ffffff",
        buttonTextColor: "#FB3333",
        buttonBorderColor: "#FB3333",
        openInNewTab: true,
        cardAlignment: "center",
      },
      {
        icon: "video",
        title: "¿Cómo jugar ruleta en Mi Billetera AT?",
        description:
          "Gracias a Mi Billetera AT, la ruleta de las tiendas de Apuesta Total ahora está disponible las 24 horas en tu celular.",
        buttonText: "Ver video",
        buttonLink: "#",
        cardBackgroundColor: "#ffffff",
        buttonTextColor: "#FB3333",
        buttonBorderColor: "#FB3333",
        openInNewTab: true,
        cardAlignment: "center",
      },
    ],
    alignment: "center",
    backgroundColor: "#ffffff",
    autoplay: false,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    slidesToShow: 3,
    infinite: true,
  });

  const handleConfigChange = (newConfig: TitleCarouselCardsCTAConfig) => {
    setConfig(newConfig);
  };

  // Convert config cards to component cards
  const componentCards = config.cards.map((card) => ({
    icon: getIconComponent(card.icon),
    title: card.title,
    description: card.description,
    buttonText: card.buttonText,
    buttonLink: card.buttonLink,
    cardAlignment: card.cardAlignment,
    cardBackgroundColor: card.cardBackgroundColor,
    buttonTextColor: card.buttonTextColor,
    buttonBorderColor: card.buttonBorderColor,
    openInNewTab: card.openInNewTab,
  }));

  const escapeValue = (value: string) =>
    value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');

  const generateCode = () => {
    const cardsCode = config.cards
      .map((card) => {
        return `    {
      icon: <VideoIcon />,
      title: "${escapeValue(card.title)}",
      description: "${escapeValue(card.description)}",
      buttonText: "${escapeValue(card.buttonText)}",
      buttonLink: "${escapeValue(card.buttonLink)}",
      cardAlignment: "${card.cardAlignment}",
      cardBackgroundColor: "${card.cardBackgroundColor}",
      buttonTextColor: "${card.buttonTextColor}",
      buttonBorderColor: "${card.buttonBorderColor}",
      openInNewTab: ${card.openInNewTab}
    }`;
      })
      .join(",\n");

    return `<TitleCarouselCardsCTA
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
                TitleCarouselCardsCTA Component
              </p>
            </div>
            <Link
              href="/title-carousel-cards-cta"
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
            <TitleCarouselCardsCTAForm
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
                  <TitleCarouselCardsCTA
                    title={config.title}
                    titleStyle={config.titleStyle}
                    cards={componentCards}
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
                    <svg
                      className="mx-auto h-12 w-12 mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                      />
                    </svg>
                    <p className="text-lg font-medium">
                      Complete the form to see the preview
                    </p>
                  </div>
                )}
              </div>

              {/* Export Code */}
              {config.title && config.cards.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-sm font-semibold mb-2 text-gray-700">
                    Code to use:
                  </h4>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs max-h-96 overflow-y-auto">
                    <code>{generateCode()}</code>
                  </pre>
                </div>
              )}

              {/* JSON Configuration */}
              {config.title && config.cards.length > 0 && (
                <div className="mt-4">
                  <details className="cursor-pointer">
                    <summary className="text-sm font-semibold text-gray-700 hover:text-gray-900">
                      View JSON configuration
                    </summary>
                    <pre className="mt-2 bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs max-h-64 overflow-y-auto">
                      <code>{JSON.stringify(config, null, 2)}</code>
                    </pre>
                  </details>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
