import { useRef, useContext, useState } from 'react';

import { MatrixDataContext, ToolbarContext } from '../../store';
import { Stitch, StitchType } from '../../types';
import * as S from './DrawingCanvas.styles';
import { useCanvas } from './useCanvas';

const DrawingCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const {
    matrixHeight,
    matrixWidth,
    stitchSize,
    matrixData,
    matrixBackgroundData,
  } = useContext(MatrixDataContext.State);
  const matrixDispatcher = useContext(MatrixDataContext.Dispatch);
  const { color, stitchType } = useContext(ToolbarContext.State);

  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [canvasXOffset, canvasYOffset] = useCanvas({
    canvasRef,
    matrixData,
    matrixBackgroundData,
    stitchSize,
    matrixHeight,
    matrixWidth,
  });

  const addStitchToMatrixData = (_row, _column, _stitchType, _color) => {
    matrixDispatcher({
      type: 'addStitch',
      row: _row,
      column: _column,
      stitchType: _stitchType,
      color: _color,
    });
  };

  const getRowAndColumnFromAxis = (mouseXPos: number, mouseYPos: number) => {
    const divX = Math.ceil(mouseXPos / stitchSize);
    const divY = Math.ceil(mouseYPos / stitchSize);

    return { row: divY, column: divX };
  };

  const onMouseMove = (e, _isMouseDown) => {
    if (_isMouseDown) {
      const xPosition = e.clientX - canvasXOffset;
      const yPosition = e.clientY - canvasYOffset;
      const { row, column } = getRowAndColumnFromAxis(xPosition, yPosition);
      console.log({ row, column });
      addStitchToMatrixData(row, column, stitchType, color);
    }
  };

  return (
    <S.Container>
      <S.Canvas
        ref={canvasRef}
        width={matrixWidth * stitchSize}
        height={matrixHeight * stitchSize}
        onMouseMove={(e) => onMouseMove(e, isMouseDown)}
        onClick={onMouseMove}
        onMouseDown={(e) => {
          setIsMouseDown(true);
          onMouseMove(e, true);
        }}
        onMouseUp={() => setIsMouseDown(false)}
      />
    </S.Container>
  );
};

export default DrawingCanvas;
