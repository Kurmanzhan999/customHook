import CartContex from './cart-contex'

const CartProvider = props => {
    const addItemToCard =item => {
        
    };
 const removeItemFromCartHandler = id => {

    }
    return <CartContex.Provider>
        {props.children}
    </CartContex.Provider>
}

export default CartProvider;