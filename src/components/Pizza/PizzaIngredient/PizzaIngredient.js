import React, { Component } from 'react';
import classes from './PizzaIngredient.css';
import PropTypes from 'prop-types';

class PizzaIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case 'paprika':
        ingredient = <div className={classes.Paprika} />;
        break;
      case 'pepperoni':
        ingredient = <div className={classes.Pepperoni} />;
        break;
      case 'onion':
        ingredient = <div className={classes.Onion} />;
        break;
      case 'olive':
        ingredient = <div className={classes.Olive} />;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

PizzaIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default PizzaIngredient;
