import React from 'react';
import PizzaIngredient from './PizzaIngredient/PizzaIngredient';
import classes from './Pizza.css';

const pizza = props => {
  return (
    <div className={classes.Container}>
      <div className={classes.Pizza}>
        <div className={classes.Crust}>
          <div className={classes.Toppings}>
            <PizzaIngredient type="paprika" />
            <PizzaIngredient type="pepperoni" />
            <PizzaIngredient type="onion" />
            <PizzaIngredient type="olive" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default pizza;
