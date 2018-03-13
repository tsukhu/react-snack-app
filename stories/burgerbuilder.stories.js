import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Burger from '../src/components/Burger/Burger';
import { Button, Welcome } from '@storybook/react/demo';

const ingredients = {
  salad: 1,
  cheese: 1,
  meat: 1,
  bacon: 1
};

const noIngredients = {
  salad: 0,
  cheese: 0,
  meat: 0,
  bacon: 0
};

storiesOf('Burger', module)
  .add('with all ingredients', () => <Burger ingredients={ingredients} />)
  .add('without any ingredients',() => <Burger ingredients={noIngredients} />);