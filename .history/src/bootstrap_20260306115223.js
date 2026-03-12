import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelpCenterApp from "./HelpCenterApp";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";


const root = createRoot(document.getElementById("root"));
root.render(<StrictMode>
  <BrowserRouter basename= "/help">
  <HelpCenterApp />
  </BrowserRouter>
  </StrictMode>);
