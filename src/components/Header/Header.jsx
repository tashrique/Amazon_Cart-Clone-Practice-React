import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className="bg-amz flex items-center justify-between px-20 py-3 w-full">
            <a href="#"><img src={logo} alt="" className="w-16" /></a>

            <div className="flex gap-4">
                <a href="/Order">Order</a>
                <a href="/Order-Review">Order Review</a>
                <a href="/Manage-Inventory">Manage Inventory</a>
                <a href="/Login">Login</a>
            </div>

        </nav>
    );
};

export default Header;