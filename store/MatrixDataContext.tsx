import React, { createContext, Context, useReducer } from 'react';
import {
  MatrixContextDispatcher,
  MatrixContextState,
  Stitch,
  HistoryAction,
  HistoryActionType,
} from '../types';
import { initialMatrixData } from './initialMatrixData';

const initialStitchSize = 10;
const initialMatrixHeight = 100;
const initialMatrixWidth = 100;

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
  drawingHistory: [],
  undoHistory: [],
};

// Context
const State: Context<MatrixContextState> = createContext(initialData);
const Dispatch: Context<MatrixContextDispatcher> = createContext({});
// : Dispatch<MatrixContextDispatcher>

const addStitchToMatrixData = (matrixData: Stitch[], newStitch: Stitch) => {
  let stitchExisted = false;
  let newMatrixData = matrixData.map((stitch) => {
    if (
      stitch.position.row === newStitch.position.row &&
      stitch.position.column === newStitch.position.column &&
      stitch.stitch === newStitch.stitch
    ) {
      stitchExisted = true;
      return { ...stitch, color: newStitch.color };
    }
    return stitch;
  });

  if (!stitchExisted) {
    newMatrixData = [...matrixData, newStitch];
  }
  return newMatrixData;
};

const isSameStitch = (stitchA: Stitch, stitchB: Stitch) => {
  return (
    stitchA.position.row === stitchB.position.row &&
    stitchA.position.column === stitchB.position.column &&
    stitchA.color === stitchB.color &&
    stitchA.stitch === stitchB.stitch
  );
};

const undoLastDrawingAction = (
  matrixData: Stitch[],
  lastHistoryDrawing: HistoryAction
): Stitch[] => {
  switch (lastHistoryDrawing.action) {
    case 'Stitch':
      return matrixData.filter(
        (s) => !isSameStitch(s, lastHistoryDrawing.stitch)
      );
  }
};

const redoLastUndoDrawingAction = (
  matrixData: Stitch[],
  lastUndo: HistoryAction
): Stitch[] => {
  switch (lastUndo.action) {
    case 'Stitch':
      return [...matrixData, lastUndo.stitch];
  }
};

const reducer = (state: MatrixContextState, action) => {
  const lastStitch = state.drawingHistory[state.drawingHistory.length - 1];
  switch (action.type) {
    case 'clearMatrix':
      return {
        ...state,
        matrixData: [],
      };
    case 'undo':
      return {
        ...state,
        matrixData: lastStitch
          ? undoLastDrawingAction(state.matrixData, lastStitch)
          : state.matrixData,
        drawingHistory:
          state.drawingHistory.length > 0
            ? state.drawingHistory.slice(0, state.drawingHistory.length - 1)
            : state.drawingHistory,
        //     undoHistory: [...state.undoHistory, lastStitch],
      };
    case 'redo':
      return {
        ...state,
        matrixData: lastStitch
          ? redoLastUndoDrawingAction(state.matrixData, lastStitch)
          : state.matrixData,
        undoHistory:
          state.undoHistory.length > 0
            ? state.undoHistory.slice(0, state.undoHistory.length - 1)
            : state.undoHistory,
        drawingHistory: [
          ...state.drawingHistory,
          { action: 'Stitch', stitch: action.stitch },
        ],
      };
    case 'addStitch':
      return {
        ...state,
        matrixData: addStitchToMatrixData(state.matrixData, action.stitch),
        drawingHistory: [
          ...state.drawingHistory,
          { action: 'Stitch', stitch: action.stitch },
        ],
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
