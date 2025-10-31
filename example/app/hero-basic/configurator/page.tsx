"use client";

import { useState } from "react";
import Link from "next/link";
import { HeroBasic } from "@brangycastro/ui-components";
import { HeroBasicForm, HeroBasicConfig } from "@/components/HeroBasicForm";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const defaultConfig: HeroBasicConfig = {
  banners: [
    {
      desktopImage: "/banner-1-desktop.svg",
      mobileImage: "/banner-1-mobile.svg",
      alt: "Banner 1 - Ejemplo",
      link: "https://example.com",
    },
    {
      desktopImage: "/banner-2-desktop.svg",
      mobileImage: "/banner-2-mobile.svg",
      alt: "Banner 2 - Ejemplo",
      link: "https://example.com",
    },
    {
      desktopImage: "/banner-3-desktop.svg",
      mobileImage: "/banner-3-mobile.svg",
      alt: "Banner 3 - Ejemplo",
    },
  ],
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: false,
  arrows: false,
  dots: true,
  showPlayPause: true,
};

export default function HeroBasicConfiguratorPage() {
  const [config, setConfig] = useState<HeroBasicConfig>(defaultConfig);

  const handleConfigChange = (newConfig: HeroBasicConfig) => {
    setConfig(newConfig);
  };

  // Filtrar banners que tengan al menos la imagen desktop y el alt text
  const validBanners = config.banners.filter(
    (banner) => banner.desktopImage && banner.alt
  );

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
              <p className="text-sm text-gray-600 mt-1">HeroBasic Component</p>
            </div>
            <Link
              href="/hero-basic"
              className="text-sm text-gray-600 hover:text-gray-900 underline"
            >
              ← Back to Documentation
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div>
            <HeroBasicForm
              onConfigChange={handleConfigChange}
              initialConfig={defaultConfig}
            />
          </div>

          {/* Real-time Preview */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                <h3 className="text-xl font-bold">Real-Time Preview</h3>
              </div>

              <div className="border-2 border-gray-200 rounded-lg bg-gray-50 overflow-hidden">
                {validBanners.length > 0 ? (
                  <HeroBasic
                    banners={validBanners}
                    autoplay={config.autoplay}
                    autoplaySpeed={config.autoplaySpeed}
                    pauseOnHover={config.pauseOnHover}
                    arrows={config.arrows}
                    dots={config.dots}
                    showPlayPause={config.showPlayPause}
                  />
                ) : (
                  <div className="text-center py-12 text-gray-400">
                    <svg
                      className="mx-auto h-12 w-12 mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-lg font-medium">
                      Complete the form to see the preview
                    </p>
                  </div>
                )}
              </div>

              {/* Export Code */}
              {validBanners.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-sm font-semibold mb-2 text-gray-700">
                    Code to use:
                  </h4>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
                    <code>
                      {`import { HeroBasic } from '@brangycastro/ui-components';
import '@brangycastro/ui-components/style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const banners = ${JSON.stringify(validBanners, null, 2)};

<HeroBasic
  banners={banners}
  autoplay={${config.autoplay}}
  autoplaySpeed={${config.autoplaySpeed}}
  pauseOnHover={${config.pauseOnHover}}
  arrows={${config.arrows}}
  dots={${config.dots}}
  showPlayPause={${config.showPlayPause}}
/>`}
                    </code>
                  </pre>
                </div>
              )}

              {/* JSON Configuration */}
              {validBanners.length > 0 && (
                <div className="mt-4">
                  <details className="cursor-pointer">
                    <summary className="text-sm font-semibold text-gray-700 hover:text-gray-900">
                      View JSON configuration
                    </summary>
                    <pre className="mt-2 bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
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
