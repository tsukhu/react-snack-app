import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = {
    burger:  [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
    ],
    pizza: [
        { label: 'Olive', type: 'olive'},
        { label: 'Onion', type: 'onion'},
        { label: 'Paprika', type: 'paprika'},
        { label: 'Pepperoni', type: 'pepperoni'},
    ]
};

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong> </p>
        {controls[props.snackType].map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            removed={() => props.ingredientRemoved(ctrl.type)}
            added={() => props.ingredientAdded(ctrl.type)}
            disabled={props.disabled[ctrl.type]}/>
        ))}
        <button 
        className={classes.OrderButton}
        disabled={!props.purchaseable}
        onClick={props.ordered}
        >{props.isAuth ? 'ORDER NOW': 'SIGNUP TO ORDER'}</button>
    </div>
);

export default buildControls;