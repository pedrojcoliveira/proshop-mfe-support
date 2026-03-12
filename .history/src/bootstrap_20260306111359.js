import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import HelpCenterScreen from "./screens/HelpCenterScreen";
import HelpShippingScreen from "./screens/HelpShippingScreen";
import HelpPaymentScreen from "./screens/HelpPaymentScreen";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <RouterProvider>
      <Routes>
        <Route path="/" element={<HelpCenterScreen />} />
        <Route path="/help/shipping" element={<HelpShippingScreen />} />
        <Route path="/help/payment" element={<HelpPaymentScreen />} />
      </Routes>
    </RouterProvider>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<StrictMode><App /></StrictMode>);

export default App;
