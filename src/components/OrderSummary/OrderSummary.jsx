import React from 'react';
import './OrderSummary.css';
import { deleteShoppingCart } from '../../utilities/fakedb';

const OrderSummary = (props) => {
    const { cart } = props;

    let quantity = 0;
    let total = 0;
    let shipping = 0;

    for (const product of cart) {
        quantity += product.quantity;
        total += product.price * product.quantity;
        shipping += product.shipping * product.quantity;
    }
    const tax = (total * 0.065).toFixed(2);

    const grandTotal = total + shipping + parseFloat(tax);

    return (
        <div className='bg-[#FF990080] min-h-full p-5 py-20 '>

            <div className='flex flex-col gap-4'>
                <h1 className='text-center mb-3 text-xl font-black'>Order Summary</h1>

                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>

                <h1 className='font-bold'>Grand Total: ${grandTotal}</h1>

                <button className="btn bg-[#35902d] text-[#fff] border-0">Continue to Checkout
                </button>
                <button className="btn bg-[#dd3838] text-[#fff] border-0" onClick={deleteShoppingCart}>Clear Cart
                </button>
            </div>



        </div >


    );
};

export default OrderSummary;