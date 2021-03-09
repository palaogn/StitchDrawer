import React, { useContext } from 'react';
import * as S from './Modal.styles';
import { ModalContent } from './';
import { ModalContext } from '../../store';

const Modal = () => {
  const modalState = useContext(ModalContext.State);
  const modalDispatcher = useContext(ModalContext.Dispatch);

  const onClose = () => {
    // modalDispatcher({ type: 'closeModal' });
  };

  return (
    <S.Container showModal={modalState.showModal} onClick={onClose}>
      <S.Modal>
        <ModalContent />
      </S.Modal>
    </S.Container>
  );
};

export default Modal;
