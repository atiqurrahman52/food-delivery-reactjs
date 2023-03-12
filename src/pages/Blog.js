import React from 'react';
import BlogBanner from '../components/blog/BlogBanner';
import FeaturedAndRecentBlog from '../components/blog/FeaturedAndRecentBlog';
import RelatedProduct from '../components/shared/RelatedProduct';

const Blog = () => {
    return (
        <div>
           <BlogBanner />
           <FeaturedAndRecentBlog />
           <RelatedProduct />
        </div>
    );
};

export default Blog;