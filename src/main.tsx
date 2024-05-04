import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import en from "./translate/en/global.json";
import fr from "./translate/fr/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: {
    escapeValue: true,
  }, 
  lng: "en",
  resources: {
    en: {
      global: en,
    },

    fr: {
      global: fr,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
