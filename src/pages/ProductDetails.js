import React from 'react';
import { useParams } from 'react-router-dom';
import CustomerReviews from '../components/productDetails/CustomerReviews';
import ProductDescription from '../components/productDetails/ProductDescription';
import Newsletter from '../components/shared/Newsletter';
import RelatedProduct from '../components/shared/RelatedProduct';
import { productData } from '../data/sharedData/productData';

const ProductDetails = () => {
    const {id} = useParams();
    const singleProduct = productData?.find((item) => item.id === parseInt(id));
    return (
        <div>
            <ProductDescription singleProduct={singleProduct} />
            <RelatedProduct />
            <CustomerReviews />
            <Newsletter />
        </div>
    );
};

export default ProductDetails;