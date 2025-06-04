import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Features from "./components/Features";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Offer from "./components/Offer"; 

import "./index.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      offset: 120,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Features />
      <Offer />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
