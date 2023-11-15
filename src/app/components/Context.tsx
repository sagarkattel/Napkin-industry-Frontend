"use client";


import React, { createContext, useEffect, useState } from "react";

export const AllContext = createContext<any>(null);

type MainChild = {
    children:React.ReactNode;
  }

  const Context = ({ children }:MainChild) => {

  
    const [isCartOpen, setIsCartOpen] = useState(false);


    const toggleCart = () => {
      setIsCartOpen(!isCartOpen); 
    };

    return (
      <AllContext.Provider
        value={{toggleCart,isCartOpen}}
      >
        {children}
      </AllContext.Provider>
    );
  };
  
  export default Context;