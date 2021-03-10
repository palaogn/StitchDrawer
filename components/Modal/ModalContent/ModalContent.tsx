import React, { useContext } from 'react';
import * as S from './ModalContent.styles';
import { CrossStitch } from '../..';
import { ModalContext } from '../../../store';
import {
  ColorPicker,
  StitchPicker,
  MatrixSettings,
  ClearCanvas,
} from './Content';

const ModalContent = () => {
  const modalState = useContext(ModalContext.State);
  const modalDispatcher = useContext(ModalContext.Dispatch);

  const onClose = () => {
    modalDispatcher({ type: 'closeModal' });
  };

  const renderContent = () => {
    switch (modalState.modalContentType) {
      case 'ColorPicker':
        return <ColorPicker />;
      case 'StitchPicker':
        return <StitchPicker />;
      case 'MatrixSettings':
        return <MatrixSettings />;
      case 'ClearCanvas':
        return <ClearCanvas />;
      default:
        return null;
    }
  };

  return (
    <S.ModalContent>
      <S.CloseWrapper onClick={onClose}>
        <CrossStitch color="black" />
      </S.CloseWrapper>

      {renderContent()}
    </S.ModalContent>
  );
};

export default ModalContent;
