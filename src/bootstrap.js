import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import HelpCenterApp from "./HelpCenterApp";
import "bootstrap/dist/css/bootstrap.min.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter basename="/">
      <main className="py-3" style={{ minHeight: "100vh" }}>
        <Container>
          <HelpCenterApp />
        </Container>
      </main>
    </BrowserRouter>
  </StrictMode>
);
