"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Trash2 } from "lucide-react";

export interface CarouselCardConfig {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  cardBackgroundColor: string;
  buttonTextColor: string;
  buttonBorderColor: string;
  openInNewTab: boolean;
  cardAlignment: "left" | "center" | "right";
}

export interface TitleCarouselCardsCTAConfig {
  title: string;
  titleStyle: "red" | "black" | "red-black";
  cards: CarouselCardConfig[];
  alignment: "left" | "center" | "right";
  backgroundColor: string;
  autoplay: boolean;
  autoplaySpeed: number;
  dots: boolean;
  arrows: boolean;
  slidesToShow: number;
  infinite: boolean;
}

interface TitleCarouselCardsCTAFormProps {
  onConfigChange: (config: TitleCarouselCardsCTAConfig) => void;
  initialConfig?: Partial<TitleCarouselCardsCTAConfig>;
}

const iconOptions = [
  { value: "video", label: "Video", icon: "🎬" },
  { value: "play", label: "Play", icon: "▶️" },
  { value: "star", label: "Star", icon: "⭐" },
  { value: "heart", label: "Heart", icon: "❤️" },
  { value: "gift", label: "Gift", icon: "🎁" },
  { value: "rocket", label: "Rocket", icon: "🚀" },
  { value: "trophy", label: "Trophy", icon: "🏆" },
  { value: "lightbulb", label: "Lightbulb", icon: "💡" },
];

export function TitleCarouselCardsCTAForm({
  onConfigChange,
  initialConfig,
}: TitleCarouselCardsCTAFormProps) {
  const [config, setConfig] = useState<TitleCarouselCardsCTAConfig>({
    title: initialConfig?.title || "",
    titleStyle: initialConfig?.titleStyle || "red-black",
    cards: initialConfig?.cards || [],
    alignment: initialConfig?.alignment || "center",
    backgroundColor: initialConfig?.backgroundColor || "#ffffff",
    autoplay: initialConfig?.autoplay ?? false,
    autoplaySpeed: initialConfig?.autoplaySpeed || 3000,
    dots: initialConfig?.dots ?? true,
    arrows: initialConfig?.arrows ?? false,
    slidesToShow: initialConfig?.slidesToShow || 3,
    infinite: initialConfig?.infinite ?? true,
  });

  const [openAccordion, setOpenAccordion] = useState<string>("card-0");

  const updateConfig = (updates: Partial<TitleCarouselCardsCTAConfig>) => {
    const newConfig = { ...config, ...updates };
    setConfig(newConfig);
    onConfigChange(newConfig);
  };

  const addCard = () => {
    const newCard: CarouselCardConfig = {
      icon: "video",
      title: "",
      description: "",
      buttonText: "Ver video",
      buttonLink: "",
      cardBackgroundColor: "#ffffff",
      buttonTextColor: "#FB3333",
      buttonBorderColor: "#FB3333",
      openInNewTab: true,
      cardAlignment: "center",
    };
    const newCards = [...config.cards, newCard];
    updateConfig({ cards: newCards });
    setOpenAccordion(`card-${newCards.length - 1}`);
  };

  const removeCard = (index: number) => {
    const newCards = config.cards.filter((_, i) => i !== index);
    updateConfig({ cards: newCards });
  };

  const updateCard = (index: number, updates: Partial<CarouselCardConfig>) => {
    const newCards = [...config.cards];
    newCards[index] = { ...newCards[index], ...updates };
    updateConfig({ cards: newCards });
  };

  const handleSave = () => {
    console.log("Configuración guardada:", config);
    alert("Configuración guardada exitosamente!");
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-3xl font-bold mb-8">
        Configurar Carousel de tarjetas
      </h2>

      <Tabs defaultValue="cards" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="cards">Tarjetas</TabsTrigger>
          <TabsTrigger value="carousel">Configuración del Carrusel</TabsTrigger>
        </TabsList>

        {/* Tab: Tarjetas */}
        <TabsContent value="cards" className="space-y-6">
          {/* Título */}
          <div className="mb-6">
            <Label htmlFor="title" className="text-base font-semibold">
              Título *
            </Label>
            <Input
              id="title"
              placeholder="Ingresa un título"
              value={config.title}
              onChange={(e) => updateConfig({ title: e.target.value })}
              className="mt-2"
            />

            {/* Estilo del Título */}
            <RadioGroup
              value={config.titleStyle}
              onValueChange={(value) =>
                updateConfig({
                  titleStyle: value as "red" | "black" | "red-black",
                })
              }
              className="flex gap-6 mt-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="red" id="red" />
                <Label htmlFor="red" className="font-normal cursor-pointer">
                  Rojo
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="black" id="black" />
                <Label htmlFor="black" className="font-normal cursor-pointer">
                  Negro
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="red-black" id="red-black" />
                <Label
                  htmlFor="red-black"
                  className="font-normal cursor-pointer"
                >
                  Rojo + Negro
                </Label>
              </div>
            </RadioGroup>

            {/* Alineación + Preview del título */}
            <div className="mt-4 space-y-4">
              <div>
                <Label className="text-base font-semibold">
                  Alineación del Título
                </Label>
                <Select
                  value={config.alignment}
                  onValueChange={(value) =>
                    updateConfig({
                      alignment: value as "left" | "center" | "right",
                    })
                  }
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="left">Izquierda</SelectItem>
                    <SelectItem value="center">Centro</SelectItem>
                    <SelectItem value="right">Derecha</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {config.title && (
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3
                    className="text-2xl font-bold"
                    style={{
                      textAlign: config.alignment,
                    }}
                  >
                    {config.titleStyle === "red" && (
                      <span className="text-red-600">{config.title}</span>
                    )}
                    {config.titleStyle === "black" && (
                      <span className="text-black">{config.title}</span>
                    )}
                    {config.titleStyle === "red-black" && (
                      <>
                        <span className="text-red-600">
                          {config.title
                            .split(" ")
                            .slice(
                              0,
                              Math.ceil(config.title.split(" ").length / 2)
                            )
                            .join(" ")}
                        </span>{" "}
                        <span className="text-black">
                          {config.title
                            .split(" ")
                            .slice(
                              Math.ceil(config.title.split(" ").length / 2)
                            )
                            .join(" ")}
                        </span>
                      </>
                    )}
                  </h3>
                </div>
              )}
            </div>

            {/* Color de fondo del componente */}
            <div className="mt-4">
              <Label className="text-base font-semibold">
                Color de fondo del componente
              </Label>
              <Input
                type="color"
                value={config.backgroundColor}
                onChange={(e) =>
                  updateConfig({ backgroundColor: e.target.value })
                }
                className="mt-2 h-12 cursor-pointer"
              />
            </div>
          </div>

          {/* Tarjetas */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <Label className="text-base font-semibold">Tarjetas</Label>
              <Button
                onClick={addCard}
                variant="outline"
                size="sm"
                className="text-red-600 border-red-600 hover:bg-red-50"
              >
                <Plus className="w-4 h-4 mr-2" />
                Agregar tarjeta
              </Button>
            </div>

            {config.cards.length === 0 ? (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-500">
                No hay tarjetas. Haz clic en &quot;Agregar tarjeta&quot; para
                comenzar.
              </div>
            ) : (
              <Accordion
                type="single"
                collapsible
                value={openAccordion}
                onValueChange={setOpenAccordion}
                className="space-y-4"
              >
                {config.cards.map((card, index) => (
                  <AccordionItem
                    key={index}
                    value={`card-${index}`}
                    className="border rounded-lg"
                  >
                    <AccordionTrigger className="px-4 hover:no-underline">
                      <div className="flex items-center justify-between w-full pr-4">
                        <span className="font-semibold">
                          Tarjeta {index + 1}
                          {card.title &&
                            `: ${card.title.substring(0, 30)}${
                              card.title.length > 30 ? "..." : ""
                            }`}
                        </span>
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            removeCard(index);
                          }}
                          className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md cursor-pointer transition-colors"
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.stopPropagation();
                              removeCard(index);
                            }
                          }}
                        >
                          <Trash2 className="w-4 h-4" />
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 space-y-4">
                      {/* Icono */}
                      <div>
                        <Label className="text-base font-semibold">
                          Ícono (opcional)
                        </Label>
                        <Select
                          value={card.icon}
                          onValueChange={(value) =>
                            updateCard(index, { icon: value })
                          }
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Selecciona un icono" />
                          </SelectTrigger>
                          <SelectContent>
                            {iconOptions.map((option) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                              >
                                <span className="flex items-center gap-2">
                                  <span>{option.icon}</span>
                                  <span>{option.label}</span>
                                </span>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Título */}
                      <div>
                        <Label className="text-base font-semibold">
                          Título *
                        </Label>
                        <Input
                          placeholder="Ingresa título"
                          value={card.title}
                          onChange={(e) =>
                            updateCard(index, { title: e.target.value })
                          }
                          className="mt-2"
                        />
                      </div>

                      {/* Descripción */}
                      <div>
                        <Label className="text-base font-semibold">
                          Descripción (Opcional)
                        </Label>
                        <Textarea
                          placeholder="Ingresa una descripción"
                          value={card.description}
                          onChange={(e) =>
                            updateCard(index, { description: e.target.value })
                          }
                          className="mt-2 min-h-[80px]"
                        />
                      </div>

                      {/* Alineación y fondo */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-base font-semibold">
                            Alineación del Contenido
                          </Label>
                          <Select
                            value={card.cardAlignment}
                            onValueChange={(value) =>
                              updateCard(index, {
                                cardAlignment: value as
                                  | "left"
                                  | "center"
                                  | "right",
                              })
                            }
                          >
                            <SelectTrigger className="mt-2">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="left">Izquierda</SelectItem>
                              <SelectItem value="center">Centro</SelectItem>
                              <SelectItem value="right">Derecha</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label className="text-base font-semibold">
                            Color de fondo de la tarjeta
                          </Label>
                          <Input
                            type="color"
                            value={card.cardBackgroundColor}
                            onChange={(e) =>
                              updateCard(index, {
                                cardBackgroundColor: e.target.value,
                              })
                            }
                            className="mt-2 h-10"
                          />
                        </div>
                      </div>

                      {/* CTA Section */}
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 space-y-4">
                        <h4 className="font-semibold">CTA (opcional)</h4>

                        {/* Texto del botón */}
                        <div>
                          <Label className="text-sm">
                            Texto del botón CTA (Opcional)
                          </Label>
                          <Input
                            placeholder="Ingresa texto del botón"
                            value={card.buttonText}
                            onChange={(e) =>
                              updateCard(index, { buttonText: e.target.value })
                            }
                            className="mt-2"
                          />
                        </div>

                        {/* Enlace del botón */}
                        <div>
                          <Label className="text-sm">
                            Enlace del botón (Opcional)
                          </Label>
                          <Input
                            placeholder="Ingresa un enlace"
                            value={card.buttonLink}
                            onChange={(e) =>
                              updateCard(index, { buttonLink: e.target.value })
                            }
                            className="mt-2"
                          />
                        </div>

                        {/* Colores */}
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label className="text-sm">
                              Color del Texto del Botón
                            </Label>
                            <Input
                              type="color"
                              value={card.buttonTextColor}
                              onChange={(e) =>
                                updateCard(index, {
                                  buttonTextColor: e.target.value,
                                })
                              }
                              className="mt-2 h-10"
                            />
                          </div>
                          <div>
                            <Label className="text-sm">
                              Color del Borde del Botón
                            </Label>
                            <Input
                              type="color"
                              value={card.buttonBorderColor}
                              onChange={(e) =>
                                updateCard(index, {
                                  buttonBorderColor: e.target.value,
                                })
                              }
                              className="mt-2 h-10"
                            />
                          </div>
                        </div>

                        {/* Abrir en nueva pestaña */}
                        <div>
                          <Label className="text-sm">
                            Abrir en nueva pestaña
                          </Label>
                          <Select
                            value={card.openInNewTab ? "true" : "false"}
                            onValueChange={(value) =>
                              updateCard(index, {
                                openInNewTab: value === "true",
                              })
                            }
                          >
                            <SelectTrigger className="mt-2">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="true">Sí</SelectItem>
                              <SelectItem value="false">No</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </div>
        </TabsContent>

        {/* Tab: Configuración del Carrusel */}
        <TabsContent value="carousel" className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-6">
              Configuración del Carousel
            </h3>

            {/* Slides to Show */}
            <div className="mb-4">
              <Label className="text-base font-semibold">
                Tarjetas visibles (Desktop)
              </Label>
              <Select
                value={config.slidesToShow.toString()}
                onValueChange={(value) =>
                  updateConfig({ slidesToShow: parseInt(value) })
                }
              >
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Autoplay */}
            <div className="mb-4">
              <Label className="text-base font-semibold">Autoplay</Label>
              <Select
                value={config.autoplay ? "true" : "false"}
                onValueChange={(value) =>
                  updateConfig({ autoplay: value === "true" })
                }
              >
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Sí</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Dots */}
            <div className="mb-4">
              <Label className="text-base font-semibold">Mostrar Dots</Label>
              <Select
                value={config.dots ? "true" : "false"}
                onValueChange={(value) =>
                  updateConfig({ dots: value === "true" })
                }
              >
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Sí</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Arrows */}
            <div className="mb-4">
              <Label className="text-base font-semibold">Mostrar Flechas</Label>
              <Select
                value={config.arrows ? "true" : "false"}
                onValueChange={(value) =>
                  updateConfig({ arrows: value === "true" })
                }
              >
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Sí</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Infinite Loop */}
            <div className="mb-4">
              <Label className="text-base font-semibold">Loop Infinito</Label>
              <Select
                value={config.infinite ? "true" : "false"}
                onValueChange={(value) =>
                  updateConfig({ infinite: value === "true" })
                }
              >
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Sí</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Botón Guardar */}
      <Button
        onClick={handleSave}
        className="w-full bg-green-600 hover:bg-green-700 text-white mt-4"
        size="lg"
      >
        Guardar
      </Button>
    </div>
  );
}
