import React from 'react';
import { Context } from 'react';
const CartContex = React.createContext({
    items:[],
    totalAmount: 0,
    addItem:(item)=> {},
    removeitem:(id)=>{}
});

export default CartContex;