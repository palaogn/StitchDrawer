import { useEffect, useState } from 'react';
import { Stitch, StitchType } from '../../types';

export const useBackgroundCanvas = ({
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

    drawMatrixBackground();
  }, [matrixBackgroundData]);

  const drawMatrixBackground = () => {
    clearBackgroundCanvas(); // we need to clear it between each re render
    console.log('drawing initial matrix background');

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
      case 'Cross':
      default:
        drawCross({ x, y, color });
    }
  };

  const clearBackgroundCanvas = () => {
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
    clearBackgroundCanvas,
    getCenterAxisFromRowAndColumn,
  ];
};
