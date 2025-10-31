"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ChevronDown,
  ChevronUp,
  Plus,
  Trash2,
  Image,
  Settings,
} from "lucide-react";

export interface HeroBanner {
  desktopImage: string;
  mobileImage?: string;
  alt: string;
  link?: string;
}

export interface HeroBasicConfig {
  banners: HeroBanner[];
  autoplay?: boolean;
  autoplaySpeed?: number;
  pauseOnHover?: boolean;
  arrows?: boolean;
  dots?: boolean;
  showPlayPause?: boolean;
}

interface HeroBasicFormProps {
  onConfigChange: (config: HeroBasicConfig) => void;
  initialConfig?: Partial<HeroBasicConfig>;
}

export function HeroBasicForm({
  onConfigChange,
  initialConfig,
}: HeroBasicFormProps) {
  const [config, setConfig] = useState<HeroBasicConfig>({
    banners: initialConfig?.banners || [
      { desktopImage: "", mobileImage: "", alt: "", link: "" },
    ],
    autoplay: initialConfig?.autoplay ?? true,
    autoplaySpeed: initialConfig?.autoplaySpeed ?? 5000,
    pauseOnHover: initialConfig?.pauseOnHover ?? false,
    arrows: initialConfig?.arrows ?? false,
    dots: initialConfig?.dots ?? true,
    showPlayPause: initialConfig?.showPlayPause ?? true,
  });

  const [expandedBanner, setExpandedBanner] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<"banners" | "slider">("banners");

  const updateConfig = (updates: Partial<HeroBasicConfig>) => {
    const newConfig = { ...config, ...updates };
    setConfig(newConfig);
    onConfigChange(newConfig);
  };

  const updateBanner = (index: number, updates: Partial<HeroBanner>) => {
    const newBanners = [...config.banners];
    newBanners[index] = { ...newBanners[index], ...updates };
    updateConfig({ banners: newBanners });
  };

  const addBanner = () => {
    const newBanners = [
      ...config.banners,
      { desktopImage: "", mobileImage: "", alt: "", link: "" },
    ];
    updateConfig({ banners: newBanners });
    setExpandedBanner(newBanners.length - 1);
  };

  const removeBanner = (index: number) => {
    if (config.banners.length <= 1) {
      alert("Debe haber al menos un banner");
      return;
    }
    const newBanners = config.banners.filter((_, i) => i !== index);
    updateConfig({ banners: newBanners });
    if (expandedBanner >= newBanners.length) {
      setExpandedBanner(newBanners.length - 1);
    }
  };

  const toggleBanner = (index: number) => {
    setExpandedBanner(expandedBanner === index ? -1 : index);
  };

  const handleSave = () => {
    // Validación básica
    const invalidBanners = config.banners.filter(
      (banner) => !banner.desktopImage || !banner.alt
    );

    if (invalidBanners.length > 0) {
      alert(
        "Por favor completa todos los campos requeridos (Imagen Desktop y Alt)"
      );
      return;
    }

    console.log("Configuración guardada:", config);
    alert("Configuración guardada exitosamente!");
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl">
      {/* Header */}
      <h2 className="text-3xl font-bold p-8">Configurar Hero banner</h2>

      {/* Tabs Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px">
          <button
            onClick={() => setActiveTab("banners")}
            className={`flex items-center gap-2 px-6 py-4 font-semibold transition-colors ${
              activeTab === "banners"
                ? "border-b-2 border-red-600 text-red-600"
                : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            <Image size={20} />
            Banners
          </button>
          <button
            onClick={() => setActiveTab("slider")}
            className={`flex items-center gap-2 px-6 py-4 font-semibold transition-colors ${
              activeTab === "slider"
                ? "border-b-2 border-red-600 text-red-600"
                : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            <Settings size={20} />
            Configuración del Slider
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="p-8">
        {/* Banners Tab */}
        {activeTab === "banners" && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Banners</h3>
              <button
                onClick={addBanner}
                className="flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold transition-colors"
              >
                <Plus size={20} />
                Agregar banner
              </button>
            </div>

            {/* Banner List */}
            <div className="space-y-4">
              {config.banners.map((banner, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  {/* Banner Header */}
                  <button
                    onClick={() => toggleBanner(index)}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <h4 className="text-lg font-bold">Banner {index + 1}</h4>
                    {expandedBanner === index ? (
                      <ChevronUp size={24} />
                    ) : (
                      <ChevronDown size={24} />
                    )}
                  </button>

                  {/* Banner Content */}
                  {expandedBanner === index && (
                    <div className="p-6 space-y-6">
                      {/* Imagen Desktop */}
                      <div>
                        <Label
                          htmlFor={`desktop-${index}`}
                          className="text-base font-semibold"
                        >
                          Imagen Desktop (1920x800) *
                        </Label>
                        <Input
                          id={`desktop-${index}`}
                          placeholder="Seleccione imagen"
                          value={banner.desktopImage}
                          onChange={(e) =>
                            updateBanner(index, {
                              desktopImage: e.target.value,
                            })
                          }
                          className="mt-2"
                        />
                      </div>

                      {/* Imagen Mobile */}
                      <div>
                        <Label
                          htmlFor={`mobile-${index}`}
                          className="text-base font-semibold"
                        >
                          Imagen Mobile (1080x1920)
                        </Label>
                        <Input
                          id={`mobile-${index}`}
                          placeholder="Seleccione imagen"
                          value={banner.mobileImage || ""}
                          onChange={(e) =>
                            updateBanner(index, { mobileImage: e.target.value })
                          }
                          className="mt-2"
                        />
                      </div>

                      {/* Alt Text */}
                      <div>
                        <Label
                          htmlFor={`alt-${index}`}
                          className="text-base font-semibold"
                        >
                          Alt (texto alternativo) *
                        </Label>
                        <Input
                          id={`alt-${index}`}
                          placeholder="Ingresa texto alternativo"
                          value={banner.alt}
                          onChange={(e) =>
                            updateBanner(index, { alt: e.target.value })
                          }
                          className="mt-2"
                        />
                      </div>

                      {/* Link */}
                      <div>
                        <Label
                          htmlFor={`link-${index}`}
                          className="text-base font-semibold"
                        >
                          Link del banner (opcional)
                        </Label>
                        <Input
                          id={`link-${index}`}
                          placeholder="Ingresa texto alternativo"
                          value={banner.link || ""}
                          onChange={(e) =>
                            updateBanner(index, { link: e.target.value })
                          }
                          className="mt-2"
                        />
                      </div>

                      {/* Delete Button */}
                      {config.banners.length > 1 && (
                        <div className="flex justify-end pt-4 border-t">
                          <Button
                            onClick={() => removeBanner(index)}
                            variant="destructive"
                            className="flex items-center gap-2"
                          >
                            <Trash2 size={16} />
                            Eliminar banner
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Slider Settings Tab */}
        {activeTab === "slider" && (
          <div className="mb-8">
            <div className="border border-gray-200 rounded-lg p-6 space-y-6">
              {/* Autoplay */}
              <div className="flex items-center justify-between">
                <div>
                  <Label
                    htmlFor="autoplay"
                    className="text-base font-semibold cursor-pointer"
                  >
                    Autoplay
                  </Label>
                  <p className="text-sm text-gray-600 mt-1">
                    Reproducción automática de banners
                  </p>
                </div>
                <button
                  id="autoplay"
                  onClick={() => updateConfig({ autoplay: !config.autoplay })}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    config.autoplay ? "bg-green-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      config.autoplay ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* Autoplay Speed */}
              {config.autoplay && (
                <div>
                  <Label
                    htmlFor="autoplaySpeed"
                    className="text-base font-semibold"
                  >
                    Velocidad de Autoplay (ms)
                  </Label>
                  <p className="text-sm text-gray-600 mt-1 mb-2">
                    Tiempo entre transiciones (milisegundos)
                  </p>
                  <Input
                    id="autoplaySpeed"
                    type="number"
                    min="1000"
                    max="10000"
                    step="500"
                    value={config.autoplaySpeed}
                    onChange={(e) =>
                      updateConfig({
                        autoplaySpeed: parseInt(e.target.value) || 5000,
                      })
                    }
                  />
                </div>
              )}

              {/* Pause on Hover */}
              <div className="flex items-center justify-between">
                <div>
                  <Label
                    htmlFor="pauseOnHover"
                    className="text-base font-semibold cursor-pointer"
                  >
                    Pausar al pasar el cursor
                  </Label>
                  <p className="text-sm text-gray-600 mt-1">
                    Pausa el autoplay al pasar el mouse sobre el banner
                  </p>
                </div>
                <button
                  id="pauseOnHover"
                  onClick={() =>
                    updateConfig({ pauseOnHover: !config.pauseOnHover })
                  }
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    config.pauseOnHover ? "bg-green-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      config.pauseOnHover ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* Show Dots */}
              <div className="flex items-center justify-between">
                <div>
                  <Label
                    htmlFor="dots"
                    className="text-base font-semibold cursor-pointer"
                  >
                    Mostrar indicadores (dots)
                  </Label>
                  <p className="text-sm text-gray-600 mt-1">
                    Puntos indicadores para navegación entre banners
                  </p>
                </div>
                <button
                  id="dots"
                  onClick={() => updateConfig({ dots: !config.dots })}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    config.dots ? "bg-green-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      config.dots ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* Show Arrows */}
              <div className="flex items-center justify-between">
                <div>
                  <Label
                    htmlFor="arrows"
                    className="text-base font-semibold cursor-pointer"
                  >
                    Mostrar flechas de navegación
                  </Label>
                  <p className="text-sm text-gray-600 mt-1">
                    Flechas anterior/siguiente en los laterales
                  </p>
                </div>
                <button
                  id="arrows"
                  onClick={() => updateConfig({ arrows: !config.arrows })}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    config.arrows ? "bg-green-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      config.arrows ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* Show Play/Pause */}
              <div className="flex items-center justify-between">
                <div>
                  <Label
                    htmlFor="showPlayPause"
                    className="text-base font-semibold cursor-pointer"
                  >
                    Mostrar botón Play/Pause
                  </Label>
                  <p className="text-sm text-gray-600 mt-1">
                    Botón para controlar la reproducción manualmente
                  </p>
                </div>
                <button
                  id="showPlayPause"
                  onClick={() =>
                    updateConfig({ showPlayPause: !config.showPlayPause })
                  }
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    config.showPlayPause ? "bg-green-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      config.showPlayPause ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Botón Guardar */}
        <div className="flex justify-end mt-8 pt-6 border-t border-gray-200">
          <Button
            onClick={handleSave}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold"
          >
            Guardar
          </Button>
        </div>
      </div>
    </div>
  );
}
