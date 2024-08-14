import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// third-party libs:
import { ApolloProvider } from "@apollo/client";
import client from "./apollo.js";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
