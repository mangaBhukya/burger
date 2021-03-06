import React from 'react';

import classes from './Burger.module.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredient)
        .map(igkey => {
            return [...Array(props.ingredient[igkey])].map( (_,i) => {
                return <BurgerIngredient ingredientType={igkey} key={igkey+i} />;
            })
        }).reduce((arr, currElement) => {
            return [...arr,...currElement]//arr.concat(currElement);
        }, []);
    
    // console.log(transformedIngredients);

    if( transformedIngredients.length === 0 ) {
        transformedIngredients = <p> Please start adding ingredients !!! </p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient ingredientType='bread-top' />
            {transformedIngredients}
            <BurgerIngredient ingredientType="bread-bottom" />
        </div>  
    )
}

export default Burger;