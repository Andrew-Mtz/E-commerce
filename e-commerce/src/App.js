import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router";
import Header from "./components/header/header";
import ProductPage from "./pages/product/ProductPage";
import CollectionPage from "./pages/collections/collectionsPage";
import MenPage from "./pages/menPage";
import WomenPage from "./pages/womenPage";
import AboutPage from "./pages/aboutPage";
import ContactPage from "./pages/contact/contactPage";
import HomePage from "./pages/home/HomePage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/my-ecommerce" element={HomePage} />
        <Route path="/collections" element={<CollectionPage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/collections/product/:productId"
          element={<ProductPage />}
        />
        <Route path="/men/product/:productId" element={<ProductPage />} />
        <Route path="/women/product/:productId" element={<ProductPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
