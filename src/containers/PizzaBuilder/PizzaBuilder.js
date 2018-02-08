import React, { Component } from 'react';
import Pizza from '../../components/Pizza/Pizza';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import Aux from '../../hoc/AuxComponent/AuxComponent';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Snipper';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

export class PizzaBuilder extends Component {
  state = {
    purchasing: false
  };

  componentDidMount() {
    this.props.onInitPizzaIngredients();
  }

  render() {
    let pizza = this.props.error ? (
      <p>Ingredients can't be loaded</p>
    ) : (
      <Spinner />
    );

    if (this.props.ings) {
      pizza = (
        <Aux>
          <Pizza ingredients={this.props.ings} />
        </Aux>
      );
    }
    
    return (<Aux>{pizza}</Aux>);
  
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
    onInitPizzaIngredients: () => dispatch(actions.initPizzaIngredients())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withErrorHandler(PizzaBuilder, axios)
);
