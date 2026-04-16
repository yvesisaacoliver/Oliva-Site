import "../styles/Home.css"
import React from 'react'
import Hero from "../components/Hero";
import Navbar from "../components/navbar";
import Footer from "../components/Footer"
import MarketingTabsSection from "../animations/MarketingTabsSection";
import IndustriesSection from "../components/IndustriesSection";
import HowWeAchieveResults from "../components/HowWeAchieveResults";
import GetinTouch from "../components/getInTouch";
import { useEffect } from 'react';


const Home = () => {

  useEffect(() => {
    const scrollToTarget = () => {
      const id = location.state?.scrollTo;
      if (id) {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Delay scroll for component to mount fully
    const timer = setTimeout(scrollToTarget, 200);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="home">
      <Navbar />
      <Hero />
      <MarketingTabsSection />
      <section id="industries-section"><IndustriesSection /></section>
      <HowWeAchieveResults />
      <GetinTouch />
      <Footer />
    </div>
  )
}

export default Home
