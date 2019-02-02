import React, {Component} from 'react';
import BraintreeDropIn from 'react-native-braintree-payments-drop-in';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

const braintreePayment = (token) => {
    BraintreeDropIn.show({
        clientToken: token,
        googlePay: false,
        applePay: false,
      })
      .then(result => console.log(result))
      .catch((error) => {
        if (error.code === 'USER_CANCELLATION') {
          // update your UI to handle cancellation
        } else {
          // update your UI to handle other errors
        }
    });
}


const Payment = (props) => {
    console.log('esto es props',props);
    return(
        <View>
        <Button
        title="Pagar"
       onPress={braintreePayment(props.token)} 
        />
        </View>
    )  
}

export default Payment;
