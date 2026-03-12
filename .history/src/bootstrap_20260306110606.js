import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelpCenterScreen from "./screens/HelpCenterScreen";
import HelpShippingScreen from "./screens/HelpShippingScreen";
import HelpPaymentScreen from "./screens/HelpPaymentScreen";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HelpCenterScreen />} />
        <Route path="/help/shipping" element={<HelpShippingScreen />} />
        <Route path="/help/payment" element={<HelpPaymentScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<StrictMode><App /></StrictMode>);

export default App;
