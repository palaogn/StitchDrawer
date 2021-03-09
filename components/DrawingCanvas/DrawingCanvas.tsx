import { useRef, useEffect, useContext, useState } from 'react';

import { MatrixDataContext, ToolbarContext } from '../../store';
import { Stitch, StitchType } from '../../types';
import * as S from './DrawingCanvas.styles';
import { useCanvas } from './useCanvas';

const initialMatrixData: Stitch[] = [
  { color: 'red', stitch: 'Cross', position: { row: 1, column: 1 } },
  { color: 'blue', stitch: 'Cross', position: { row: 1, column: 3 } },
  { color: 'red', stitch: 'Cross', position: { row: 1, column: 5 } },
  { color: 'blue', stitch: 'Cross', position: { row: 3, column: 1 } },
  { color: 'red', stitch: 'Cross', position: { row: 3, column: 3 } },
  { color: 'blue', stitch: 'Cross', position: { row: 3, column: 5 } },
  //
  { color: 'pink', stitch: 'Cross', position: { row: 15, column: 14 } },
  { color: '#00807d', stitch: 'Cross', position: { row: 16, column: 15 } },
  { color: '#00807d', stitch: 'Cross', position: { row: 16, column: 13 } },
  { color: '#00807d', stitch: 'Cross', position: { row: 17, column: 12 } },
  { color: '#00807d', stitch: 'Cross', position: { row: 17, column: 16 } },
  { color: '#00807d', stitch: 'Cross', position: { row: 18, column: 17 } },
  { color: '#00807d', stitch: 'Cross', position: { row: 18, column: 11 } },
  { color: '#00807d', stitch: 'Cross', position: { row: 19, column: 10 } },
  { color: '#00807d', stitch: 'Cross', position: { row: 19, column: 11 } },
  { color: '#00807d', stitch: 'Cross', position: { row: 19, column: 12 } },
  { color: '#00807d', stitch: 'Cross', position: { row: 19, column: 13 } },
  { color: '#00807d', stitch: 'Cross', position: { row: 19, column: 14 } },
  { color: '#00807d', stitch: 'Cross', position: { row: 19, column: 15 } },
  { color: '#00807d', stitch: 'Cross', position: { row: 19, column: 16 } },
  { color: '#00807d', stitch: 'Cross', position: { row: 19, column: 17 } },
  { color: '#00807d', stitch: 'Cross', position: { row: 19, column: 18 } },
  //
  { color: '#00807d', stitch: 'BottomLine', position: { row: 20, column: 14 } },
  { color: '#00807d', stitch: 'RightLine', position: { row: 20, column: 14 } },
  { color: '#00807d', stitch: 'TopLine', position: { row: 20, column: 14 } },
  { color: '#00807d', stitch: 'LeftLine', position: { row: 20, column: 14 } },
  {
    color: '#00807d',
    stitch: 'VerticalMiddleLine',
    position: { row: 20, column: 14 },
  },
  {
    color: '#00807d',
    stitch: 'HorizontalMiddleLine',
    position: { row: 20, column: 14 },
  },
];

const DrawingCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let canvasContext: CanvasRenderingContext2D;
  const [canvasYOffset, setCanvasYOffset] = useState<number>(0);
  const [canvasXOffset, setCanvasXOffset] = useState<number>(0);
  const { matrixHeight, matrixWidth, stitchSize } = useContext(
    MatrixDataContext.State
  );
  const [localMatrixData, setLocalMatrixData] = useState<Stitch[]>([]);
  const [matrixBackgroundData, setMatrixBackgroundData] = useState<Stitch[]>(
    initialMatrixData
  );
  const { color, stitchType } = useContext(ToolbarContext.State);

  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [halfStitchSize] = useState<number>(stitchSize * 0.5);
  /* const [drawCross, drawStitch] = useCanvas(
    canvasRef,
    localMatrixData,
    stitchSize
  ); */

  const initiateMatrixBackground = () => {
    const emptyStitch = { color: 'white', stitch: 'Cross' };
    let initialGrid = [];
    for (let row = 1; row <= matrixHeight; row++) {
      for (let column = 1; column <= matrixWidth; column++) {
        initialGrid = [
          ...initialGrid,
          { ...emptyStitch, position: { row, column } },
        ];
      }
    }
    setMatrixBackgroundData(initialGrid);
  };

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

    localMatrixData.forEach((stitch) => {
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

  useEffect(() => {
    initiateMatrixBackground();
  }, []);

  useEffect(() => {
    initializeData();
  }, [localMatrixData, matrixBackgroundData]);

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

  const findCurrentRowAndColumn = (mouseXPos: number, mouseYPos: number) => {};

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
    const stitchExisted = false;
    const newMatrixData = localMatrixData.map((stitch) => {
      if (
        stitch.position.row === _row &&
        stitch.position.column === _column &&
        stitch.stitch === _stitchType
      ) {
        return { ...stitch, color: _color };
      }
      return stitch;
    });

    if (stitchExisted) {
      setLocalMatrixData(newMatrixData);
    } else {
      setLocalMatrixData([
        ...localMatrixData,
        {
          position: { row: _row, column: _column },
          stitch: _stitchType,
          color: _color,
        },
      ]);
    }
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
