import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {
    console.log(Object.keys(props.ingredients));
    console.log([...Array(props.ingredients['cheese'])]);
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i)=> {
               return <BurgerIngredient key={igKey + i} type={igKey} />
            }); // [,]
        })
        .reduce((arr,el)=> {
            return arr.concat(el)
        },[] );

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;