import React, { useContext } from 'react';

import * as S from './ClearCanvas.styles';
import { ModalContext } from '../../../../store';

const ClearCanvas = () => {
  const modalDispatcher = useContext(ModalContext.Dispatch);

  const openConfirmModal = () => {
    modalDispatcher({ type: 'openModal', modalContentType: 'ClearCanvas' });
  };

  return (
    <S.Container>
      <S.Rectangle color="white" onClick={openConfirmModal}>
        <S.Image
          width="30px"
          height="30px"
          src="/icons/Delete.png"
          alt="Delete icon"
        />
      </S.Rectangle>
    </S.Container>
  );
};

export default ClearCanvas;
