import { FC, memo } from 'react';
import {
  ConfiguratorSubHeader as SubHeader, ConfiguratorSubHeaderActive as SubHeaderActive, ConfiguratorTitle
} from 'shared/ui/configurators-components';
import { ViewItemStylesField, ViewItem } from 'entities/dashboard-view';
import { SetBackground } from '../background';
import { BorderRadiusRow, BorderRow, BoxShadowRow } from '../borders';
import { FontStyleRow } from '../text/font-style-row';
import { FontWeightRow } from '../text/font-weight-row';
import { SetColor } from '../text/set-color';
import { IndentsBox } from '../indents';



interface Props {
  selectedItem : ViewItem | undefined
  onChange     : (field: ViewItemStylesField, value: number | string) => void
}

export const ActivePeriodBox: FC<Props> = memo(({ selectedItem, onChange }) => (
  <SubHeaderActive title='Активный период'>

    <SubHeader title='Текст'>
      <FontStyleRow
        field        = 'activeFontStyle'
        selectedItem = {selectedItem}
        onChange     = {onChange}
      />
      <FontWeightRow
        scheme       = 'styles.activeFontWeight'
        selectedItem = {selectedItem}
      />
      <SetColor
        field        = 'activeColor'
        selectedItem = {selectedItem}
        onChange     = {onChange}
      />
    </SubHeader>

    <SubHeader title='Фон'>
      <SetBackground
        field        = 'activeBackground'
        selectedItem = {selectedItem}
        onChange     = {onChange}
      />
    </SubHeader>

    <IndentsBox active selectedItem = {selectedItem} />

    <SubHeader title='Рамка'>
      <BorderRow
        fieldWidth   = 'activeBorderWidth'
        fieldStyle   = 'activeBorderStyle'
        fieldColor   = 'activeBorderColor'
        selectedItem = {selectedItem}
        onChange     = {onChange}
      />
      <BorderRadiusRow
        active
        selectedItem = {selectedItem}
      />
      <BoxShadowRow
        field        = 'activeBoxShadow'
        selectedItem = {selectedItem}
        onChange     = {onChange}
      />
    </SubHeader>
  </SubHeaderActive>
));
