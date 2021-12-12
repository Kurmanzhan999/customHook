import CartContex from './cart-contex';
import { useContext } from 'react';
import { useReducer } from 'react';

// initial satate: we have two big states: items and totalamount
const defaultState = {
    items: [],
    totalAmount:0,
    // isOrdered: false
};

const cartReducer = (state,action) => {
    //dispachtan kelgen type mn sravnivaem,esli ravno bolso:
    if(action.type === 'ADD'){
        //baasyna jarasha sanyn koshup = updatedTotalAmount degen peremennyiga salyp ,object kaitaryp jatabyz
        const updatedTotalAmount = state.totalAmount +action.item.price * action.item.amount;
        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.item.id
            //user tandagan itemdardy idsi  mn salyshtyryp,
        );

        const existingCartItem = state.items[existingCartItemIndex]; //tandalgan indexterdi saktap beret
        let updatedItems;

        if(existingCartItem) { //if biz tandagan nerse bar bolso(existingCartItem) ,any updateditemge ...copy kylyp, amount degen svoistvosu menen saktait
           const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount = action.item.amount
            } 
            updatedItems = [...state.items]; //tut v massive ,my kopiruem starye items steita
            updatedItems[existingCartItemIndex] = updatedItem; // murunku biz index menen tapkan itemdardy ,updateditemga almahtyryp jatabyz al amountun koshup berip jatat
        }else {
            updatedItems= state.items.concat(action.item) 
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
    }

    if(action.type === 'REMOVE'){
        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];//bul peremennyida, tabylgan existingCartItemIndex ti berip,saktap koiup jatabyz
        const updatedTotalAmount = state.totalAmount - existingItem.price; //obshuyo summu minusuem smotrya na price,  2 item bolso oshonun biroosun alyp koio turgan bolso,price ty kosho minusuet
        let updatedItems;
        if(existingItem.amount === 1) { // item bar bolso, id ge karap udolyaem
            updatedItems = state.items.filter (item => item.id !== action.id)
        }else {
            const updatedItem = {...existingItem, amount: existingItem.amount - 1};
            updatedItems = [...state.items];// bashka peremennyiga,kalgan ozgorulgan itemdrdy kopiruem
            updatedItems[existingCartItemIndex] = updatedItem; //existingCartItemIndex di updatedItem ge almashtyryp koiup jatabyz
        }
       
        return {
            items: updatedItems,  //dipatchka otvet kylyp,vozvrashaem eti objects 
            totalAmount:updatedTotalAmount
        }

    }
}

const CartProvider = props => {
    const cartCtx= useContext(CartContex);
    const[cartState, dispatchCart] =useReducer(cartReducer,defaultState);

    const addItemToCardHandler = item => {
        dispatchCart({type: 'ADD',item: item})
        // dispatch vsegda pustoi object ,obezatel'noe svoistvo type: kandai deistvie atkarsa oshondoi nazvanie berebiz e.g ADD i eshe odno svoistvo chto my dobovlyaem 
    };
    const removeItemFromCartHandler = id => {
        dispatchCart({type: 'REMUVE',id: id})
      // dispatch vsegda pustoi object  ,obezatel'noe svoistvo type: kandai deistvie atkarsa oshondoi nazvanie berebiz e.g REMOVE i eshe odno svoistvo chto my udolyaem,idge karap budem udolyat'
    };
  
    const cartContext = {  //vremmennoe hranilishe,k-e hranit sebe akyualnye znachenie k-e potom budem ispol'zovat'
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