// import { useState } from 'react';
// import CheckOut from '../Cart/CheckOut';
// import Modal from './Modal';
import './Ordered.css'
const Ordered = (props) => {
    // const[show, setisShow] =useState(false);

    return(
        <>
  <div className='backdrop'>
   
    </div>
    <h2 className='modal'>
      Your order  orderd successfully
    <button onClick={props.close}>Clouse</button>

    </h2>
        </>

    )
}
export default Ordered;