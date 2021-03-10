import React, { useContext } from 'react';

import * as S from './MatrixSettings.styles';
import {
  ToolbarContext,
  ModalContext,
  MatrixDataContext,
} from '../../../../store';

const MatrixSettings = () => {
  const modalDispatcher = useContext(ModalContext.Dispatch);

  const openMatrixSettingsModal = () => {
    modalDispatcher({
      type: 'openModal',
      modalContentType: 'MatrixSettings',
    });
  };

  return (
    <S.Container>
      <S.AdditionalColorWrapper>
        <S.Rectangle color="white" onClick={openMatrixSettingsModal}>
          <S.IconWrapper>+</S.IconWrapper>
        </S.Rectangle>
      </S.AdditionalColorWrapper>
      <S.StitchWrapper>
        <S.Rectangle onClick={openMatrixSettingsModal} />
      </S.StitchWrapper>
    </S.Container>
  );
};

export default MatrixSettings;
