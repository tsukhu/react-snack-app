import React, { Component } from 'react';
import Pizza from '../../components/Pizza/Pizza';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import Aux from '../../hoc/AuxComponent/AuxComponent';

export class PizzaBuilder extends Component {
  state = {
    purchasing: false
  };

  componentDidMount() {
    this.props.onInitPizzaIngredients();
  }

  render() {
    return (
      <Aux>
      <div>
        <h1>This is a PizzaBuilder !! </h1>
        <Pizza />
      </div>
      </Aux>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitPizzaIngredients: () => dispatch(actions.initPizzaIngredients())
  };
};

export default connect(null, mapDispatchToProps)(PizzaBuilder);
