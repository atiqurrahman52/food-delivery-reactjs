import React from 'react';
import ProductDescription from '../components/productDetails/ProductDescription';
import Newsletter from '../components/shared/Newsletter';
import RelatedProduct from '../components/shared/RelatedProduct';

const ProductDetails = () => {
    return (
        <div>
            <ProductDescription />
            <RelatedProduct />
            <Newsletter />
        </div>
    );
};

export default ProductDetails;