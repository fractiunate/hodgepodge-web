import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import React from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: " Fractiunate - Cloud Engineer" },
    { name: "description", content: "Fractiunate Home" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_EXPRESS };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <Welcome message={loaderData.message} />;
}
