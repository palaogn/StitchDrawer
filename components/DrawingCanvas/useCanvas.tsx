import { useEffect, useState } from 'react';
import { Stitch, StitchType } from '../../types';

export const useCanvas = ({
  canvasRef,
  matrixData = [],
  matrixBackgroundData = [],
  stitchSize,
  matrixWidth,
  matrixHeight,
}: {
  canvasRef;
  matrixData: Stitch[];
  matrixBackgroundData: Stitch[];
  stitchSize: number;
  matrixWidth: number;
  matrixHeight: number;
}) => {
  let canvasContext;
  const [halfStitchSize] = useState<number>(stitchSize * 0.5);
  const [canvasXOffset, setCanvasXOffset] = useState<number>(0);
  const [canvasYOffset, setCanvasYOffset] = useState<number>(0);

  const getCenterAxisFromRowAndColumn = ({
    row,
    column,
  }: {
    row: number;
    column: number;
  }) => {
    const centerY = row * stitchSize - halfStitchSize;
    const centerX = column * stitchSize - halfStitchSize;
    return { centerX, centerY };
  };

  useEffect(() => {
    const r = canvasRef.current.getBoundingClientRect();
    setCanvasXOffset(r.x);
    setCanvasYOffset(r.y);
    canvasContext = canvasRef.current.getContext('2d');

    canvasContext.shadowColor = 'grey';
    canvasContext.shadowOffsetX = 0.1;
    canvasContext.shadowOffsetY = 0.1;
    canvasContext.lineCap = 'round';
    //  canvasContext.lineJoin = 'bevel';

    drawMatrix();
  }, [matrixData, matrixBackgroundData]);

  const drawMatrix = () => {
    clearCanvas(); // we need to clear it between each re render
    console.log('drawing initial matrix');

    matrixBackgroundData.forEach((stitch) => {
      const { centerX, centerY } = getCenterAxisFromRowAndColumn(
        stitch.position
      );
      drawStitch({
        x: centerX,
        y: centerY,
        color: stitch.color,
        stitch: stitch.stitch,
      });
    });

    matrixData.forEach((stitch) => {
      const { centerX, centerY } = getCenterAxisFromRowAndColumn(
        stitch.position
      );
      drawStitch({
        x: centerX,
        y: centerY,
        color: stitch.color,
        stitch: stitch.stitch,
      });
    });
  };

  const drawCross = ({
    x,
    y,
    color,
  }: {
    x: number;
    y: number;
    color: string;
  }) => {
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

  const drawTopLine = ({
    x,
    y,
    color,
  }: {
    x: number;
    y: number;
    color: string;
  }) => {
    if (canvasContext) {
      canvasContext.strokeStyle = color;
      canvasContext.lineWidth = 2;
      canvasContext.beginPath();
      canvasContext.moveTo(x - halfStitchSize, y - halfStitchSize);
      canvasContext.lineTo(x + halfStitchSize, y - halfStitchSize);
      canvasContext.stroke();
    }
  };

  const drawBottomLine = ({
    x,
    y,
    color,
  }: {
    x: number;
    y: number;
    color: string;
  }) => {
    if (canvasContext) {
      canvasContext.strokeStyle = color;
      canvasContext.lineWidth = 2;
      canvasContext.beginPath();
      canvasContext.moveTo(x - halfStitchSize, y + halfStitchSize);
      canvasContext.lineTo(x + halfStitchSize, y + halfStitchSize);
      canvasContext.stroke();
    }
  };

  const drawRightLine = ({
    x,
    y,
    color,
  }: {
    x: number;
    y: number;
    color: string;
  }) => {
    if (canvasContext) {
      canvasContext.strokeStyle = color;
      canvasContext.lineWidth = 2;
      canvasContext.beginPath();
      canvasContext.moveTo(x + halfStitchSize, y - halfStitchSize);
      canvasContext.lineTo(x + halfStitchSize, y + halfStitchSize);
      canvasContext.stroke();
    }
  };

  const drawLeftLine = ({
    x,
    y,
    color,
  }: {
    x: number;
    y: number;
    color: string;
  }) => {
    if (canvasContext) {
      canvasContext.strokeStyle = color;
      canvasContext.lineWidth = 2;
      canvasContext.beginPath();
      canvasContext.moveTo(x - halfStitchSize, y + halfStitchSize);
      canvasContext.lineTo(x - halfStitchSize, y - halfStitchSize);
      canvasContext.stroke();
    }
  };

  const drawVerticalMiddleLine = ({
    x,
    y,
    color,
  }: {
    x: number;
    y: number;
    color: string;
  }) => {
    if (canvasContext) {
      canvasContext.strokeStyle = color;
      canvasContext.lineWidth = 2;
      canvasContext.beginPath();
      canvasContext.moveTo(x - halfStitchSize, y);
      canvasContext.lineTo(x + halfStitchSize, y);
      canvasContext.stroke();
    }
  };

  const drawHorizontalMiddleLine = ({
    x,
    y,
    color,
  }: {
    x: number;
    y: number;
    color: string;
  }) => {
    if (canvasContext) {
      canvasContext.strokeStyle = color;
      canvasContext.lineWidth = 2;
      canvasContext.beginPath();
      canvasContext.moveTo(x, y + halfStitchSize);
      canvasContext.lineTo(x, y - halfStitchSize);
      canvasContext.stroke();
    }
  };

  const drawStitch = ({
    x,
    y,
    color,
    stitch,
  }: {
    x: number;
    y: number;
    color: string;
    stitch: StitchType;
  }) => {
    switch (stitch) {
      case 'TopLine':
        drawTopLine({ x, y, color });
        break;
      case 'BottomLine':
        drawBottomLine({ x, y, color });
        break;
      case 'RightLine':
        drawRightLine({ x, y, color });
        break;
      case 'LeftLine':
        drawLeftLine({ x, y, color });
        break;
      case 'VerticalMiddleLine':
        drawVerticalMiddleLine({ x, y, color });
        break;
      case 'HorizontalMiddleLine':
        drawHorizontalMiddleLine({ x, y, color });
        break;
      case 'Cross':
      default:
        drawCross({ x, y, color });
    }
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

  return [
    canvasXOffset,
    canvasYOffset,
    drawCross,
    drawBottomLine,
    drawTopLine,
    drawLeftLine,
    drawRightLine,
    drawVerticalMiddleLine,
    drawHorizontalMiddleLine,
    clearCanvas,
    getCenterAxisFromRowAndColumn,
  ];
};
