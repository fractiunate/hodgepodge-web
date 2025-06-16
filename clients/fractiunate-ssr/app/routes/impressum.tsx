import type { Route } from "./+types/home";
import Impressum from "../impressum/impressum";
import React from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: " Fractiunate - Cloud Engineer" },
    { name: "description", content: "Impressum" },
  ];
}


export default function ImpressumPage({}: Route.ComponentProps) {
  return <Impressum />;
}
