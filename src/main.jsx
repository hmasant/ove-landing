import { Router } from "./routes";
import { ContextProvider } from "./context";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextProvider>
      <Router />
    </ContextProvider>
  </BrowserRouter>
);
