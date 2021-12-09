import { createPortal } from "react-dom";
import classes from './Modal.module.css';
import { Fragment } from "react";
const Backdrop =props => {
    return<div  className={classes.backdrop} onClick={props.onCloseCart}/>
}
const ModalOverLay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}> {props.children}  </div>
    </div>
}
const portalElement = document.getElementById('overlays');

const Modal = props => {
    return <Fragment>
        {createPortal (<Backdrop onCloseCart={props.onCloseCart} />,portalElement)}
        {createPortal(<ModalOverLay> {props.children} </ModalOverLay>,portalElement)}
    </Fragment>
}
export default Modal;