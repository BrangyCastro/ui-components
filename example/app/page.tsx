"use client";

import Link from "next/link";

export default function Home() {
  const components = [
    {
      id: "title-paragraph-cta",
      name: "TitleParagraphCTA",
      description:
        "Un componente elegante que combina título con texto destacado, párrafo descriptivo y llamado a la acción.",
      category: "Marketing",
      tags: ["CTA", "Hero", "Landing"],
      status: "stable",
    },
    // Aquí se pueden agregar más componentes en el futuro
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-3">
              FromSolvers UI Components
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Biblioteca de componentes React modernos para landing pages y
              aplicaciones
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-800">
                v1.0.0
              </span>
              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
                {components.length} Component{components.length !== 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Welcome Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Componentes Disponibles
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explora nuestra colección de componentes. Haz clic en cualquier
            componente para ver su documentación completa y configurador
            interactivo.
          </p>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {components.map((component) => (
            <Link
              key={component.id}
              href={`/${component.id}`}
              className="group"
            >
              <div className="h-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-red-300">
                {/* Card Header */}
                <div className="bg-gradient-to-r from-red-50 to-red-100 px-6 py-4 border-b border-red-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                      {component.name}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        component.status === "stable"
                          ? "bg-green-100 text-green-800"
                          : component.status === "beta"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {component.status}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {component.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {component.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Category */}
                  <div className="text-sm text-gray-500 mb-4">
                    <span className="font-semibold">Categoría:</span>{" "}
                    {component.category}
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm font-medium text-red-600 group-hover:text-red-700">
                      Ver documentación
                    </span>
                    <svg
                      className="w-5 h-5 text-red-600 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-xl shadow-lg border border-gray-200 px-8 py-6">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Más componentes próximamente
                </h3>
                <p className="text-gray-600">
                  Estamos trabajando en nuevos componentes increíbles
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Documentación</h3>
            <p className="text-sm text-gray-600">
              Cada componente incluye documentación completa con ejemplos
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-purple-600"
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
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Configurador</h3>
            <p className="text-sm text-gray-600">
              Prueba y personaliza componentes en tiempo real
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">TypeScript</h3>
            <p className="text-sm text-gray-600">
              Completamente tipado para mejor experiencia de desarrollo
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t bg-white">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-gray-600">
            © 2025 FromSolvers. Componentes UI modernos para React.
          </p>
        </div>
      </footer>
    </div>
  );
}
