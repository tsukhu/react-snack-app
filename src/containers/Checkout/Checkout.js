import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ContactData from './ContactData/ContactData';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
//import * as actions from '../../store/actions';
class Checkout extends Component {

  // componentWillMount () {
  //   this.props.onInitPurchase();
  // }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    let summary = <Redirect to="/" />;

    if (this.props.ings) {
      const puchasedRedirect = this.props.purchased || this.props.snackType === 'pizza' ? <Redirect to="/" /> : null;

      summary = (
        <div>
          {puchasedRedirect}
          <CheckoutSummary
            ingredients={this.props.ings}
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler}
          />
          <Route
            path={this.props.match.path + '/contact-data'}
            component={ContactData}
          />
        </div>
      );
    }
  //  console.log(summary);
    return summary;
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased,
    snackType: state.order.snackType
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onInitPurchase: () => dispatch(actions.purchaseInit())
//   }
// }

export default connect(mapStateToProps)(Checkout);
