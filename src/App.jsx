import React, { createContext, useEffect, useState } from "react";
import Layout from "./Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const MyContext = createContext();
const baseUrl = import.meta.env.VITE_APP_URL;

const App = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [damacIsPopUpOpen, setDamacIsPopUpOpen] = useState(false);
  const [propertyData, setPropertyData] = useState();
  const [formData, setFormData] = useState({
    // Basic Property Information
    title: "",
    description: "",
    propertyType: "",
    status: "",
    constructionYear: "",
    price: [],
    discount: "",

    // Media
    galleryImg: [{ name: "" }],

    // Location Details
    address: "",
    state: "",
    city: "",

    //Details
    floorPlan: [{ type: "", carpetArea: "", price: "" }],
    faqs: [{ question: "", answer: "" }],

    // keyword
    keywords: [{ heading: "", keyword: [] }],

    // amenities
    amenities: [],
  });

  useEffect(() => {
    const getFun = async () => {
      let result = await fetch(baseUrl + "/property");
      result = await result.json();
      setPropertyData(result.reverse());
    };
    getFun();
  }, []);

  return (
    <MyContext.Provider
      value={{
        formData,
        setFormData,
        isPopUpOpen,
        setIsPopUpOpen,
        damacIsPopUpOpen,
        setDamacIsPopUpOpen,
        propertyData,
        setPropertyData,
      }}
    >
      <Layout />
    </MyContext.Provider>
  );
};

export default App;
