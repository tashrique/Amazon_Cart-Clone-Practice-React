import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
    const { product, handleAddToCart } = props;
    const { name, price, seller, ratings, img } = product;

    return (
        <div>
            <div className="rounded-t-md p-3 border border-solid border-neutral-400">

                <img src={img} alt="" className="w-[286px] rounded-md mx-auto" />
                <h2 className="font-semibold text-xs my-1 ">{name}</h2>
                <p className="text-[11px] mb-5">Price: $ {price}</p>
                <p className="text-[9px] font-normal ">Manufacturer: {seller}</p>
                <p className="text-[9px] font-normal ">Rating: {ratings} star</p>



            </div>


            <button className="bg-[#FF990080] text-white py-3 px-2 rounded-b-md w-full border-b border-r border-l border-solid font-normal text-[10px] border-neutral-400 add-to-cart" onClick={() => handleAddToCart(product)}>Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} className='ml-2' />



            </button>
        </div>
    );
};

export default Product;