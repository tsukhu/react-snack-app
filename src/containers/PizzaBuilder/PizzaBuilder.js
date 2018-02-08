import React, { Component } from 'react';
import Pizza from '../../components/Pizza/Pizza';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import Aux from '../../hoc/AuxComponent/AuxComponent';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Snipper';

import BuildControls from '../../components/BuildControls/BuildControls';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

export class PizzaBuilder extends Component {
  state = {
    purchasing: false
  };

  componentDidMount() {
    this.props.onInitPizzaIngredients();
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  }

  purchaseHandler = () => {
    if (this.props.isAuthenticated) {
      this.setState({ purchasing: true });
    } else {
      this.props.onSetAuthRedirectPath('/checkout');
      this.props.history.push('/auth');
    }
    
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.props.onInitPurchase();
    this.props.history.push('/checkout');
  };

  render() {
    const disabledInfo = {
      ...this.props.ings
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;
    let pizza = this.props.error ? (
      <p>Ingredients can't be loaded</p>
    ) : (
      <Spinner />
    );

    if (this.props.ings) {
      pizza = (
        <Aux>
          <Pizza ingredients={this.props.ings} />
          <BuildControls
            snackType='pizza'
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            purchaseable={this.updatePurchaseState(this.props.ings)}
            price={this.props.price}
            ordered={this.purchaseHandler}
            isAuth={this.props.isAuthenticated}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          purchaseCanceled={this.purchaseCancelHandler}
          purchaseContinue={this.purchaseContinueHandler}
          price={this.props.price}
        />
      );
    }
    
    return (      
    <Aux>
      <Modal
        show={this.state.purchasing}
        modalClosed={this.purchaseCancelHandler}
      >
        {orderSummary}
      </Modal>
      {pizza}
    </Aux>);
  
  }
}
const mapStateToProps = state => {
  return {
    ings: state.pizzaBuilder.ingredients,
    price: state.pizzaBuilder.totalPrice,
    error: state.pizzaBuilder.error,
    isAuthenticated: state.auth.token !== null,
    building: state.pizzaBuilder.building
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: ingName => dispatch(actions.addPizzaIngredient(ingName)),
    onIngredientRemoved: ingName => dispatch(actions.removePizzaIngredient(ingName)),
    onInitPizzaIngredients: () => dispatch(actions.initPizzaIngredients()),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
    onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withErrorHandler(PizzaBuilder, axios)
);
