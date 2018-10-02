import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import "./components/Form/form.css";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    // User clicked submit
  }

  render() {
    return (
      <div className="checkout">
        <p>Payment total Amount</p>
        <input placeholder="Total"/>
        <input placeholder="Payment to" />
        <input placeholder="Account Number"/>
        <input placeholder="Routing Number"/>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
