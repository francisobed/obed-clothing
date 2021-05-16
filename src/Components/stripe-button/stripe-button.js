import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HLQHYFMYOV4uE2ajCXd16SD3Q6XHV0HIBTqhrbwJycyH9r0b77j79VrTVMCWdv7cBRi5CY42Sx4RBIGGsS721PU00zdA0xF1W';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Jay Clothing LTD'
            billingAddress
            shippingAddressimage='https://svgshare.com/i/CUz.svg'
            description = {`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;