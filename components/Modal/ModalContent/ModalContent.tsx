import React, { ReactChild, useContext } from 'react';
import * as S from './ModalContent.styles';
import { CrossStitch } from '../..';
import { ModalContext } from '../../../store';
import { ColorPicker, StitchPicker, MatrixSettings } from './Content';

type ModalContentType = {
  title: string;
  children: ReactChild;
};

const ModalContent = () => {
  const modalState = useContext(ModalContext.State);
  const modalDispatcher = useContext(ModalContext.Dispatch);

  const onClose = () => {
    modalDispatcher({ type: 'closeModal' });
  };

  const renderContent = () => {
    switch (modalState.modalContentType) {
      case 'ColorPicker':
        return (
          <>
            <S.ModalTitle>Choose a color</S.ModalTitle>
            <ColorPicker />
          </>
        );
      case 'StitchPicker':
        return (
          <>
            <S.ModalTitle>Choose a stitch</S.ModalTitle>
            <StitchPicker />
          </>
        );
      case 'MatrixSettings':
        return (
          <>
            <S.ModalTitle>Matrix Settings</S.ModalTitle>
            <MatrixSettings />
          </>
        );
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
