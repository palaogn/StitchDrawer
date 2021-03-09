import React, { useContext } from 'react';

import * as S from './ColorPicker.styles';
import { ToolbarContext, ModalContext } from '../../../../store';

const ColorPicker = () => {
  const { color } = useContext(ToolbarContext.State);
  const toolbarDispatcher = useContext(ToolbarContext.Dispatch);
  const modalDispatcher = useContext(ModalContext.Dispatch);

  const openColorPickerModal = () => {
    modalDispatcher({ type: 'openModal', modalContentType: 'ColorPicker' });
  };

  return (
    <S.Container>
      <S.AdditionalColorWrapper>
        <S.Circle color="white" onClick={openColorPickerModal}>
          +
        </S.Circle>
      </S.AdditionalColorWrapper>
      <S.ColorWrapper>
        <S.Circle color={color} onClick={openColorPickerModal} />
      </S.ColorWrapper>
    </S.Container>
  );
};

export default ColorPicker;
