import React from 'react';
import PizzaIngredient from './PizzaIngredient/PizzaIngredient';
import classes from './Pizza.css';

const pizza = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <PizzaIngredient key={igKey + i} type={igKey} />;
      }); // [,]
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }

  return (
    <div className={classes.Container}>
      <div className={classes.Pizza}>
        <div className={classes.Crust}>
          <div className={classes.Toppings}>
          {transformedIngredients}
          </div>
        </div>
      </div>
    </div>
  );
};

export default pizza;
