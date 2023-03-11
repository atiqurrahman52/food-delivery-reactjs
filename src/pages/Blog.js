import React from 'react';
import BlogBanner from '../components/blog/BlogBanner';
import FeaturedAndRecentBlog from '../components/blog/FeaturedAndRecentBlog';

const Blog = () => {
    return (
        <div>
           <BlogBanner />
           <FeaturedAndRecentBlog />
        </div>
    );
};

export default Blog;