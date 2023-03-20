import React from 'react';
import CustomerReviews from '../components/productDetails/CustomerReviews';
import ProductDescription from '../components/productDetails/ProductDescription';
import Newsletter from '../components/shared/Newsletter';
import RelatedProduct from '../components/shared/RelatedProduct';

const ProductDetails = () => {
    return (
        <div>
            <ProductDescription />
            <RelatedProduct />
            <CustomerReviews />
            <Newsletter />
        </div>
    );
};

export default ProductDetails;