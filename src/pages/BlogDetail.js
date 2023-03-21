import React from "react";
import { useParams } from "react-router-dom";
import BlogDescription from "../components/blogDetails/BlogDescription";
import BlogDetailsBanner from "../components/blogDetails/BlogDetailsBanner";
import UsefulTips from "../components/blogDetails/UsefulTips";
import { featuredData } from "../data/blog/featuredData";
import { recentPostData } from "../data/blog/recentPostData";

const BlogDetail = () => {
  const { id } = useParams();
  const singleBlog = featuredData?.find((item) => item.id === parseInt(id));
  const singleBlog2 = recentPostData?.find((item) => item.id === parseInt(id));

  //   console.log(singleBlog);
  return (
    <div>
      <BlogDetailsBanner data={[singleBlog, singleBlog2]} />
      <BlogDescription />
      <UsefulTips />
    </div>
  );
};

export default BlogDetail;
