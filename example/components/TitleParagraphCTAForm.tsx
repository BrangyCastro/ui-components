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

export interface TitleParagraphCTAConfig {
  title: string;
  titleStyle: "red" | "black" | "red-black";
  description: string;
  alignment: "left" | "center" | "right";
  buttonText: string;
  buttonLink: string;
  textColor: string;
  buttonColor: string;
  backgroundColor: string;
  openInNewTab: boolean;
}

interface TitleParagraphCTAFormProps {
  onConfigChange: (config: TitleParagraphCTAConfig) => void;
  initialConfig?: Partial<TitleParagraphCTAConfig>;
}

export function TitleParagraphCTAForm({
  onConfigChange,
  initialConfig,
}: TitleParagraphCTAFormProps) {
  const [config, setConfig] = useState<TitleParagraphCTAConfig>({
    title: initialConfig?.title || "",
    titleStyle: initialConfig?.titleStyle || "red-black",
    description: initialConfig?.description || "",
    alignment: initialConfig?.alignment || "center",
    buttonText: initialConfig?.buttonText || "",
    buttonLink: initialConfig?.buttonLink || "",
    textColor: initialConfig?.textColor || "#ffffff",
    buttonColor: initialConfig?.buttonColor || "#FB3333",
    backgroundColor: initialConfig?.backgroundColor || "#f5f5f5",
    openInNewTab: initialConfig?.openInNewTab || true,
  });

  const updateConfig = (updates: Partial<TitleParagraphCTAConfig>) => {
    const newConfig = { ...config, ...updates };
    setConfig(newConfig);
    onConfigChange(newConfig);
  };

  const handleSave = () => {
    console.log("Configuración guardada:", config);
    alert("Configuración guardada exitosamente!");
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-3xl font-bold mb-8">
        Configurar Título + descripción + botón
      </h2>

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
            <Label htmlFor="red-black" className="font-normal cursor-pointer">
              Rojo + Negro
            </Label>
          </div>
        </RadioGroup>

        {/* Preview del título */}
        {config.title && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
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
                    {config.title.split(" ").slice(0, 2).join(" ")}
                  </span>{" "}
                  <span className="text-black">
                    {config.title.split(" ").slice(2).join(" ")}
                  </span>
                </>
              )}
            </h3>
          </div>
        )}
      </div>

      {/* Descripción */}
      <div className="mb-6">
        <Label htmlFor="description" className="text-base font-semibold">
          Descripción (Opcional)
        </Label>
        <Textarea
          id="description"
          placeholder="Ingresa una descripción"
          value={config.description}
          onChange={(e) => updateConfig({ description: e.target.value })}
          className="mt-2 min-h-[100px]"
        />
      </div>

      {/* Alineación */}
      <div className="mb-6">
        <Label htmlFor="alignment" className="text-base font-semibold">
          Alineación Contenido (opcional)
        </Label>
        <Select
          value={config.alignment}
          onValueChange={(value) =>
            updateConfig({ alignment: value as "left" | "center" | "right" })
          }
        >
          <SelectTrigger className="mt-2">
            <SelectValue placeholder="Centro" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="left">Izquierda</SelectItem>
            <SelectItem value="center">Centro</SelectItem>
            <SelectItem value="right">Derecha</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* CTA Section */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-bold mb-6">CTA (opcional)</h3>

        {/* Texto del botón */}
        <div className="mb-6">
          <Label htmlFor="buttonText" className="text-base font-semibold">
            Texto del botón CTA (Opcional)
          </Label>
          <Input
            id="buttonText"
            placeholder="Ingresa texto del botón"
            value={config.buttonText}
            onChange={(e) => updateConfig({ buttonText: e.target.value })}
            className="mt-2"
          />
        </div>

        {/* Enlace del botón */}
        <div className="mb-6">
          <Label htmlFor="buttonLink" className="text-base font-semibold">
            Enlace del botón (Opcional)
          </Label>
          <Input
            id="buttonLink"
            placeholder="Ingresa un título"
            value={config.buttonLink}
            onChange={(e) => updateConfig({ buttonLink: e.target.value })}
            className="mt-2"
          />
        </div>

        {/* Colores y Nueva pestaña */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Color del texto */}
          <div>
            <Label htmlFor="textColor" className="text-base font-semibold">
              Color del texto (opcional)
            </Label>
            <div className="flex gap-2 items-center mt-2">
              <Input
                id="textColor"
                type="color"
                value={config.textColor}
                onChange={(e) => updateConfig({ textColor: e.target.value })}
                className="w-20 h-10 p-1 cursor-pointer"
              />
              <Input
                type="text"
                value={config.textColor}
                onChange={(e) => updateConfig({ textColor: e.target.value })}
                placeholder="#ffffff"
                className="flex-1"
              />
            </div>
          </div>

          {/* Color del botón */}
          <div>
            <Label htmlFor="buttonColor" className="text-base font-semibold">
              Color del botón (opcional)
            </Label>
            <div className="flex gap-2 items-center mt-2">
              <Input
                id="buttonColor"
                type="color"
                value={config.buttonColor}
                onChange={(e) =>
                  updateConfig({ buttonColor: e.target.value })
                }
                className="w-20 h-10 p-1 cursor-pointer"
              />
              <Input
                type="text"
                value={config.buttonColor}
                onChange={(e) =>
                  updateConfig({ buttonColor: e.target.value })
                }
                placeholder="#FB3333"
                className="flex-1"
              />
            </div>
          </div>

          {/* Color de fondo */}
          <div>
            <Label htmlFor="backgroundColor" className="text-base font-semibold">
              Color de fondo (opcional)
            </Label>
            <div className="flex gap-2 items-center mt-2">
              <Input
                id="backgroundColor"
                type="color"
                value={config.backgroundColor}
                onChange={(e) =>
                  updateConfig({ backgroundColor: e.target.value })
                }
                className="w-20 h-10 p-1 cursor-pointer"
              />
              <Input
                type="text"
                value={config.backgroundColor}
                onChange={(e) =>
                  updateConfig({ backgroundColor: e.target.value })
                }
                placeholder="#f5f5f5"
                className="flex-1"
              />
            </div>
          </div>

          {/* Abrir en nueva pestaña */}
          <div>
            <Label htmlFor="openInNewTab" className="text-base font-semibold">
              Abrir en nueva pestaña
            </Label>
            <Select
              value={config.openInNewTab ? "yes" : "no"}
              onValueChange={(value) =>
                updateConfig({ openInNewTab: value === "yes" })
              }
            >
              <SelectTrigger className="mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Sí</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Botón Guardar */}
      <div className="flex justify-end">
        <Button
          onClick={handleSave}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold"
        >
          Guardar
        </Button>
      </div>
    </div>
  );
}
