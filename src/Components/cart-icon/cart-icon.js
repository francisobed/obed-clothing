import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../assets/11.2 shopping-bag.svg.svg'

import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg.svg';

import './cart-icon.scss'

const CartIcon = () => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
    );

    const mapDispatchToProps = dispatch => ({
        toggleCartHidden: () => dispatch(toggleCartHidden())
    });
    export default connect(
        null,
        mapDispatchToProps
    ) (CartIcon);