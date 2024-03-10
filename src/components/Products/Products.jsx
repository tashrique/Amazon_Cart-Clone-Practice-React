import React, { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';


const Products = (props) => {
    const { handleAddToCart, products } = props;






    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 my-20 md:mx-10 lg:mx-20 products-container'>
            {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}></Product>)
            }
        </div>
    );
};

export default Products;