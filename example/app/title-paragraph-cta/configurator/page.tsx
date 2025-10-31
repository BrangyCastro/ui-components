"use client";

import { useState } from "react";
import Link from "next/link";
import { TitleParagraphCTA } from "@brangycastro/ui-components";
import "@brangycastro/ui-components/style.css";
import {
  TitleParagraphCTAForm,
  TitleParagraphCTAConfig,
} from "@/components/TitleParagraphCTAForm";

export default function ConfiguratorPage() {
  const [config, setConfig] = useState<TitleParagraphCTAConfig>({
    title: "Welcome to My Digital Wallet",
    titleStyle: "red-black",
    description:
      "Discover how we're revolutionizing your experience in our stores.",
    alignment: "center",
    buttonText: "Sign Up",
    buttonLink: "#",
    textColor: "#ffffff",
    buttonColor: "#FB3333",
    backgroundColor: "#f5f5f5",
    openInNewTab: true,
  });

  const handleConfigChange = (newConfig: TitleParagraphCTAConfig) => {
    setConfig(newConfig);
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
                TitleParagraphCTA Component
              </p>
            </div>
            <Link
              href="/title-paragraph-cta"
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
            <TitleParagraphCTAForm
              onConfigChange={handleConfigChange}
              initialConfig={config}
            />
          </div>

          {/* Real-time Preview */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                <h3 className="text-xl font-bold">Real-Time Preview</h3>
              </div>

              <div className="border-2 border-gray-200 rounded-lg p-6 bg-gray-50">
                {config.title ? (
                  <TitleParagraphCTA
                    title={config.title}
                    titleStyle={config.titleStyle}
                    description={config.description}
                    alignment={config.alignment}
                    buttonText={config.buttonText}
                    buttonLink={config.buttonLink}
                    textColor={config.textColor}
                    buttonColor={config.buttonColor}
                    backgroundColor={config.backgroundColor}
                    openInNewTab={config.openInNewTab}
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
              {config.title && (
                <div className="mt-6">
                  <h4 className="text-sm font-semibold mb-2 text-gray-700">
                    Code to use:
                  </h4>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
                    <code>
                      {`<TitleParagraphCTA
  title="${config.title}"
  titleStyle="${config.titleStyle}"${config.description ? `
  description="${config.description}"` : ''}
  alignment="${config.alignment}"${config.buttonText ? `
  buttonText="${config.buttonText}"` : ''}${config.buttonLink ? `
  buttonLink="${config.buttonLink}"` : ''}
  textColor="${config.textColor}"
  buttonColor="${config.buttonColor}"
  backgroundColor="${config.backgroundColor}"
  openInNewTab={${config.openInNewTab}}
/>`}
                    </code>
                  </pre>
                </div>
              )}

              {/* JSON Configuration */}
              {config.title && (
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
