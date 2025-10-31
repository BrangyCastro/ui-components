"use client";

import Link from "next/link";
import { HeroBasic, HeroBanner } from "@brangycastro/ui-components";
import "@brangycastro/ui-components/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const exampleBanners: HeroBanner[] = [
  {
    desktopImage: "/banner-1-desktop.svg",
    mobileImage: "/banner-1-mobile.svg",
    alt: "Banner 1 - Imagen de ejemplo",
    link: "https://example.com",
  },
  {
    desktopImage: "/banner-2-desktop.svg",
    mobileImage: "/banner-2-mobile.svg",
    alt: "Banner 2 - Imagen de ejemplo",
    link: "https://example.com",
  },
  {
    desktopImage: "/banner-3-desktop.svg",
    mobileImage: "/banner-3-mobile.svg",
    alt: "Banner 3 - Imagen de ejemplo",
  },
];

const singleBanner: HeroBanner[] = [
  {
    desktopImage: "/banner-1-desktop.svg",
    mobileImage: "/banner-1-mobile.svg",
    alt: "Single banner example",
  },
];

export default function HeroBasicPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="border-b bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                HeroBasic
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Responsive hero carousel with auto-play and navigation controls
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
            href="/hero-basic/configurator"
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
            The <code className="bg-gray-100 px-2 py-1 rounded">HeroBasic</code> component is a powerful carousel hero banner designed for showcasing multiple promotional images with smooth transitions. It features responsive images, auto-play functionality, and intuitive navigation controls.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-blue-600 font-semibold mb-2">Category</div>
              <div className="text-gray-900">Hero</div>
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
              Multiple Banners with Auto-play
            </h3>
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <HeroBasic
                banners={exampleBanners}
                autoplay={true}
                autoplaySpeed={5000}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Three banners with automatic rotation every 5 seconds. Click the pause button to stop auto-play or use the dots to navigate manually.
            </p>
          </div>

          {/* Example 2: Single Banner */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Single Banner (No Controls)
            </h3>
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <HeroBasic
                banners={singleBanner}
                autoplay={false}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              With a single banner, navigation controls are automatically hidden.
            </p>
          </div>

          {/* Example 3: With Arrows */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              With Navigation Arrows
            </h3>
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <HeroBasic
                banners={exampleBanners}
                autoplay={true}
                autoplaySpeed={5000}
                arrows={true}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Arrow navigation enabled for manual control. Arrows appear on hover.
            </p>
          </div>

          {/* Example 4: Pause on Hover */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Pause on Hover
            </h3>
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <HeroBasic
                banners={exampleBanners}
                autoplay={true}
                autoplaySpeed={5000}
                pauseOnHover={true}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Carousel pauses automatically when you hover over it.
            </p>
          </div>

          {/* Example 5: No Dots, Only Play/Pause */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              No Dots, Only Play/Pause Button
            </h3>
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <HeroBasic
                banners={exampleBanners}
                autoplay={true}
                autoplaySpeed={5000}
                dots={false}
                showPlayPause={true}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Minimal UI with only the play/pause control visible.
            </p>
          </div>

          {/* Example 6: All Controls */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              All Controls Enabled
            </h3>
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <HeroBasic
                banners={exampleBanners}
                autoplay={true}
                autoplaySpeed={6000}
                arrows={true}
                dots={true}
                showPlayPause={true}
                pauseOnHover={true}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Full featured example with arrows, dots, play/pause button, and pause on hover enabled.
            </p>
          </div>
        </div>

        {/* Props Documentation */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">Props</h2>

          <h3 className="text-xl font-semibold mb-4">HeroBasic Props</h3>
          <div className="overflow-x-auto mb-8">
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
                  <td className="py-3 px-4 font-mono text-sm">banners</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">HeroBanner[]</td>
                  <td className="py-3 px-4 font-mono text-sm">-</td>
                  <td className="py-3 px-4 text-sm">Array of banner objects to display (required)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">autoplay</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">boolean</td>
                  <td className="py-3 px-4 font-mono text-sm">true</td>
                  <td className="py-3 px-4 text-sm">Enable automatic banner rotation</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">autoplaySpeed</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">number</td>
                  <td className="py-3 px-4 font-mono text-sm">5000</td>
                  <td className="py-3 px-4 text-sm">Time in milliseconds between automatic transitions</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">pauseOnHover</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">boolean</td>
                  <td className="py-3 px-4 font-mono text-sm">false</td>
                  <td className="py-3 px-4 text-sm">Pause autoplay when hovering over the carousel</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">arrows</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">boolean</td>
                  <td className="py-3 px-4 font-mono text-sm">false</td>
                  <td className="py-3 px-4 text-sm">Show previous/next navigation arrows</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">dots</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">boolean</td>
                  <td className="py-3 px-4 font-mono text-sm">true</td>
                  <td className="py-3 px-4 text-sm">Show dot indicators for each banner</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">showPlayPause</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">boolean</td>
                  <td className="py-3 px-4 font-mono text-sm">true</td>
                  <td className="py-3 px-4 text-sm">Show play/pause button for manual control</td>
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

          <h3 className="text-xl font-semibold mb-4">HeroBanner Interface</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold">Property</th>
                  <th className="text-left py-3 px-4 font-semibold">Type</th>
                  <th className="text-left py-3 px-4 font-semibold">Required</th>
                  <th className="text-left py-3 px-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">desktopImage</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">string</td>
                  <td className="py-3 px-4 text-sm">Yes</td>
                  <td className="py-3 px-4 text-sm">URL or path to desktop image (recommended: 1920x800)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">mobileImage</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">string</td>
                  <td className="py-3 px-4 text-sm">No</td>
                  <td className="py-3 px-4 text-sm">URL or path to mobile image (recommended: 1080x1920)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">alt</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">string</td>
                  <td className="py-3 px-4 text-sm">Yes</td>
                  <td className="py-3 px-4 text-sm">Alternative text for accessibility</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm">link</td>
                  <td className="py-3 px-4 font-mono text-sm text-blue-600">string</td>
                  <td className="py-3 px-4 text-sm">No</td>
                  <td className="py-3 px-4 text-sm">URL to navigate when banner is clicked</td>
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
                <code>npm install @brangycastro/ui-components react-slick slick-carousel</code>
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">2. Import the component and styles</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`import { HeroBasic } from '@brangycastro/ui-components';
import '@brangycastro/ui-components/style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">3. Use the component</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`const banners = [
  {
    desktopImage: '/banner-1-desktop.svg',
    mobileImage: '/banner-1-mobile.svg',
    alt: 'Banner promocional 1',
    link: 'https://example.com/promo',
  },
  {
    desktopImage: '/banner-2-desktop.svg',
    mobileImage: '/banner-2-mobile.svg',
    alt: 'Banner promocional 2',
  },
];

// Basic usage
<HeroBasic
  banners={banners}
  autoplay={true}
  autoplaySpeed={5000}
/>

// With all controls
<HeroBasic
  banners={banners}
  autoplay={true}
  autoplaySpeed={5000}
  arrows={true}
  dots={true}
  showPlayPause={true}
  pauseOnHover={true}
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
                <h3 className="font-semibold mb-1">Responsive Images</h3>
                <p className="text-gray-600 text-sm">Separate images for desktop and mobile devices with automatic switching</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Auto-play Control</h3>
                <p className="text-gray-600 text-sm">Built-in play/pause button for user control over banner rotation</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Smooth Transitions</h3>
                <p className="text-gray-600 text-sm">Fade effect between slides for elegant banner transitions</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Multiple Navigation Controls</h3>
                <p className="text-gray-600 text-sm">Dots, arrows, and play/pause button - all customizable</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Pause on Hover</h3>
                <p className="text-gray-600 text-sm">Optional pause functionality when users hover over the carousel</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Clickable Banners</h3>
                <p className="text-gray-600 text-sm">Optional links that open in new tabs for promotional campaigns</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">SSR Compatible</h3>
                <p className="text-gray-600 text-sm">Works seamlessly with Next.js and other SSR frameworks</p>
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
