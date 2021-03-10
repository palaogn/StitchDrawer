import { useContext, useState } from 'react';

import * as S from './ClearCanvas.styles';
import * as MS from '../../ModalContent.styles';
import { Input, Button } from '../../../..';
import { MatrixDataContext, ModalContext } from '../../../../../store';

const ClearCanvas = () => {
  const matrixDataDispatcher = useContext(MatrixDataContext.Dispatch);
  const modalDispatcher = useContext(ModalContext.Dispatch);

  const onClearState = () => {
    matrixDataDispatcher({
      type: 'clearMatrix',
    });
    onClose();
  };

  const onClose = () => modalDispatcher({ type: 'closeModal' });

  return (
    <S.Container>
      <MS.ModalTitle>Are you sure you want to clear your canvas?</MS.ModalTitle>
      <MS.ModalSubTitle>Your drawings might get lost</MS.ModalSubTitle>
      <S.ButtonWrapper>
        <Button text="Yes" onClick={onClearState} />
        <Button text="No" onClick={onClose} />
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default ClearCanvas;
