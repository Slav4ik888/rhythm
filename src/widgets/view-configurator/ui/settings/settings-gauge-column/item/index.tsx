import { FC, memo, MouseEvent, useMemo } from 'react';
import { InputByScheme } from '../../../base-features-components';
import { RowWrapperTitle } from 'shared/ui/configurators-components';
import { ViewItem } from 'entities/dashboard-view';
import { pxToRem } from 'shared/styles';
import { ColorPicker } from 'shared/lib/colors-picker';
import { getValueByScheme } from 'shared/helpers/objects';



interface Props {
  selectedItem  : ViewItem | undefined
  index         : number
  onChangeColor : (index: number, color: string) => void
}

export const GaugeColumnParametrItem: FC<Props> = memo(({ selectedItem, index, onChangeColor }) => (
  <RowWrapperTitle
    key       = {index}
    title     = {`Параметр - ${index + 1}`}
    toolTitle = 'Название, значения и цвет параметра'
  >
    <InputByScheme
      scheme       = {`settings.gaugeColumnItems[${index}].label`}
      width        = {pxToRem(150)}
      selectedItem = {selectedItem}
      // sx           = {sx}
      onChange     = {(e: MouseEvent, v: string | number) => {}}
    />
    <InputByScheme
      type         = 'number'
      toolTitle    = 'Значение для условия <'
      scheme       = {`settings.gaugeColumnItems[${index}].valueLess`}
      width        = {pxToRem(50)}
      selectedItem = {selectedItem}
      // sx           = {sx}
      onChange     = {(e: MouseEvent, v: string | number) => {}}
    />
    <InputByScheme
      type         = 'number'
      toolTitle    = 'Значение для условия >='
      scheme       = {`settings.gaugeColumnItems[${index}].valueMore`}
      width        = {pxToRem(50)}
      selectedItem = {selectedItem}
      // sx           = {sx}
      onChange     = {(e: MouseEvent, v: string | number) => {}}
    />

    <ColorPicker
      defaultColor = {getValueByScheme(selectedItem, `settings.gaugeColumnItems[${index}].color`)}
      onChange     = {(color: string) => onChangeColor(index, color)}
    />
  </RowWrapperTitle>
));
