import React, { useContext } from 'react';

import * as S from './StitchPicker.styles';
import { ToolbarContext, ModalContext } from '../../../../store';

const StitchPicker = () => {
  const { color, stitchType } = useContext(ToolbarContext.State);
  const toolbarDispatcher = useContext(ToolbarContext.Dispatch);
  const modalDispatcher = useContext(ModalContext.Dispatch);

  const openStitchPickerModal = () => {
    modalDispatcher({ type: 'openModal', modalContentType: 'StitchPicker' });
  };

  return (
    <S.Container>
      <S.AdditionalColorWrapper>
        <S.Rectangle color="white" onClick={openStitchPickerModal}>
          +
        </S.Rectangle>
      </S.AdditionalColorWrapper>
      <S.StitchWrapper>
        <S.Rectangle color={color} onClick={openStitchPickerModal} />
      </S.StitchWrapper>
    </S.Container>
  );
};

export default StitchPicker;
