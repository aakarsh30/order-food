import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

function Modal({ children, className, open, onClose }) {
  const dialog = useRef();
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    }
    return () => dialog.current.close();
  }, [open]);
  return createPortal(
    <dialog ref={dialog} onClose={onClose} className={`modal ${className}`}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
