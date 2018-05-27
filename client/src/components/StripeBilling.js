import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class StripeBilling extends Component {
  render() {
    return (
      <StripeCheckout
        name="How's My App?"
        description="5 Survey Credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="nav-center add-credits-btn btn white-text">
          Add Credits
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(StripeBilling);
