import React, { useContext } from 'react';

import * as S from './StitchPicker.styles';
import { ToolbarContext, ModalContext } from '../../../../store';
import {
  CrossStitch,
  TopLineStitch,
  BottomLineStitch,
  RightLineStitch,
  LeftLineStitch,
  VerticalMiddleLineStitch,
  HorizontalMiddleLineStitch,
  RightCrossStitch,
  LeftCrossStitch,
  HorizontalLine,
  VerticalLine,
} from '../../..';

const StitchPicker = () => {
  const stitchStrokeWidth = 8;
  const { color, stitchType } = useContext(ToolbarContext.State);
  const toolbarDispatcher = useContext(ToolbarContext.Dispatch);
  const modalDispatcher = useContext(ModalContext.Dispatch);

  const openStitchPickerModal = () => {
    modalDispatcher({ type: 'openModal', modalContentType: 'StitchPicker' });
  };

  const renderCurrentStitch = () => {
    switch (stitchType) {
      case 'LeftCross':
        return (
          <LeftCrossStitch color={color} strokeWidth={stitchStrokeWidth} />
        );
      case 'RightCross':
        return (
          <RightCrossStitch color={color} strokeWidth={stitchStrokeWidth} />
        );
      case 'TopLine':
        return <TopLineStitch color={color} strokeWidth={stitchStrokeWidth} />;
      case 'BottomLine':
        return (
          <BottomLineStitch color={color} strokeWidth={stitchStrokeWidth} />
        );
      case 'LeftLine':
        return <LeftLineStitch color={color} strokeWidth={stitchStrokeWidth} />;
      case 'RightCross':
        return (
          <RightLineStitch color={color} strokeWidth={stitchStrokeWidth} />
        );
      case 'HorizontalMiddleLine':
        return (
          <HorizontalMiddleLineStitch
            color={color}
            strokeWidth={stitchStrokeWidth}
          />
        );
      case 'VerticalMiddleLine':
        return (
          <VerticalMiddleLineStitch
            color={color}
            strokeWidth={stitchStrokeWidth}
          />
        );
      case 'Cross':
        return <CrossStitch color={color} strokeWidth={stitchStrokeWidth} />;
    }
  };

  return (
    <S.Container>
      <S.AdditionalColorWrapper>
        <S.Rectangle color="white" onClick={openStitchPickerModal}>
          <S.IconWrapper>+</S.IconWrapper>
        </S.Rectangle>
      </S.AdditionalColorWrapper>
      <S.StitchWrapper>
        <S.Rectangle onClick={openStitchPickerModal}>
          {renderCurrentStitch()}
        </S.Rectangle>
      </S.StitchWrapper>
    </S.Container>
  );
};

export default StitchPicker;
