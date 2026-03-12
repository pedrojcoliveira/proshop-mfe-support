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



export default App;
