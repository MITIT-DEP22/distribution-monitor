import React, { FC } from 'react';
import css from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  children:React.ReactNode;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={css.modalBackground} onClick={onClose}>
      <div className={css.modalContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
