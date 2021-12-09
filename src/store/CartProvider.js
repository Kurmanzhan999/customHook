import CartContex from './cart-contex';
import { useContext } from 'react';
import { useReducer } from 'react';

const defaultState = {
    items: [],
    totalAmount:0
};
const cartReducer = (state,action) => {
    if(action.type === 'ADD'){
        const updateItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount +action.item.price * action.item.amount;
        return {
            items: updateItems,
            totalAmount: updatedTotalAmount,
        }
    }
}

const CartProvider = props => {
    const cartCtx= useContext(CartContex);
    const[cartState, dispatchCart] =useReducer(cartReducer,defaultState);

    const addItemToCardHandler = item => {
        dispatchCart({type: 'ADD',item: item})
    };
    const removeItemFromCartHandler = id => {
        dispatchCart({type: 'REMUVE',id: id})
    };
    const cartContext = {
        items: cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: addItemToCardHandler,
        removeitem: removeItemFromCartHandler
    }
    return <CartContex.Provider value={cartContext}>
        {props.children}
    </CartContex.Provider>
}

export default CartProvider;