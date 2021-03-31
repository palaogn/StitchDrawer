import { useContext } from 'react';

import * as S from './StitchPicker.styles';
import * as MS from '../../ModalContent.styles';
import { StitchType } from '../../../../../types';
import { ToolbarContext, ModalContext } from '../../../../../store';
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
} from '../../../../Icon/Stitches';

const StitchPicker = () => {
  const { color } = useContext(ToolbarContext.State);
  const toolbarDispatcher = useContext(ToolbarContext.Dispatch);
  const modalDispatcher = useContext(ModalContext.Dispatch);

  const changeStitch = (stitchType: StitchType) => {
    toolbarDispatcher({ type: 'stitchType', stitchType });
    modalDispatcher({ type: 'closeModal' });
  };

  return (
    <S.Container>
      <MS.ModalTitle>Choose a stitch</MS.ModalTitle>
      <MS.ModalSubTitle>This is a stitch picker</MS.ModalSubTitle>
      <S.StitchWrapper onClick={() => changeStitch('Cross')}>
        <CrossStitch color={color} />
      </S.StitchWrapper>
      <S.StitchWrapper onClick={() => changeStitch('TopLine')}>
        <TopLineStitch color={color} />
      </S.StitchWrapper>
      <S.StitchWrapper onClick={() => changeStitch('BottomLine')}>
        <BottomLineStitch color={color} />
      </S.StitchWrapper>
      <S.StitchWrapper onClick={() => changeStitch('RightLine')}>
        <RightLineStitch color={color} />
      </S.StitchWrapper>
      <S.StitchWrapper onClick={() => changeStitch('LeftLine')}>
        <LeftLineStitch color={color} />
      </S.StitchWrapper>
      <S.StitchWrapper onClick={() => changeStitch('VerticalMiddleLine')}>
        <VerticalMiddleLineStitch color={color} />
      </S.StitchWrapper>
      <S.StitchWrapper onClick={() => changeStitch('HorizontalMiddleLine')}>
        <HorizontalMiddleLineStitch color={color} />
      </S.StitchWrapper>
      <S.StitchWrapper onClick={() => changeStitch('RightCross')}>
        <RightCrossStitch color={color} />
      </S.StitchWrapper>
      <S.StitchWrapper onClick={() => changeStitch('LeftCross')}>
        <LeftCrossStitch color={color} />
      </S.StitchWrapper>
    </S.Container>
  );
};

export default StitchPicker;
