export type Stitch = {
  position?: Position;
  color?: string;
  stitch: StitchType;
};

export type StitchType =
  | 'None'
  | 'Cross'
  | 'TopLine'
  | 'RightLine'
  | 'BottomLine'
  | 'LeftLine'
  | 'VerticalMiddleLine'
  | 'HorizontalMiddleLine';

export type Position = {
  row: number; // y axis
  column: number; // x axis
};

/*
stitchSize = 20;
  {row: 1, column: 1} = x: 0-20, y: 0-20
*/
