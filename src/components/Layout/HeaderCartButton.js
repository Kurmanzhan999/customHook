import React, { useContext, useEffect, useState } from 'react'
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContex from '../../store/cart-contex';

const HeaderCartButton = props => {
    const [btnisHidhLited,setBtnisHidhLited] = useState(false)
    const cartCtx = useContext(CartContex);

    // useEffect(()=> {
    //     if(items.length === 0) {
    //         setBtnisHidhLited(true);
    //         const timer = setTimeout(()=> {
    //             setBtnisHidhLited(false)
    //         }, 3000);
    //         return ()=> {
    //             clearTimeout(timer)
    //         }
    //     }
    // },[items])

    const {items} = cartCtx;
    const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
        return currNumber + item.amount;
    },0);
    const btnClasses = `${classes.button} ${btnisHidhLited ? classes.bump : ''}`

    return (
        <button className ={btnClasses} onClick={props.onClick}>
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