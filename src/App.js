import React from "react";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import Footer from "./Components/Footer";
import PageNotFound from "./Pages/PageNotFound";
import Products from "./Pages/Products";
import ProductsDetails from "./Pages/ProductsDetails";
import Contact from "./Pages/Contact";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route
            exact
            path="/productsdetails/:id"
            element={<ProductsDetails />}
          />
          <Route path="*" element={<PageNotFound />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
