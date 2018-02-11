import React from 'react';

import Burger from '../../Burger/Burger';
import Pizza from '../../Pizza/Pizza';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';
const checkoutSummary = (props) => {
    let snack = <Burger ingredients={props.ingredients}/>;
    if (props.snackType === 'pizza') {
        snack = <Pizza ingredients={props.ingredients}/>;
    }
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
            {snack}
                </div>
                <Button 
                btnType="Danger"
                clicked={props.checkoutCancelled}>CANCEL</Button>
                <Button 
                btnType="Success"
                clicked={props.checkoutContinued}>CONTINUE</Button>
            </div>
    );
}

export default checkoutSummary;