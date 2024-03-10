import React from 'react';

import Products from '../Products/Products';
import OrderSummary from '../OrderSummary/OrderSummary';
import { useState } from 'react';

const Shop = () => {

    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        console.log(newCart);
        setCart(newCart);
    }

    return (
        <div className="grid grid-cols-5">
            <div className='col-span-4'>
                <Products handleAddToCart={handleAddToCart}></Products>
            </div>

            <div className='col-span-1'>
                <OrderSummary cart={cart}></OrderSummary>
            </div>

        </div>
    );
};

export default Shop;