import React from "react";
import ProjectDetailBanner from "./Banner";
import ProjectDetailsPage from "./Details/index";
import WeTakeProject from "./WeTake";

const BlogPostDetail = () => {
  return (
    <>
      <ProjectDetailBanner />
      <ProjectDetailsPage />
      <WeTakeProject />
    </>
  );
};

export default BlogPostDetail;
