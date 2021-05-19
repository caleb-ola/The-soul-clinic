import React from "react";

import Header from "../header";
import Footer from "../footer";
import Pagination from "../reusable-components/pagination";
import Heroes from "../reusable-components/heroes";
import AllVideos from "./all_videos";
import "./video.css";

const Video = () => {
  return (
    <div>
      <Header />
      <Heroes
        image={"/images/videos/video-header.png"}
        title={"Videos"}
        text={
          "We have curated some really inspiring videos that could help you along on your journey to wholeness."
        }
      />
      <AllVideos />
      <Pagination />
      <Footer />
    </div>
  );
};

export default Video;
