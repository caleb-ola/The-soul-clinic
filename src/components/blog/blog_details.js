import React from "react";

import Header from "../header";
import Footer from "../footer";
import DetailHero from "../reusable-components/detail_hero";

import "./blog_details.css";

const BlogDetails = () => {
  return (
    <div>
      <Header />
      <DetailHero
        image={"/images/blog/blog-detail-hero.png"}
        text={"CATEGORY 1 - FEATURED"}
        title={
          "The importance of mental health to having a successful marriage."
        }
        imageTwo={"/images/blog/Ellipse.png"}
        author={"Dayo Salako"}
        date={"February 24, 2021"}
      />
      <Footer />
    </div>
  );
};

export default BlogDetails;
