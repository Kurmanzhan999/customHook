import './App.css';
import Header from './components//Layout/Header';
import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals';
import {useState} from 'react';
import CartProvider from './store/CartProvider';

function App() {
  const [cartisShown,setCartIsShown]=useState(false);
  const showCartHundler = () => {
    setCartIsShown(true)
  
  }
  const hideCartHundler= ()=>{
    setCartIsShown(true)
  }
  return (
    <>
    <CartProvider>
       {cartisShown && <Cart onCloseCart={hideCartHundler}/>}
          <Header/>
        <main>
          <Meals/>
        </main>
    </CartProvider>

    
    </>
  );
}
export default App;
