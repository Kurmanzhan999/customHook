import classes from './Cart.module.css'
const Cart = props => {
    const cartItem = <ul className={classes['cart-item']}>
        {
            [{id: 'c1',name:'sushi',amount:2,price:12.99}
        .map(item=>{
            return <li>{item.name}</li>
        })]
        }
    </ul>
    return(
        <div>
            suhi
        
        <div className={classes.portal}>
           <span>Total Amount</span> 
           <span>44</span>
           </div>
           <div className={classes.action}>
               <button className={classes['button-alt']}>Close</button>
               <button className={classes.button}>Order</button>
           </div>
       
        </div>
    )
}
export default Cart;