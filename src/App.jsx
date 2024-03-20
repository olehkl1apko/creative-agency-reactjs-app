import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header, Footer } from "./components";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import DemosPage from "./pages/DemosPage";
import PagePage from "./pages/PagesPage";
import ServicesPage from "./pages/ServicesPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demos" element={<DemosPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pages" element={<PagePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
