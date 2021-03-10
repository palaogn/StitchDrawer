import React, { createContext, Context, useReducer } from 'react';
import { MatrixContextDispatcher, MatrixContextState, Stitch } from '../types';

const initialStitchSize = 20;
const initialMatrixHeight = 50;
const initialMatrixWidth = 50;

const initialMatrixData: Stitch[] = [
  { color: 'pink', stitch: 'Cross', position: { row: 1, column: 1 } },
  { color: '#00807d', stitch: 'Cross', position: { row: 1, column: 3 } },
  { color: 'pink', stitch: 'Cross', position: { row: 1, column: 5 } },
  { color: '#00807d', stitch: 'Cross', position: { row: 3, column: 1 } },
  { color: 'pink', stitch: 'Cross', position: { row: 3, column: 3 } },
  { color: '#00807d', stitch: 'Cross', position: { row: 3, column: 5 } },
  //
  { color: 'pink', stitch: 'Cross', position: { row: 15, column: 14 } },
  { color: '', stitch: 'Cross', position: { row: 16, column: 15 } },
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

const initiateMatrixBackground = (
  matrixWidth: number,
  matrixHeight: number
) => {
  const crossStitch = { color: 'white', stitch: 'Cross' };
  const leftStitch = { color: 'white', stitch: 'LeftLine' };
  const topStitch = { color: 'white', stitch: 'TopLine' };
  const rightStitch = { color: 'white', stitch: 'RightLine' };
  const bottomStitch = { color: 'white', stitch: 'BottomLine' };
  let backgroundMatrix = [];
  for (let row = 1; row <= matrixHeight; row++) {
    for (let column = 1; column <= matrixWidth; column++) {
      backgroundMatrix = [
        ...backgroundMatrix,
        { ...crossStitch, position: { row, column } },
        // { ...leftStitch, position: { row, column } },
        //   { ...topStitch, position: { row, column } },
        //   { ...rightStitch, position: { row, column } },
        //   { ...bottomStitch, position: { row, column } },
      ];
    }
  }
  return backgroundMatrix;
};

const initialData: MatrixContextState = {
  stitchSize: initialStitchSize,
  matrixWidth: initialMatrixWidth,
  matrixHeight: initialMatrixHeight,
  matrixData: initialMatrixData,
  matrixBackgroundData: initiateMatrixBackground(
    initialMatrixWidth,
    initialMatrixHeight
  ),
};

// Context
const State: Context<MatrixContextState> = createContext(initialData);
const Dispatch: Context<MatrixContextDispatcher> = createContext({});
// : Dispatch<MatrixContextDispatcher>

const addStitchToMatrixData = (
  matrixData: Stitch[],
  row,
  column,
  stitchType,
  color
) => {
  let stitchExisted = false;
  let newMatrixData = matrixData.map((stitch) => {
    if (
      stitch.position.row === row &&
      stitch.position.column === column &&
      stitch.stitch === stitchType
    ) {
      stitchExisted = true;
      return { ...stitch, color: color };
    }
    return stitch;
  });

  if (!stitchExisted) {
    newMatrixData = [
      ...matrixData,
      {
        position: { row: row, column: column },
        stitch: stitchType,
        color: color,
      },
    ];
  }
  return newMatrixData;
};

const reducer = (state: MatrixContextState, action) => {
  switch (action.type) {
    case 'clearMatrix':
      return {
        ...state,
        matrixData: [],
      };
    case 'addStitch':
      return {
        ...state,
        matrixData: addStitchToMatrixData(
          state.matrixData,
          action.row,
          action.column,
          action.stitchSize,
          action.color
        ),
      };
    case 'matrixSettings':
      return {
        ...state,
        matrixHeight: action.matrixHeight,
        matrixWidth: action.matrixWidth,
        matrixBackgroundData: initiateMatrixBackground(
          action.matrixWidth,
          action.matrixHeight
        ),
      };

    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <State.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
    </State.Provider>
  );
};

export const MatrixDataContext = {
  State,
  Dispatch,
  Provider,
};
