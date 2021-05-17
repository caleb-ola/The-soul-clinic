import React from "react";

import Header from "../header";
import Footer from "../footer";
import Heroes from "../reusable-components/heroes";
import "./blog.css";
import AllBlogs from "./all_blogs";
import Pagination from "./pagination";

const Blog = () => {
  return (
    <div>
      <Header />
      <Heroes
        title={"Blog"}
        text={
          "We thought you might have a few questions on how to make the most of our platform; so here are some of our FAQs but if you don’t find a satisfactory answer, feel free to shoot us a message below."
        }
        image={"images/blog/blog-hero.png"}
      />
      <AllBlogs />
      <Pagination />
      <Footer />
    </div>
  );
};

export default Blog;
