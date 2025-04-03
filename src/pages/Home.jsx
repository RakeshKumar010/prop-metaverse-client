 
import Navbar from "../components/global/Navbar";
import HeroSection from "../components/home/HeroSection";
import AgentsSection from "../components/home/AgentsSection";
import Footer from "../components/global/Footer";
import RealEstateDeals from "../components/home/RealEstateDeals";
import PopularProperties from "../components/home/PopularProperties";
import ContactUs from "../components/home/ContactUs";
import { useState } from "react";
 

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection  />
      <RealEstateDeals />
      <PopularProperties />
      <ContactUs />
      <AgentsSection />
      <Footer />
    </>
  );
};

export default Home;
