import React from "react";

// Components
import Header from "../components/header";
import Hero from "../components/home/hero";
import Soulful from "../components/home/soulful";
import Testimonial from "../components/home/testimonial";
import Plans from "../components/home/plans";
import Why from "../components/home/why";
import Faq from "../components/home/faq";
import Events from "../components/home/events";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <Soulful />
      <Testimonial />
      <Plans />
      <Why />
      <Faq />
      <Events />
      <Footer />
    </div>
  );
};

export default Home;
