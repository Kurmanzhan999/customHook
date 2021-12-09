import { createPortal } from "react-dom"
import { Fragment } from "react/cjs/react.production.min"
import classes from './Modal.module.css'
const Backdrop =props => {
    return<div  className={classes.backdrop}/>
}
const ModalOverLay = props => {
    return <div>
        <div className={classes.modal}> {props.children}</div>
    </div>
}
const PortalOverlay = document.getElementById('over-lays')

const Modal = props => {
    return <Fragment>
        {createPortal (Backdrop)}
    </Fragment>
}
export default ModalOverLay;