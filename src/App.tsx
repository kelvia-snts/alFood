import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RestaurantManagement from "./pages/RestaurantManagement";
import VitrineRestaurantes from "./pages/VitrineRestaurantes";
import RestaurantForm from "./pages/RestaurantManagement/RestaurantForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path="/admin/restaurantes" element={<RestaurantManagement />} />
      <Route path="/admin/restaurantes/novo" element={<RestaurantForm />} />
    </Routes>
  );
}

export default App;
