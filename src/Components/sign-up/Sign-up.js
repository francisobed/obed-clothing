import React from 'react'

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/Custom-button';

import {auth, createUserProfileDocument } from '../../firebase/firebase.util';
import './Sign-up.scss';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    //handleSubmit function
    handleSubmit = async (e) =>{
        e.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword ){
            alert(`passwords don't` );
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password)

            createUserProfileDocument(user, {displayName})

            this.state={
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        }catch(error){
            console.log(error);
        }
    };

    //handleChange function
    handleChange = event => {
        const {name, value } = event.target;

        this.setState({ [name]: value})
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        const forms = [
            {id:'1', type:'text', name: 'displayName', value: displayName, label: 'Display Name'},
            {id:'2', type:'email', name: 'email', value: email, label: 'Email'},
            {id:'3', type:'password', name: 'password', value: password, label: 'password'},
            {id:'4', type:'password', name: 'confirmPassword', value: confirmPassword, label: 'Confirm Password'}
        ]
        return(
            <div className='sign-up'>
               <h2 className='title'> I do not Have an account</h2>
               <span>Sign up with your emailand password</span>
               <form className='sign-up-form' onSubmit={this.handleSubmit}>
               {
                  forms.map(form =>(
                    <FormInput
                    key={form.id} 
                    type={form.type} 
                    name={form.name} 
                    value={form.value}
                    onChange={this.handleChange}
                    label={form.label}
                    required
                />
                  ))
               }
               <CustomButton type='submit'> SIGN UP</CustomButton> 
               

               </form>

            </div>
        )
    }
}

export default SignUp;