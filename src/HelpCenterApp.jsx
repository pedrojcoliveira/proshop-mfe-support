import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelpCenterScreen from "./screens/HelpCenterScreen";
import HelpShippingScreen from "./screens/HelpShippingScreen";
import HelpPaymentScreen from "./screens/HelpPaymentScreen";

const HelpCenterApp = () => {
  return (
      <Routes>
        <Route index element={<HelpCenterScreen />} />
        <Route path="/shipping" element={<HelpShippingScreen />} />
        <Route path="/payment" element={<HelpPaymentScreen />} />
      </Routes>
  );
};



export default HelpCenterApp;
