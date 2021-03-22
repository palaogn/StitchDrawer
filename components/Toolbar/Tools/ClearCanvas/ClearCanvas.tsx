import React, { useContext } from 'react';

import { TrashCan } from '../../../Icon';
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
        <S.IconWrapper>
          <TrashCan />
        </S.IconWrapper>
      </S.Rectangle>
    </S.Container>
  );
};

export default ClearCanvas;
