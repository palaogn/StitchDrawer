import React from 'react';

import { ColorPicker, StitchPicker, MatrixSettings } from './Tools';
import * as S from './Toolbar.styles';

const Toolbar = () => {
  return (
    <S.Container>
      <S.Tool>
        <S.ToolTitle>Color:</S.ToolTitle>
        <ColorPicker />
      </S.Tool>
      <S.Tool>
        <S.ToolTitle>Stitch:</S.ToolTitle>
        <StitchPicker />
      </S.Tool>
      <S.Tool>
        <S.ToolTitle>Canvas:</S.ToolTitle>
        <MatrixSettings />
      </S.Tool>
    </S.Container>
  );
};

export default Toolbar;
