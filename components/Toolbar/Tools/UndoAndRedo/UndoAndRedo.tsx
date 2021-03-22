import React, { useContext } from 'react';

import * as S from './UndoAndRedo.styles';
import { LeftArrow, RightArrow } from '../../../Icon';
import { MatrixDataContext } from '../../../../store';

const UndoAndRedo = () => {
  const { drawingHistory, undoHistory } = useContext(MatrixDataContext.State);
  const matrixDispatcher = useContext(MatrixDataContext.Dispatch);

  const undoLastAction = () => {
    matrixDispatcher({
      type: 'undo',
    });
  };

  const redoLastUndoAction = () => {
    matrixDispatcher({
      type: 'redo',
    });
  };

  return (
    <S.Container>
      <S.RedoWrapper>
        <S.Rectangle
          color="white"
          onClick={redoLastUndoAction}
          disabled={undoHistory.length <= 0}
        >
          <S.IconWrapper>
            <RightArrow />
          </S.IconWrapper>
        </S.Rectangle>
      </S.RedoWrapper>
      <S.UndoWrapper>
        <S.Rectangle
          color="white"
          onClick={undoLastAction}
          disabled={drawingHistory.length <= 0}
        >
          <S.IconWrapper>
            <LeftArrow />
          </S.IconWrapper>
        </S.Rectangle>
      </S.UndoWrapper>
    </S.Container>
  );
};

export default UndoAndRedo;
