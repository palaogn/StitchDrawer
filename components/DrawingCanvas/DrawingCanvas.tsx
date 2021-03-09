import { useRef, useEffect, useContext, useState } from 'react';

import { MatrixDataContext, ToolbarContext } from '../../store';
import { Stitch, StitchType } from '../../types';
import * as S from './DrawingCanvas.styles';
import { useCanvas } from './useCanvas';

const DrawingCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let canvasContext: CanvasRenderingContext2D;
  const [canvasYOffset, setCanvasYOffset] = useState<number>(0);
  const [canvasXOffset, setCanvasXOffset] = useState<number>(0);
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
  const [halfStitchSize] = useState<number>(stitchSize * 0.5);
  /* const [drawCross, drawStitch] = useCanvas(
    canvasRef,
    localMatrixData,
    stitchSize
  ); */

  const clearCanvas = () => {
    if (canvasContext) {
      canvasContext.clearRect(
        0,
        0,
        matrixWidth * stitchSize,
        matrixHeight * stitchSize
      );
    }
  };

  const drawInitialMatrix = () => {
    clearCanvas(); // we need to clear it between each re render
    console.log('drawing initial matrix', { canvasXOffset, canvasYOffset });

    matrixBackgroundData.forEach((stitch) => {
      const centerY = stitch.position.row * stitchSize - halfStitchSize; //+ canvasYOffset;
      const centerX = stitch.position.column * stitchSize - halfStitchSize; // - canvasXOffset;

      drawStitch(centerX, centerY, stitch.color, stitch.stitch);
    });

    matrixData.forEach((stitch) => {
      const centerY = stitch.position.row * stitchSize - halfStitchSize; //+ canvasYOffset;
      const centerX = stitch.position.column * stitchSize - halfStitchSize; // - canvasXOffset;

      drawStitch(centerX, centerY, stitch.color, stitch.stitch);
    });
  };

  const initializeData = () => {
    const r = canvasRef.current.getBoundingClientRect();
    setCanvasXOffset(r.x);
    setCanvasYOffset(r.y);
    canvasContext = canvasRef.current.getContext('2d');

    canvasContext.shadowColor = 'grey';
    canvasContext.shadowOffsetX = 0.1;
    canvasContext.shadowOffsetY = 0.1;
    canvasContext.lineCap = 'round';
    //  canvasContext.lineJoin = 'bevel';

    drawInitialMatrix();
  };

  /*
  useEffect(() => {
    initiateMatrixBackground();
  }, [matrixHeight, matrixWidth, stitchSize]); */

  useEffect(() => {
    initializeData();
  }, [matrixData, matrixBackgroundData]);

  const drawCross = (x: number, y: number, color: string) => {
    if (canvasContext) {
      canvasContext.strokeStyle = color;
      canvasContext.lineWidth = 2;
      canvasContext.beginPath();
      canvasContext.moveTo(x - halfStitchSize, y - halfStitchSize);
      canvasContext.lineTo(x + halfStitchSize, y + halfStitchSize);
      canvasContext.moveTo(x + halfStitchSize, y - halfStitchSize);
      canvasContext.lineTo(x - halfStitchSize, y + halfStitchSize);
      canvasContext.stroke();
    }
  };

  const drawUpperLine = (x: number, y: number, color: string) => {
    if (canvasContext) {
      canvasContext.strokeStyle = color;
      canvasContext.lineWidth = 2;
      canvasContext.beginPath();
      canvasContext.moveTo(x - halfStitchSize, y - halfStitchSize);
      canvasContext.lineTo(x + halfStitchSize, y - halfStitchSize);
      canvasContext.stroke();
    }
  };

  const drawBottomLine = (x: number, y: number, color: string) => {
    if (canvasContext) {
      canvasContext.strokeStyle = color;
      canvasContext.lineWidth = 2;
      canvasContext.beginPath();
      canvasContext.moveTo(x - halfStitchSize, y + halfStitchSize);
      canvasContext.lineTo(x + halfStitchSize, y + halfStitchSize);
      canvasContext.stroke();
    }
  };

  const drawRightLine = (x: number, y: number, color: string) => {
    if (canvasContext) {
      canvasContext.strokeStyle = color;
      canvasContext.lineWidth = 2;
      canvasContext.beginPath();
      canvasContext.moveTo(x + halfStitchSize, y - halfStitchSize);
      canvasContext.lineTo(x + halfStitchSize, y + halfStitchSize);
      canvasContext.stroke();
    }
  };

  const drawLeftLine = (x: number, y: number, color: string) => {
    if (canvasContext) {
      canvasContext.strokeStyle = color;
      canvasContext.lineWidth = 2;
      canvasContext.beginPath();
      canvasContext.moveTo(x - halfStitchSize, y + halfStitchSize);
      canvasContext.lineTo(x - halfStitchSize, y - halfStitchSize);
      canvasContext.stroke();
    }
  };

  const drawVerticalMiddleLine = (x: number, y: number, color: string) => {
    if (canvasContext) {
      canvasContext.strokeStyle = color;
      canvasContext.lineWidth = 2;
      canvasContext.beginPath();
      canvasContext.moveTo(x - halfStitchSize, y);
      canvasContext.lineTo(x + halfStitchSize, y);
      canvasContext.stroke();
    }
  };

  const drawHorizontalMiddleLine = (x: number, y: number, color: string) => {
    if (canvasContext) {
      canvasContext.strokeStyle = color;
      canvasContext.lineWidth = 2;
      canvasContext.beginPath();
      canvasContext.moveTo(x, y + halfStitchSize);
      canvasContext.lineTo(x, y - halfStitchSize);
      canvasContext.stroke();
    }
  };

  const drawStitch = (
    x: number,
    y: number,
    color: string,
    stitch: StitchType
  ) => {
    // console.log('drawing stitch', { x, y, color, stitch });
    switch (stitch) {
      case 'TopLine':
        drawUpperLine(x, y, color);
        break;
      case 'BottomLine':
        drawBottomLine(x, y, color);
        break;
      case 'RightLine':
        drawRightLine(x, y, color);
        break;
      case 'LeftLine':
        drawLeftLine(x, y, color);
        break;
      case 'VerticalMiddleLine':
        drawVerticalMiddleLine(x, y, color);
        break;
      case 'HorizontalMiddleLine':
        drawHorizontalMiddleLine(x, y, color);
        break;
      case 'Cross':
      default:
        drawCross(x, y, color);
    }
  };

  const getRowAndColumn = (mouseXPos: number, mouseYPos: number) => {
    const divX = Math.ceil(mouseXPos / stitchSize);
    const divY = Math.ceil(mouseYPos / stitchSize);

    return { row: divY, column: divX };
  };

  const addStitchToMatrixData = (_row, _column, _stitchType, _color) => {
    matrixDispatcher({
      type: 'addStitch',
      row: _row,
      column: _column,
      stitchType: _stitchType,
      color: _color,
    });
  };

  const onMouseMove = (e, isMDown) => {
    const xPosition = e.clientX - canvasXOffset;
    const yPosition = e.clientY - canvasYOffset;

    if (isMDown) {
      const { row, column } = getRowAndColumn(xPosition, yPosition);
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
