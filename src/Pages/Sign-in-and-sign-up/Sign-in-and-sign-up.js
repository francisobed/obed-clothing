import React from 'react';
import SignIn from '../../Components/sign-in/Sign-in'
import SignUp from '../../Components/sign-up/Sign-up'
import './Sign-in-and-sign-up.scss'

const SignInAndSignUp = () => (
        <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
        </div>
    )
export default SignInAndSignUp;