import React from "react";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
import Ecard from "../components/Ecard";
import Footer from "../components/Footer";
import Qualitymsg from "./Qualitymsg";
import Napkinmsg from "./Napkinmsg";
import SortBar from "./SortBar"

const Shop = () => {
  return (
    <div>
      <Navbar />
      <div className="flex  items-center flex-col">

      <Qualitymsg />

      <SortBar/>
      {/* <Ecard /> */}

      <Napkinmsg />
      <Ecard />
      </div>

      <Cart />

      <Footer />
    </div>
  );
};

export default Shop;
