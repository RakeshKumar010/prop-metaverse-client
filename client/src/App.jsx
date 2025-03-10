import React, { createContext, useState } from "react";
import Layout from "./Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const MyContext=createContext()
const App = () => {
  const [isPopUpOpen,setIsPopUpOpen]=useState(false)
  const [damacIsPopUpOpen,setDamacIsPopUpOpen]=useState(false)
  return (
    <MyContext.Provider value={{isPopUpOpen,setIsPopUpOpen,damacIsPopUpOpen,setDamacIsPopUpOpen}}>
      <Layout />
    </MyContext.Provider>
  );
};

export default App;
