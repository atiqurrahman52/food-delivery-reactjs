import React from 'react';
import BlogDescription from '../components/blogDetails/BlogDescription';
import BlogDetailsBanner from '../components/blogDetails/BlogDetailsBanner';
import UsefulTips from '../components/blogDetails/UsefulTips';

const BlogDetail = () => {
    return (
        <div>
            <BlogDetailsBanner />
            <BlogDescription />
            <UsefulTips />
        </div>
    );
};

export default BlogDetail;