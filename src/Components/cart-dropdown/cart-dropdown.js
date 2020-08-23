import React from 'react';

import CustomButton from '../custom-button/Custom-button'

import './cart-dropdown.scss';


const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
)
export default CartDropdown;