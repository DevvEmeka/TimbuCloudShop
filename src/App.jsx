import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import TopProducts from "./Pages/TopProducts";
import Footer from "./Components/Footer";
import Checkout from "./Checkout/Checkout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SuccessMessage from "./Pages/SuccessMessage";

const App = () => {
  return (
    <BrowserRouter>
      <main className="h-screen">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="TopProducts" element={<Checkout />}></Route>
          <Route path="Footer" element={<Checkout />}></Route>
          <Route path="Checkout" element={<Checkout />}></Route>
          <Route path="SuccessMessage" element={<SuccessMessage />}></Route>
        </Routes>
        {/* <Navbar />
        <Home />
        <TopProducts />
        <Footer />
        <Checkout /> */}
      </main>
    </BrowserRouter>
  );
};

export default App;
