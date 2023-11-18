import React from "react";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
import Ecard from "../components/Ecard";
import Footer from "../components/Footer";
import Qualitymsg from "./Qualitymsg";
import Napkinmsg from "./Napkinmsg";

const Shop = () => {
  return (
    <div>
      <Navbar />
      <Qualitymsg />

      <Ecard />

      <Napkinmsg />
      <Ecard />

      <Cart />

      <Footer />
    </div>
  );
};

export default Shop;
