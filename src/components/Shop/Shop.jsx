import React from 'react';

import Products from '../Products/Products';
import OrderSummary from '../OrderSummary/OrderSummary';
import { useState, useEffect } from 'react';
import { addToDb, removeFromDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';


const Shop = () => {

    const [cart, setCart] = useState([]);

    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    useEffect(() => {
        const savedCart = getShoppingCart();
        const savedCartProducts = [];
        for (const id in savedCart) {
            const addedProduct = products.find(product => product.id === id);
            console.log(addedProduct);
            if (addedProduct) {
                addedProduct.quantity = savedCart[id];
                savedCartProducts.push(addedProduct);
            }
        }
        setCart(savedCartProducts)

    }, [products]);

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exist = cart.find(product => product.id === selectedProduct.id);
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        setCart(newCart);
        addToDb(selectedProduct.id)
    }

    return (
        <div className="grid grid-cols-5">
            <div className='col-span-4'>
                <Products handleAddToCart={handleAddToCart} products={products}></Products>
            </div>

            <div className='col-span-1'>
                <OrderSummary cart={cart}></OrderSummary>
            </div>

        </div>
    );
};

export default Shop;