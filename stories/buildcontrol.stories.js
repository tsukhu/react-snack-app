import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import BuildControls from '../src/components/BuildControls/BuildControls';

const burgerIngredients = {
  salad: 1,
  cheese: 1,
  meat: 1,
  bacon: 1
};

const pizzaIngrediens = {
  paprika: 1,
  pepperoni: 1,
  onion: 0,
  olive: 0
}



const disabledBurgerInfo = {
  ...burgerIngredients
};

for (let key in disabledBurgerInfo) {
  disabledBurgerInfo[key] = disabledBurgerInfo[key] <= 0;
}


const disabledPizzaInfo = {
  ...burgerIngredients
};

for (let key in disabledPizzaInfo) {
  disabledPizzaInfo[key] = disabledPizzaInfo[key] <= 0;
}

storiesOf('Build Controls', module)
  .add('burger build controls', () => {
    return (
    <BuildControls
            snackType='burger'
            ingredientAdded={action('clicked')}
            ingredientRemoved={action('clicked')}
            disabled={disabledBurgerInfo}
            purchaseable={true}
            price={2.5}
            ordered={action('clicked')}
            isAuth={true}
    />);
  })
  
  .add('pizza build controls', () => {
    return (
    <BuildControls
            snackType='pizza'
            ingredientAdded={action('clicked')}
            ingredientRemoved={action('clicked')}
            disabled={disabledPizzaInfo}
            purchaseable={true}
            price={5.02}
            ordered={action('clicked')}
            isAuth={true}
    />);
  })