import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { CrossStitch } from '..';
import { Matrix as MatrixType, Stitch, StitchType } from '../../types';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 90px;
  text-align: center;
  vertical-align: center;
`;

const Grid = styled.div`
  display: inline-block;
  margin-top: 40px;
  border: 1px solid #eaeaea;
  // margin: 20% 100px 0 100px;
`;

const Row = styled.div`
  margin: auto;
  height: 20px;
  padding: 0;
`;

const StitchContainer = styled.div<{ color: string; size: number }>`
  display: inline-block;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  // border: 1px solid #eaeaea;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 10px;
  width: 90px;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  margin-right: 10px;
`;

const Button = styled.button`
  border: 1px solid black;
  background-color: white;
  padding: 10px;
  font-size: 18px;
  letter-spacing: 0.1px;
  margin: 5px;
`;

const DrawingBoard = () => {
  const [matrixData, setMatrixData] = useState<MatrixType>([]);
  const [matrixWidth, setMatrixWidth] = useState<number>(30);
  const [matrixHeight, setMatrixHeight] = useState<number>(30);
  const [color, setColor] = useState<string>('green');
  const [stitchType, setStitchType] = useState<StitchType>('Cross');
  const [stitchSize, setStitchSize] = useState<number>(20);
  const [mouseDown, setMouseDown] = useState<boolean>(false);
  const emptyStitch: Stitch = { stitch: 'None' };

  const updateStitch = (
    rowIndex: number,
    stitchIndex: number,
    color: string,
    stitchType: StitchType
  ) => {
    const newMatrix = matrixData.map((row, index) =>
      index === rowIndex
        ? row.map((stitch, index) =>
            index === stitchIndex ? { ...stitch, color, stitchType } : stitch
          )
        : row
    );
    setMatrixData(newMatrix);
    console.log({ newMatrix: newMatrix });
  };

  useEffect(() => {
    let initialGrid = [];
    for (let row = 0; row < matrixHeight; row++) {
      let row = [];
      for (let stitch = 0; stitch < matrixWidth; stitch++) {
        row = [...row, { ...emptyStitch }];
      }
      initialGrid = [...initialGrid, row];
    }

    setMatrixData(initialGrid);
  }, []);

  const changeMatrixHeight = () => {
    const difference = matrixHeight - matrixData.length;
    if (difference < 0) {
      const newMatrix = matrixData.slice(0, matrixHeight - 1);
      setMatrixData(newMatrix);
    } else if (difference > 0) {
      let newEmptyRow = [];
      let newMatrix = matrixData;
      for (let stitch = 0; stitch < matrixData[0].length; stitch++) {
        newEmptyRow = [...newEmptyRow, { ...emptyStitch }];
      }

      for (let extraRows = 0; extraRows <= difference; extraRows++) {
        newMatrix = [...newMatrix, [...newEmptyRow]];
      }
      setMatrixData(newMatrix);
    }
  };

  const changeMatrixWidth = () => {
    const difference = matrixWidth - matrixData[0].length;
    if (difference < 0) {
      let newMatrix = matrixData.map((row) => row.slice(0, matrixWidth - 1));
      setMatrixData(newMatrix);
    } else if (difference > 0) {
      let emptyColumns = [];
      for (let extraColumn = 0; extraColumn <= difference; extraColumn++) {
        emptyColumns = [...emptyColumns, { ...emptyStitch }];
      }

      let newMatrix = matrixData.map((row) => [...row, ...emptyColumns]);
      setMatrixData(newMatrix);
    }
  };

  return (
    <Container
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
    >
      <Grid>
        {matrixData.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((stitch, stitchIndex) => (
              <StitchContainer
                key={`${rowIndex}-${stitchIndex}`}
                size={stitchSize}
                onClick={() =>
                  updateStitch(rowIndex, stitchIndex, color, stitchType)
                }
                onMouseOver={() =>
                  mouseDown
                    ? updateStitch(rowIndex, stitchIndex, color, stitchType)
                    : null
                }
              >
                <CrossStitch color={stitch.color} />
              </StitchContainer>
            ))}
          </Row>
        ))}
      </Grid>
      <div>
        <span>
          Width:
          <Input
            value={matrixWidth}
            onChange={(e) => setMatrixWidth(e.target.value)}
          />
        </span>
        <Button onClick={changeMatrixWidth}>Apply Width</Button>
        <span>
          Height:
          <Input
            value={matrixHeight}
            onChange={(e) => setMatrixHeight(e.target.value)}
          />
        </span>
        <Button onClick={changeMatrixHeight}>Apply Height</Button>
      </div>
      <div>
        <span>
          Color:
          <Input value={color} onChange={(e) => setColor(e.target.value)} />
        </span>
      </div>
    </Container>
  );
};

export default DrawingBoard;
