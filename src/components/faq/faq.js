import React from "react";

import Header from "../header";
import Footer from "../footer";
import Heroes from "../reusable-components/heroes";
import Questions from "./questions";
import Feedback from "./feedback";
import "./faq.js";

const Faq = () => {
  return (
    <div>
      <Header />
      <Heroes
        image={"images/FAQS/faq-hero.png"}
        title={"Frequently Asked Questions"}
        text={
          "We thought you might have a few questions on how to make the most of our platform; so here are some of our FAQs but if you don’t find a satisfactory answer, feel free to shoot us a message below."
        }
      />
      <Questions />
      <Feedback />
      <Footer />
    </div>
  );
};

export default Faq;
