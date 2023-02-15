import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
