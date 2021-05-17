import React from "react";

import Card from "../reusable-components/card";

import "./all_blogs.css";

const AllBlogs = () => {
  return (
    <section id="all-blogs">
      <div className="container">
        <div className="row card-row">
          <div className="card-col col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"images/blog/blog1.jpg"}
              title={"Article title stays here and can take full width"}
              text={"Lorem ipsum dolor sit amet, consec adipiscing elit,"}
              button={"READ MORE"}
              link={"/blog/blog_details"}
            />
          </div>
          <div className=" card-col col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"images/blog/blog2.jpg"}
              title={"Article title stays here and can take full width"}
              text={"Lorem ipsum dolor sit amet, consec adipiscing elit,"}
              button={"READ MORE"}
              link={"/blog/blog_details"}
            />
          </div>
          <div className="card-col col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"images/blog/blog3.jpg"}
              title={"Article title stays here and can take full width"}
              text={"Lorem ipsum dolor sit amet, consec adipiscing elit,"}
              button={"READ MORE"}
              link={"/blog/blog_details"}
            />
          </div>
          <div className="card-col col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"images/blog/blog2.jpg"}
              title={"Article title stays here and can take full width"}
              text={"Lorem ipsum dolor sit amet, consec adipiscing elit,"}
              button={"READ MORE"}
              link={"/blog/blog_details"}
            />
          </div>
          <div className="card-col col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"images/blog/blog4.jpg"}
              title={"Article title stays here and can take full width"}
              text={"Lorem ipsum dolor sit amet, consec adipiscing elit,"}
              button={"READ MORE"}
              link={"/blog/blog_details"}
            />
          </div>
          <div className="card-col col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"images/blog/blog3.jpg"}
              title={"Article title stays here and can take full width"}
              text={"Lorem ipsum dolor sit amet, consec adipiscing elit,"}
              button={"READ MORE"}
              link={"/blog/blog_details"}
            />
          </div>
          <div className="card-col col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"images/blog/blog4.jpg"}
              title={"Article title stays here and can take full width"}
              text={"Lorem ipsum dolor sit amet, consec adipiscing elit,"}
              button={"READ MORE"}
              link={"/blog/blog_details"}
            />
          </div>
          <div className="card-col col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"images/blog/blog1.jpg"}
              title={"Article title stays here and can take full width"}
              text={"Lorem ipsum dolor sit amet, consec adipiscing elit,"}
              button={"READ MORE"}
              link={"/blog/blog_details"}
            />
          </div>
          <div className="card-col col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"images/blog/blog2.jpg"}
              title={"Article title stays here and can take full width"}
              text={"Lorem ipsum dolor sit amet, consec adipiscing elit,"}
              button={"READ MORE"}
              link={"/blog/blog_details"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllBlogs;
