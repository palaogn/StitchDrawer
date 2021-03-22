import React from 'react';

import {
  ColorPicker,
  StitchPicker,
  MatrixSettings,
  ClearCanvas,
  UndoAndRedo,
} from './Tools';
import * as S from './Toolbar.styles';

const Toolbar = () => {
  return (
    <S.Container>
      <S.Tool>
        <UndoAndRedo />
      </S.Tool>
      <S.Tool>
        <StitchPicker />
      </S.Tool>
      <S.Tool>
        <ColorPicker />
      </S.Tool>
      <S.Tool>
        <MatrixSettings />
      </S.Tool>
      <S.Tool>
        <ClearCanvas />
      </S.Tool>
    </S.Container>
  );
};

export default Toolbar;
