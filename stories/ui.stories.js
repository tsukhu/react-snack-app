import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Spinner from '../src/components/UI/Spinner/Snipper';
import OrderSummary from '../src/components/Burger/OrderSummary/OrderSummary';
import Input from '../src/components/UI/Input/Input';
import Modal from '../src/components/UI/Modal/Modal';
import Button from '../src/components/UI/Button/Button';

const ingredients = {
  salad: 1,
  cheese: 1,
  meat: 1,
  bacon: 1
};

const state = {
  controls: {
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'Mail Address'
      },
      value: '',
      validation: {
        required: true,
        isEmail: true
      },
      valid: false,
      touched: false
    },
    password: {
      elementType: 'input',
      elementConfig: {
        type: 'password',
        placeholder: 'Password'
      },
      value: '',
      validation: {
        required: true,
        minLength: 6
      },
      valid: false,
      touched: false
    }
  },
  isSignup: true
};

const formElementsArray = [];
for (let key in state.controls) {
  formElementsArray.push({
    id: key,
    config: state.controls[key]
  });
}

storiesOf('UI Components', module)
  .add('spinner', () => <Spinner />)
  .add('Modal Dialog', () => (
    <Modal show={true} modalClosed={action('clicked')}>
      <OrderSummary
        ingredients={ingredients}
        purchaseCanceled={action('clicked')}
        purchaseContinue={action('clicked')}
        price={5.55}
        snackType="burger"
      />
    </Modal>
  ))
  .add('Input', () => (
    formElementsArray.map(formElement => (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          changed={action('clicked')}
        />
      ))
  ))
  .add('Button Success', () => (
    <Button clicked={action('clicked')} btnType="Success">
    CONTINUE
  </Button>
  ))
  .add('Button Danger', () => (
    <Button clicked={action('clicked')} btnType="Danger">
    CANCEL
  </Button>
  ))
