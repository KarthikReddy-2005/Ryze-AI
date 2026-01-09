import React from "react";
import Hero from "../components/Home/Hero";
import Header from "../components/Home/Header";
import Features from "../components/Home/Features";
import Testimonial from "../components/Home/Testimonials";
import CallToAction from "../components/Home/CallToAction";
import Pricing from "../components/Home/Pricing";
import Footer from "../components/Home/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Testimonial />
      <Pricing />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
