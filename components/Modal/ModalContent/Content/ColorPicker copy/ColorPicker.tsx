import { useContext, useState } from 'react';
import { SketchPicker } from 'react-color';
import ReactColorPicker from '@super-effective/react-color-picker';

import { Button } from '../../../../';
import * as S from './ColorPicker.styles';
import { ToolbarContext, ModalContext } from '../../../../../store';

const ColorPicker = () => {
  const { color } = useContext(ToolbarContext.State);
  const toolbarDispatcher = useContext(ToolbarContext.Dispatch);
  const modalDispatcher = useContext(ModalContext.Dispatch);
  const [updatedColor, setUpdatedColor] = useState<string>(color);
  const presetColors = [
    '#D0021B',
    '#F5A623',
    '#F8E71C',
    '#8B572A',
    '#7ED321',
    '#417505',
    '#BD10E0',
    '#9013FE',
    '#4A90E2',
    '#50E3C2',
    '#B8E986',
    '#000000',
    '#4A4A4A',
    '#9B9B9B',
    '#FFFFFF',
  ];

  const onColorChange = (updatedColor: string) => {
    console.log(updatedColor);
    setUpdatedColor(updatedColor);
  };

  const onSaveColor = () => {
    toolbarDispatcher({ type: 'color', color: updatedColor });
    modalDispatcher({ type: 'closeModal' });
  };

  return (
    <S.Container>
      <div>Choose a color you like</div>
      <div>Be careful to choose colors that is possible to buy yarn in</div>
      <ReactColorPicker
        color={updatedColor}
        showSwatch={true}
        showHex={true}
        onChange={onColorChange}
      />
      <Button onClick={onSaveColor} text="Save" />
    </S.Container>
  );
};

export default ColorPicker;
