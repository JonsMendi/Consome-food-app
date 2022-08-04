import ReactDOM from "react-dom";
import { Fragment } from "react";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalCard = (props) => {
  return (
    <div className={`${classes.modal} ${classes.className}`}>
      {props.children}
    </div>
  );
};

const portalElement = document.getElementById("modal-root");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      ;
      {ReactDOM.createPortal(
        <ModalCard>{props.children}</ModalCard>,
        portalElement
      )}
      ;
    </Fragment>
  );
};
export default Modal;
