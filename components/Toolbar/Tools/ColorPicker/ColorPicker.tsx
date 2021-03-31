import React, { useContext } from 'react';

import * as S from './ColorPicker.styles';
import { ToolbarContext, ModalContext } from '../../../../store';
import { StitchType } from '../../../../types';

const ColorPicker = () => {
  const { color } = useContext(ToolbarContext.State);
  const modalDispatcher = useContext(ModalContext.Dispatch);

  const openColorPickerModal = () => {
    modalDispatcher({ type: 'openModal', modalContentType: 'ColorPicker' });
  };

  return (
    <S.Container>
      <S.AdditionalColorWrapper>
        <S.Circle color="white" onClick={openColorPickerModal}>
          <S.IconWrapper> +</S.IconWrapper>
        </S.Circle>
      </S.AdditionalColorWrapper>
      <S.ColorWrapper>
        <S.Circle color={color} onClick={openColorPickerModal} />
      </S.ColorWrapper>
    </S.Container>
  );
};

export default ColorPicker;
