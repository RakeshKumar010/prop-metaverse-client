import React from "react";
import Navbar from "../components/global/Navbar";
import AgentsSection from "../components/home/AgentsSection";
import Footer from "../components/global/Footer";
import TrendingProjects from "../components/home/TrendingProjects";

const Projects = () => {
  return (
    <>
      <Navbar />
      <TrendingProjects />
      <AgentsSection />
      <Footer />
    </>
  );
};

export default Projects;
