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

export interface CarouselListCardConfig {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  listItems: string[];
  cardBackgroundColor: string;
  cardAlignment: "left" | "center" | "right";
}

export interface TitleCarouselCardsListConfig {
  title: string;
  titleStyle: "red" | "black" | "red-black";
  cards: CarouselListCardConfig[];
  alignment: "left" | "center" | "right";
  backgroundColor: string;
  autoplay: boolean;
  autoplaySpeed: number;
  dots: boolean;
  arrows: boolean;
  slidesToShow: number;
  infinite: boolean;
}

interface TitleCarouselCardsListFormProps {
  onConfigChange: (config: TitleCarouselCardsListConfig) => void;
  initialConfig?: Partial<TitleCarouselCardsListConfig>;
}

export function TitleCarouselCardsListForm({
  onConfigChange,
  initialConfig,
}: TitleCarouselCardsListFormProps) {
  const [config, setConfig] = useState<TitleCarouselCardsListConfig>({
    title: initialConfig?.title || "",
    titleStyle: initialConfig?.titleStyle || "red-black",
    cards: initialConfig?.cards || [],
    alignment: initialConfig?.alignment || "center",
    backgroundColor: initialConfig?.backgroundColor || "#ffffff",
    autoplay: initialConfig?.autoplay ?? false,
    autoplaySpeed: initialConfig?.autoplaySpeed || 3000,
    dots: initialConfig?.dots ?? true,
    arrows: initialConfig?.arrows ?? false,
    slidesToShow: initialConfig?.slidesToShow || 1,
    infinite: initialConfig?.infinite ?? true,
  });

  const [openAccordion, setOpenAccordion] = useState<string>("card-0");

  const updateConfig = (updates: Partial<TitleCarouselCardsListConfig>) => {
    const newConfig = { ...config, ...updates };
    setConfig(newConfig);
    onConfigChange(newConfig);
  };

  const addCard = () => {
    const newCard: CarouselListCardConfig = {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      imageAlt: "",
      title: "",
      description: "",
      listItems: [""],
      cardBackgroundColor: "#ffffff",
      cardAlignment: "left",
    };
    const newCards = [...config.cards, newCard];
    updateConfig({ cards: newCards });
    setOpenAccordion(`card-${newCards.length - 1}`);
  };

  const removeCard = (index: number) => {
    const newCards = config.cards.filter((_, i) => i !== index);
    updateConfig({ cards: newCards });
  };

  const updateCard = (index: number, updates: Partial<CarouselListCardConfig>) => {
    const newCards = [...config.cards];
    newCards[index] = { ...newCards[index], ...updates };
    updateConfig({ cards: newCards });
  };

  const addListItem = (cardIndex: number) => {
    const newCards = [...config.cards];
    newCards[cardIndex].listItems.push("");
    updateConfig({ cards: newCards });
  };

  const removeListItem = (cardIndex: number, itemIndex: number) => {
    const newCards = [...config.cards];
    newCards[cardIndex].listItems = newCards[cardIndex].listItems.filter(
      (_, i) => i !== itemIndex
    );
    updateConfig({ cards: newCards });
  };

  const updateListItem = (cardIndex: number, itemIndex: number, value: string) => {
    const newCards = [...config.cards];
    newCards[cardIndex].listItems[itemIndex] = value;
    updateConfig({ cards: newCards });
  };

  const handleSave = () => {
    console.log("Configuración guardada:", config);
    alert("Configuración guardada exitosamente!");
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-3xl font-bold mb-8">
        Configurar Carousel de tarjetas con listas
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

            {/* Alineación */}
            <div className="mt-4">
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
          </div>

          {/* Tarjetas */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <Label className="text-base font-semibold">
                Tarjetas ({config.cards.length})
              </Label>
              <Button
                onClick={addCard}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Agregar Tarjeta
              </Button>
            </div>

            {config.cards.length === 0 ? (
              <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg">
                No hay tarjetas. Haz clic en &quot;Agregar Tarjeta&quot; para empezar.
              </div>
            ) : (
              <Accordion
                type="single"
                collapsible
                value={openAccordion}
                onValueChange={setOpenAccordion}
              >
                {config.cards.map((card, index) => (
                  <AccordionItem key={index} value={`card-${index}`}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center justify-between w-full pr-4">
                        <span className="font-medium">
                          Tarjeta {index + 1}
                          {card.title && `: ${card.title.substring(0, 30)}...`}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-4">
                        {/* Image URL */}
                        <div>
                          <Label htmlFor={`image-${index}`}>URL de la Imagen *</Label>
                          <Input
                            id={`image-${index}`}
                            placeholder="https://example.com/image.jpg"
                            value={card.image}
                            onChange={(e) =>
                              updateCard(index, { image: e.target.value })
                            }
                          />
                        </div>

                        {/* Image Alt */}
                        <div>
                          <Label htmlFor={`imageAlt-${index}`}>
                            Texto Alternativo (Alt)
                          </Label>
                          <Input
                            id={`imageAlt-${index}`}
                            placeholder="Descripción de la imagen"
                            value={card.imageAlt}
                            onChange={(e) =>
                              updateCard(index, { imageAlt: e.target.value })
                            }
                          />
                        </div>

                        {/* Title */}
                        <div>
                          <Label htmlFor={`title-${index}`}>Título *</Label>
                          <Input
                            id={`title-${index}`}
                            placeholder="Título de la tarjeta"
                            value={card.title}
                            onChange={(e) =>
                              updateCard(index, { title: e.target.value })
                            }
                          />
                        </div>

                        {/* Description */}
                        <div>
                          <Label htmlFor={`description-${index}`}>
                            Descripción (opcional)
                          </Label>
                          <Textarea
                            id={`description-${index}`}
                            placeholder="Descripción que aparecerá entre el título y la lista"
                            value={card.description}
                            onChange={(e) =>
                              updateCard(index, { description: e.target.value })
                            }
                            rows={3}
                          />
                        </div>

                        {/* List Items */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <Label>Items de la Lista</Label>
                            <Button
                              onClick={() => addListItem(index)}
                              variant="outline"
                              size="sm"
                              className="h-8"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <div className="space-y-2">
                            {card.listItems.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex gap-2">
                                <Input
                                  placeholder={`Item ${itemIndex + 1}`}
                                  value={item}
                                  onChange={(e) =>
                                    updateListItem(index, itemIndex, e.target.value)
                                  }
                                />
                                <Button
                                  onClick={() => removeListItem(index, itemIndex)}
                                  variant="ghost"
                                  size="sm"
                                  className="flex-shrink-0"
                                  disabled={card.listItems.length === 1}
                                >
                                  <Trash2 className="h-4 w-4 text-red-500" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Card Background Color */}
                        <div>
                          <Label htmlFor={`cardBgColor-${index}`}>
                            Color de Fondo de la Tarjeta
                          </Label>
                          <div className="flex gap-2 mt-2">
                            <Input
                              id={`cardBgColor-${index}`}
                              type="color"
                              value={card.cardBackgroundColor}
                              onChange={(e) =>
                                updateCard(index, {
                                  cardBackgroundColor: e.target.value,
                                })
                              }
                              className="w-20 h-10"
                            />
                            <Input
                              type="text"
                              value={card.cardBackgroundColor}
                              onChange={(e) =>
                                updateCard(index, {
                                  cardBackgroundColor: e.target.value,
                                })
                              }
                              className="flex-1"
                            />
                          </div>
                        </div>

                        {/* Card Alignment */}
                        <div>
                          <Label>Alineación del Contenido</Label>
                          <Select
                            value={card.cardAlignment}
                            onValueChange={(value) =>
                              updateCard(index, {
                                cardAlignment: value as "left" | "center" | "right",
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

                        {/* Remove Card */}
                        <Button
                          onClick={() => removeCard(index)}
                          variant="destructive"
                          size="sm"
                          className="w-full mt-4"
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Eliminar Tarjeta
                        </Button>
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
          <div className="space-y-6">
            {/* Background Color */}
            <div>
              <Label htmlFor="bgColor">Color de Fondo de la Sección</Label>
              <div className="flex gap-2 mt-2">
                <Input
                  id="bgColor"
                  type="color"
                  value={config.backgroundColor}
                  onChange={(e) => updateConfig({ backgroundColor: e.target.value })}
                  className="w-20 h-10"
                />
                <Input
                  type="text"
                  value={config.backgroundColor}
                  onChange={(e) => updateConfig({ backgroundColor: e.target.value })}
                  className="flex-1"
                />
              </div>
            </div>

            {/* Slides to Show */}
            <div>
              <Label htmlFor="slidesToShow">Tarjetas Visibles (Desktop)</Label>
              <Input
                id="slidesToShow"
                type="number"
                min="1"
                max="6"
                value={config.slidesToShow}
                onChange={(e) =>
                  updateConfig({ slidesToShow: parseInt(e.target.value) || 3 })
                }
                className="mt-2"
              />
            </div>

            {/* Autoplay */}
            <div className="flex items-center justify-between">
              <Label htmlFor="autoplay">Reproducción Automática</Label>
              <input
                id="autoplay"
                type="checkbox"
                checked={config.autoplay}
                onChange={(e) => updateConfig({ autoplay: e.target.checked })}
                className="h-5 w-5"
              />
            </div>

            {/* Autoplay Speed */}
            {config.autoplay && (
              <div>
                <Label htmlFor="autoplaySpeed">
                  Velocidad (ms)
                </Label>
                <Input
                  id="autoplaySpeed"
                  type="number"
                  min="1000"
                  step="500"
                  value={config.autoplaySpeed}
                  onChange={(e) =>
                    updateConfig({ autoplaySpeed: parseInt(e.target.value) || 3000 })
                  }
                  className="mt-2"
                />
              </div>
            )}

            {/* Dots */}
            <div className="flex items-center justify-between">
              <Label htmlFor="dots">Mostrar Indicadores (Dots)</Label>
              <input
                id="dots"
                type="checkbox"
                checked={config.dots}
                onChange={(e) => updateConfig({ dots: e.target.checked })}
                className="h-5 w-5"
              />
            </div>

            {/* Arrows */}
            <div className="flex items-center justify-between">
              <Label htmlFor="arrows">Mostrar Flechas de Navegación</Label>
              <input
                id="arrows"
                type="checkbox"
                checked={config.arrows}
                onChange={(e) => updateConfig({ arrows: e.target.checked })}
                className="h-5 w-5"
              />
            </div>

            {/* Infinite */}
            <div className="flex items-center justify-between">
              <Label htmlFor="infinite">Loop Infinito</Label>
              <input
                id="infinite"
                type="checkbox"
                checked={config.infinite}
                onChange={(e) => updateConfig({ infinite: e.target.checked })}
                className="h-5 w-5"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Save Button */}
      <div className="mt-8 pt-6 border-t">
        <Button onClick={handleSave} className="w-full" size="lg">
          Guardar Configuración
        </Button>
      </div>
    </div>
  );
}
