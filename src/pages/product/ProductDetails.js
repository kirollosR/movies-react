import React from 'react';
import { useParams, useSearchParams } from '../../../node_modules/react-router-dom/dist/index';


const ProductDetails = () => {
    //Hooks {Helper to get the parameter from the routs --> in url}
    let { userId } = useParams();

    //Query params (Filter or Search)
    let [params] = useSearchParams();
    console.log(params.get("sort"));
    //amazon.eg/pages/products/size=sm&price=1000

    //Segments
    //amazon.eg/page/product

    console.log(userId);
    return (
        <div>
            <h1>Product Info:</h1>
        </div>
    );
};

export default ProductDetails;