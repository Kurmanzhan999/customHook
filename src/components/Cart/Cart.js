import { useCallback, useContext } from 'react'
import CartContex from '../../store/cart-contex'
import CartProvider from '../../store/CartProvider'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartItem from './CartItem'
const Cart = props => {
const cartCtx= useContext(CartContex);
const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
const hasItems = cartCtx.items.length > 0;
    // const cartItem = <ul className={classes['cart-items']}>
    //     {
    //         [{id: 'c1',name:'sushi',amount:2,price:12.99}
    //         ].map(item=>{
    //         return <li>{item.name}</li>
    //     })
    //     }
    // </ul>
    const cartItem =<ul className={classes["create-items"]}>
            {
              cartCtx.items.map(item => (
                  <CartItem
                  key={item.id}
                  name={item.name}
                  amount={item.amount}
                  price={item.price}
                  onRemuve = {() => {}}
                  onAdd={() => {}}
                  />          
                     ))  
            }
    </ul>
    return(
        <Modal onCloseCart={props.onCloseCart}>
                {cartItem}
        <div className={classes.portal}>
           <span>Total Amount</span> 
           <span> {totalAmount}</span>
           </div>
           <div className={classes.actions}>
               <button className={classes['button-alt']} onClick={props.onCloseCart}>Close</button>
           {hasItems &&   <button className={classes.button}>Order</button>}
           </div>
       
        </Modal>
    )
}
export default Cart;