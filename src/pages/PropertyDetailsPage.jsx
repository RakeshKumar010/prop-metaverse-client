import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MyContext } from "../App";
import Navbar from "../components/global/Navbar";
import AgentsSection from "../components/home/AgentsSection";
import Footer from "../components/global/Footer";
import Gallery from "../components/property-details/Gallery";
import PropertyHeader from "../components/property-details/PropertyHeader";
import Overview from "../components/property-details/Overview";
import Enquiry from "../components/property-details/Enquiry";
import Description from "../components/property-details/Description";
import Amenities from "../components/property-details/Amenities";
import Faq from "../components/property-details/Faq";
const baseUrl = import.meta.env.VITE_APP_URL;

const PropertyDetailsPage = () => {
  const [propertyDetails, setPropertyDetails] = useState({});
  const { setSiteName } = useContext(MyContext);
  const { pathname } = useLocation();
  const id = pathname.split("/").pop();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const getFun = async () => {
      let response = await fetch(baseUrl + "/single-property/" + id);
      response = await response.json();
      // console.log(response.rera && response.rera);
      setPropertyDetails(response);
      setSiteName(response.title);
      document.title =
        response.title + "PROP METAVERSE PRIVATE LIMITED | PROPERTY DETAILS";
    };

    getFun();
  }, [id]);

  return (
    <div>
      <Navbar />
      <Gallery
        galleryImg={
          propertyDetails.galleryImg ? propertyDetails.galleryImg : []
        }
      />
      <div className="px-6 md:px-10 lg:px-40 py-4 rounded -mt-32 grid lg:grid-cols-3 grid-cols-2 gap-6 w-full">
        <div className="  col-span-2 rounded ">
          <PropertyHeader />
          <Overview />
          <Description description={propertyDetails.description?propertyDetails.description:''}/>
          <Amenities amenities={propertyDetails.amenities} />
          <Faq faqs={propertyDetails.faqs?propertyDetails.faqs:[]}/>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Enquiry />
        </div>
      </div>
      <AgentsSection />
      <Footer />
    </div>
  );
};

export default PropertyDetailsPage;
