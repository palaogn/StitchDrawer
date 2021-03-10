import react, { ReactChild } from 'react';
import * as S from './StitchPicker.styles';
import * as MS from '../../ModalContent.styles';

type StitchPickerType = {};

const StitchPicker = () => {
  return (
    <S.Container>
      <MS.ModalTitle>Choose a stitch</MS.ModalTitle>
      <MS.ModalSubTitle>This is a stitch picker</MS.ModalSubTitle>
    </S.Container>
  );
};

export default StitchPicker;
