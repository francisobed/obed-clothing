import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {auth} from '../../firebase/firebase.util'
import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'

import {ReactComponent as Logo} from '../../assets/4.3 crown.svg.svg'
import './headerstyles.scss'

const Header = ({currentUser}) => (
        <div className='header'>
            <Link className='logo-container' to='/'>
               <Logo className='logo' />
            </Link>
            <div className='options'>
            <Link className='option' to='/shop'>
            SHOP
            </Link>
            <Link className='option' to='/contact'>
            CONTACT
            </Link>
            {
                currentUser ? 
                <div className='option' onClick={() => auth.signOut()}> SIGN OUT</div>
                :
                <Link className='option' to='/signin'> SIGN IN</Link>              
            }
            <CartIcon />
            </div>
            <CartDropdown />
        </div>
    )
    
    const mapStateToProps = state => ({
        currentUser: state.user.currentUser
    })
    export default connect(mapStateToProps)(Header);