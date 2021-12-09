import React, { useContext } from 'react'
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContex from '../../store/cart-contex';

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContex);
    const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
        return currNumber + item.amount;
    },0);

    return (
        <button className ={classes.button}>
            <span className={classes.icon}>
               < CartIcon/>
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
}

export default HeaderCartButton;