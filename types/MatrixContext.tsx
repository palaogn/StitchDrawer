import { Stitch } from '.';

export type MatrixContextState = {
  matrixWidth: number;
  matrixHeight: number;
  stitchSize: number;
  matrixData: Stitch[];
  matrixBackgroundData: Stitch[];

  drawingHistory: HistoryAction[];
  undoHistory: HistoryAction[];
};

export type HistoryActionType = 'Stitch' | 'ClearAll';

export type HistoryAction = {
  action: HistoryActionType;
  stitch?: Stitch;
};

export type MatrixContextDispatcher = {
  state?: MatrixContextState;
  action?: MatrixContextState & {
    type?: string;
  };
};
