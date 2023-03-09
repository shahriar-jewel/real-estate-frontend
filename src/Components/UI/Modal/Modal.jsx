import React, { Fragment } from "react";

const Backdrop = (props) => {
    return (
        <div
            onClick={props.onClose}
            className={`fixed top-0 left-0 w-full h-full z-40 bg-black/60 ${props.dropClassName}`}
        />
    );
};

const ModalOverlay = (props) => {
    return (
        <div
            className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-40 w-full p-5 ${props.className}`}
            style={props.style}
        >
            {props.children}
        </div>
    );
};

const Modal = (props) => {
    return (
        <Fragment>
            <Backdrop
                dropClassName={props.dropClassName}
                onClose={props.onClose}
            />
            <ModalOverlay className={props.className} style={props.style}>
                {props.children}
            </ModalOverlay>
        </Fragment>
    );
};

export default Modal;
