import React from 'react';
import './OrderSummary.css';

const OrderSummary = (props) => {
    const { cart } = props;

    return (
        <div className='bg-[#FF990080] min-h-full p-5 py-20 '>

            <div className='flex flex-col gap-4'>
                <h1 className='text-center mb-3 text-xl font-black'>Order Summary</h1>

                <p>Selected Items: {cart.length}</p>
                <p>Total Price: $234</p>
                <p>Total Shipping Charge: $4</p>
                <p>Tax: $114</p>

                <h1 className='font-bold'>Grand Total: $1556</h1>

                <button className="btn bg-[#35902d] text-[#fff] border-0">Continue to Checkout
                </button>
                <button className="btn bg-[#dd3838] text-[#fff] border-0">Clear Cart
                </button>
            </div>



        </div >


    );
};

export default OrderSummary;