import {  useContext, useState } from 'react'
import CartContex from '../../store/cart-contex'
// import CartProvider from '../../store/CartProvider'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartItem from './CartItem';
import CheckOut from './CheckOut';

const Cart = props => {
const [isCheckOut, setIsCheckOut] = useState(false);
  
const cartCtx= useContext(CartContex);
const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
const hasItems = cartCtx.items.length > 0;

const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({
      ...item,
      amount: 1,
    });
  };
const orderItemHandler = item => {
    setIsCheckOut(true);
}

const submitOrderhandler = (userData) => {
fetch('https://react-http-test-d3459-default-rtdb.firebaseio.com/orders.json',{
    method: 'POST',
    body: JSON.stringify({
        user:userData,
        ordereditem: cartCtx.items
    })
})
}
    const cartItem = (<ul className={classes["create-items"]}>
            {
              cartCtx.items.map(item => (
                  <CartItem
                  key={item.id}
                  name={item.name}
                  amount={item.amount}
                  price={item.price}
                  onRemove ={cartItemRemoveHandler.bind(null, item.id)}
                  onAdd={cartItemAddHandler.bind(null, item)}
                  />          
            ))}
    </ul>
);
  const  modalActions = <div className={classes.actions}>
  <button className={classes['button-alt']} onClick={props.onCloseCart}>Close</button>
{hasItems &&   <button className={classes.button} onClick={orderItemHandler}>Order</button>}
</div>
    return(
        <Modal onCloseCart={props.onCloseCart}>
                {cartItem}
        <div className={classes.portal}>
           <span>Total Amount</span> 
           <span> {totalAmount}</span>
           </div>
           
           {isCheckOut && <CheckOut onCancel={props.onCloseCart} onConfirm={submitOrderhandler}/>}
           {!isCheckOut && modalActions}
       
        </Modal>
    )
}
export default Cart;