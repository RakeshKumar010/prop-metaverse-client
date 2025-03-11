import React, { createContext, useState } from "react";
import Layout from "./Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const MyContext = createContext();
const App = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [damacIsPopUpOpen, setDamacIsPopUpOpen] = useState(false);
  const [damacOtpPopUpOpen, setDamacOtpPopUpOpen] = useState(false);
  const [damacDetailsIsPopUpOpen, setDamacDetailsIsPopUpOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    city: "",
    country: "",
    interestedIn: "",
    interestType: "",
    plannedWindow: "",
    budget: "",
    acceptUpdates: false,
  });
  return (
    <MyContext.Provider
      value={{
        formData,
        setFormData,
        isPopUpOpen,
        setIsPopUpOpen,
        damacIsPopUpOpen,
        damacOtpPopUpOpen,
        setDamacIsPopUpOpen,
        setDamacOtpPopUpOpen,
        damacDetailsIsPopUpOpen,
        setDamacDetailsIsPopUpOpen,
      }}
    >
      <Layout />
    </MyContext.Provider>
  );
};

export default App;
