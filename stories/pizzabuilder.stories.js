import React from 'react';

import { storiesOf } from '@storybook/react';
import Pizza from '../src/components/Pizza/Pizza';

const ingredients = {
  paprika: 1,
  pepperoni: 1,
  onion: 1,
  olive: 1
};

const noIngredients = {
  paprika: 0,
  pepperoni: 0,
  onion: 0,
  olive: 0
};

storiesOf('Pizza', module)
  .add('with all ingredients', () => <Pizza ingredients={ingredients} />)
  .add('without any ingredients',() => <Pizza ingredients={noIngredients} />);