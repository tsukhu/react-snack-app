import React, { Component } from 'react';
import Pizza from '../../components/Pizza/Pizza';

export class PizzaBuilder extends Component {
  render() {
    return (
      <div>
        <h1>This is a PizzaBuilder !! </h1>
        <Pizza />
      </div>
    );
  }
}

export default PizzaBuilder;
