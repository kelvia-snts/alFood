import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RestaurantManagement from "./pages/RestaurantManagement";
import VitrineRestaurantes from "./pages/VitrineRestaurantes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path="/admin/restaurantes" element={<RestaurantManagement />} />
    </Routes>
  );
}

export default App;
