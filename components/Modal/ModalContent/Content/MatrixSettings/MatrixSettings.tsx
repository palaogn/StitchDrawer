import { useContext, useState } from 'react';

import * as S from './MatrixSettings.styles';
import { Input, Button } from '../../../../';
import { MatrixDataContext, ModalContext } from '../../../../../store';

type StitchPickerType = {};

const MatrixSettings = () => {
  const matrixDataState = useContext(MatrixDataContext.State);
  const matrixDataDispatcher = useContext(MatrixDataContext.Dispatch);
  const modalDispatcher = useContext(ModalContext.Dispatch);
  const [updatedMatrixWidth, setUpdatedMatrixWidth] = useState<number>(
    matrixDataState.matrixWidth
  );
  const [updatedMatrixHeight, setUpdatedMatrixHeight] = useState<number>(
    matrixDataState.matrixHeight
  );

  const onSaveMatrixData = () => {
    // update Matrix data
    const updatedMatrixData = matrixDataState.matrixData;

    matrixDataDispatcher({
      type: 'matrixSettings',
      matrixHeight: updatedMatrixHeight,
      matrixWidth: updatedMatrixWidth,
      matrixData: updatedMatrixData,
    });
    modalDispatcher({ type: 'closeModal' });
  };

  return (
    <S.Container>
      <div>Here you can change Matrix settings</div>
      <Input
        label="Matrix Height"
        value={updatedMatrixHeight}
        type="number"
        onChange={(e) => setUpdatedMatrixHeight(e.target.value)}
      />
      <Input
        label="Matrix Width"
        value={updatedMatrixWidth}
        type="number"
        onChange={(e) => setUpdatedMatrixWidth(e.target.value)}
      />
      <S.ButtonWrapper>
        <Button text="Save" onClick={onSaveMatrixData} />
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default MatrixSettings;
