import { useRef, useContext, useState } from 'react';

import { MatrixDataContext, ToolbarContext } from '../../store';
import { Stitch, StitchType, Position } from '../../types';
import * as S from './DrawingCanvas.styles';
import { useCanvas } from './useCanvas';
import { useBackgroundCanvas } from './useBackground';

const DrawingCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const backgroundCanvasRef = useRef<HTMLCanvasElement>(null);
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
  const [] = useBackgroundCanvas({
    canvasRef: backgroundCanvasRef,
    matrixData,
    matrixBackgroundData,
    stitchSize,
    matrixHeight,
    matrixWidth,
  });

  const getRowAndColumnFromAxis = (mouseXPos: number, mouseYPos: number) => {
    const divX = Math.ceil(mouseXPos / stitchSize);
    const divY = Math.ceil(mouseYPos / stitchSize);

    return { row: divY, column: divX };
  };

  const isSameStitch = (stitchA: Stitch, stitchB: Stitch) => {
    return (
      stitchA.position.row === stitchB.position.row &&
      stitchA.position.column === stitchB.position.column &&
      stitchA.color === stitchB.color &&
      stitchA.stitch === stitchB.stitch
    );
  };

  const isStitchNew = (newStitch: Stitch): boolean => {
    return !matrixData.find((stitch) => isSameStitch(stitch, newStitch));
  };

  const onMouseMove = (e, _isMouseDown) => {
    if (_isMouseDown) {
      const xPosition = e.clientX - canvasXOffset;
      const yPosition = e.clientY - canvasYOffset;
      const { row, column } = getRowAndColumnFromAxis(xPosition, yPosition);
      console.log({ row, column });
      const newStitch = {
        position: { row, column },
        stitch: stitchType,
        color,
      };
      if (isStitchNew(newStitch)) {
        matrixDispatcher({
          type: 'addStitch',
          stitch: newStitch,
        });
      }
    }
  };

  const onKeyDown = (e) => {
    if (e.ctrlKey && e.keyCode === 90) {
      // ctrl + z = undo
      matrixDispatcher({
        type: 'undo',
      });
    } else if (e.crtlKey && e.keyCode === 86) {
      // ctrl + v = redo
      matrixDispatcher({
        type: 'redo',
      });
    }
  };

  return (
    <S.Container tabIndex="0" onKeyDown={onKeyDown}>
      <S.CanvasWrapper>
        <S.BackgroundCanvas
          ref={backgroundCanvasRef}
          width={matrixWidth * stitchSize}
          height={matrixHeight * stitchSize}
        />
        <S.Canvas
          ref={canvasRef}
          width={matrixWidth * stitchSize}
          height={matrixHeight * stitchSize}
          onMouseMove={(e) => onMouseMove(e, isMouseDown)}
          onClick={onMouseMove}
          onMouseDown={(e) => {
            console.log({ e: e, eScreenY: e.screenY, eClientY: e.clientY });

            setIsMouseDown(true);
            onMouseMove(e, true);
          }}
          onMouseUp={() => setIsMouseDown(false)}
        />
      </S.CanvasWrapper>
    </S.Container>
  );
};

export default DrawingCanvas;
