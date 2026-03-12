import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelpCenterScreen from "./screens/HelpCenterScreen";
import HelpShippingScreen from "./screens/HelpShippingScreen";
import HelpPaymentScreen from "./screens/HelpPaymentScreen";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
      <Routes>
        <Route index element={<HelpCenterScreen />} />
        <Route path="/shipping" element={<HelpShippingScreen />} />
        <Route path="/payment" element={<HelpPaymentScreen />} />
      </Routes>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<StrictMode>
  <BrowserRouter basename= "/help">
  <App />
  </BrowserRouter>
  </StrictMode>);

export default App;
