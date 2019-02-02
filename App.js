import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import Payment from './Components/Payments';
import * as brainTreeUtils from "./Utils/BraintreeUtils";
import PropTypes from "prop-types";


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      clientToken: ""
    };
  }
  
  componentDidMount = () => {
    console.log('llego')
    brainTreeUtils.getClientToken({
        merchantAccountID: null,
        customerID: ''
    })
    .then(response => {
    console.log('este es el repsonde',response.status);
    if (response.type === "default") {
        console.log('paso1');
        let clientToken = response._bodyInit;
        this.setState({clientToken});
    }else{
      console.log('porque no pasa');
    }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Payment token={this.state.clientToken}  />
      </View>
    );
  }
}

App.propTypes = {
  options: PropTypes.object,
  clientToken: PropTypes.string.isRequired,
};

App.defaultProps = {
  options: {}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
