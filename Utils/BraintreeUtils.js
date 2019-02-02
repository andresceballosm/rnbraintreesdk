import Secrets from '../secrets';
//var client = require("braintree-web/client");
const URL = Secrets.API_URL;

// call API in order to retrieve client token from Braintree server
// this version calls a Lambda function
export const getClientToken = () => {
    return fetch(URL, {
      method: "GET"
    }).then(res => {
      let json = res;
      console.log('json en braintreeUtils.js',json);
      return json;
    });
};
export const postPurchase = (nonce, amount, options={}) => {
  console.log("in postPurchase");
  return fetch(URL + "/pay", {
    method: "POST",
    body:  JSON.stringify({
      nonce,
      amount
    })
  }).then(res => {
    let json = res.json();
    console.log(json);
    return json;
  });
};