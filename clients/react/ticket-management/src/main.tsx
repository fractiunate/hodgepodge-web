import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import React from "react";

import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { configuration } from "./msalConfiguration.ts";
import LoginPage from "./pages/login.tsx";
import Main from "./pages/main.tsx";

const pca = new PublicClientApplication(configuration);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MsalProvider instance={pca}>
      <BrowserRouter>
        <Routes>
          <Route
            index
            path="/"
            element={<Main />}
          />
          <Route
            path="/login"
            element={<LoginPage />}
          />
        </Routes>
      </BrowserRouter>
    </MsalProvider>
  </StrictMode>
);
