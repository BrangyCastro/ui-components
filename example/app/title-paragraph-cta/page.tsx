"use client";

import Link from "next/link";
import { TitleParagraphCTA } from "@brangycastro/ui-components";
import "@brangycastro/ui-components/style.css";

export default function TitleParagraphCTAPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="border-b bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                TitleParagraphCTA
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Elegant component combining title, description, and call-to-action
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
            href="/title-paragraph-cta/configurator"
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
            The <code className="bg-gray-100 px-2 py-1 rounded">TitleParagraphCTA</code> component is a versatile marketing component designed for landing pages and hero sections. It combines a stylized title, optional description, and an optional call-to-action button with full customization support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-blue-600 font-semibold mb-2">Category</div>
              <div className="text-gray-900">Marketing</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-green-600 font-semibold mb-2">Status</div>
              <div className="text-gray-900">Stable</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="text-purple-600 font-semibold mb-2">Version</div>
              <div className="text-gray-900">1.0.0</div>
            </div>
          </div>
        </div>

        {/* Live Examples */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">Live Examples</h2>

          {/* Example 1: Full Featured */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Full Featured (Red-Black Title)
            </h3>
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <TitleParagraphCTA
                title="Welcome to FromSolvers UI Components"
                titleStyle="red-black"
                description="Build beautiful and modern landing pages with our collection of customizable React components."
                alignment="center"
                buttonText="Get Started"
                buttonLink="#"
                textColor="#ffffff"
                buttonColor="#FB3333"
                openInNewTab={true}
              />
            </div>
          </div>

          {/* Example 2: All Red Title */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              All Red Title, Left Aligned
            </h3>
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <TitleParagraphCTA
                title="Powerful Solutions"
                titleStyle="red"
                description="Transform your ideas into reality with our cutting-edge tools and components."
                alignment="left"
                buttonText="Learn More"
                buttonLink="#"
                textColor="#ffffff"
                buttonColor="#FB3333"
                openInNewTab={false}
              />
            </div>
          </div>

          {/* Example 3: All Black Title, No Button */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Black Title, No CTA Button
            </h3>
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <TitleParagraphCTA
                title="Simple and Clean"
                titleStyle="black"
                description="Sometimes less is more. This example shows the component without a call-to-action button."
                alignment="center"
              />
            </div>
          </div>

          {/* Example 4: Custom Colors */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Custom Colors, Right Aligned
            </h3>
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <TitleParagraphCTA
                title="Customize Everything"
                titleStyle="red-black"
                description="Change colors to match your brand identity."
                alignment="right"
                buttonText="Contact Us"
                buttonLink="#"
                textColor="#1F2937"
                buttonColor="#3B82F6"
                openInNewTab={true}
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
                  <td className="py-3 px-4 text-sm">Style of the title. &quot;red-black&quot; splits the title in half (required)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">description</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">string</td>
                  <td className="py-3 px-4 font-mono text-sm">undefined</td>
                  <td className="py-3 px-4 text-sm">Optional description text below the title</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">alignment</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">&quot;left&quot; | &quot;center&quot; | &quot;right&quot;</td>
                  <td className="py-3 px-4 font-mono text-sm">&quot;center&quot;</td>
                  <td className="py-3 px-4 text-sm">Horizontal alignment of all content</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">buttonText</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">string</td>
                  <td className="py-3 px-4 font-mono text-sm">undefined</td>
                  <td className="py-3 px-4 text-sm">Text for the CTA button. Button won&apos;t render if omitted</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">buttonLink</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">string</td>
                  <td className="py-3 px-4 font-mono text-sm">undefined</td>
                  <td className="py-3 px-4 text-sm">URL for the button link</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">textColor</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">string</td>
                  <td className="py-3 px-4 font-mono text-sm">&quot;#ffffff&quot;</td>
                  <td className="py-3 px-4 text-sm">Button text color (hex or any valid CSS color)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">buttonColor</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">string</td>
                  <td className="py-3 px-4 font-mono text-sm">&quot;#FB3333&quot;</td>
                  <td className="py-3 px-4 text-sm">Button background color (hex or any valid CSS color)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">openInNewTab</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">boolean</td>
                  <td className="py-3 px-4 font-mono text-sm">true</td>
                  <td className="py-3 px-4 text-sm">Whether to open the link in a new tab</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">className</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">string</td>
                  <td className="py-3 px-4 font-mono text-sm">&quot;&quot;</td>
                  <td className="py-3 px-4 text-sm">Additional CSS classes for the wrapper</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Installation & Usage */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">Installation & Usage</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">1. Install the package</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>npm install @brangycastro/ui-components</code>
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">2. Import the component and styles</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`import { TitleParagraphCTA } from '@brangycastro/ui-components';
import '@brangycastro/ui-components/style.css';`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">3. Use the component</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`<TitleParagraphCTA
  title="Welcome to My Application"
  titleStyle="red-black"
  description="This is an amazing landing page built with React"
  alignment="center"
  buttonText="Get Started"
  buttonLink="/signup"
  textColor="#ffffff"
  buttonColor="#FB3333"
  openInNewTab={false}
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
                <h3 className="font-semibold mb-1">Fully Typed</h3>
                <p className="text-gray-600 text-sm">Complete TypeScript support with type definitions</p>
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
                <h3 className="font-semibold mb-1">Customizable</h3>
                <p className="text-gray-600 text-sm">Full control over colors, alignment, and content</p>
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
                <h3 className="font-semibold mb-1">Responsive</h3>
                <p className="text-gray-600 text-sm">Mobile-first design that looks great on all devices</p>
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
                <h3 className="font-semibold mb-1">Lightweight</h3>
                <p className="text-gray-600 text-sm">Minimal dependencies and optimized bundle size</p>
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
