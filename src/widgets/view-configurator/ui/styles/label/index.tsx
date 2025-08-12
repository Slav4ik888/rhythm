import { FC, memo } from 'react';
import { ConfiguratorSubHeader as SubHeader, ConfiguratorTitle } from 'shared/ui/configurators-components';
import { ViewItemStylesField, ViewItem } from 'entities/dashboard-view';
import { LabelRow } from '../../settings/settings-text/label-row';
import { SetColor } from './set-color';
import { FontSizeRow } from './font-size-row';
import { FontWeightRow } from './font-weight-row';
import { FontStyleRow } from './font-style-row';
import { LineHeightRow } from './line-height-row';
import { TextWrapRow } from './text-wrap-row';
import { SetBackground } from '../background';



interface Props {
  selectedItem : ViewItem | undefined
  onChange     : (field: ViewItemStylesField, value: number | string) => void
}

/** Card text label */
export const CardLabel: FC<Props> = memo(({ selectedItem, onChange }) => (
  <>
    <SubHeader title='Текст'>
      <FontSizeRow
        scheme       = 'styles.fontSize'
        selectedItem = {selectedItem}
      />
      <FontStyleRow
        selectedItem = {selectedItem}
        onChange     = {onChange}
      />
      <FontWeightRow
        scheme       = 'styles.fontWeight'
        selectedItem = {selectedItem}
      />
      <LineHeightRow selectedItem={selectedItem} />
      {/* font-family */}
      <TextWrapRow
        selectedItem = {selectedItem}
        onChange     = {onChange}
      />
      <SetColor
        field        = 'color'
        selectedItem = {selectedItem}
        onChange     = {onChange}
      />
    </SubHeader>

    {
      selectedItem?.type === 'digitIndicator' && (
        <>
          <ConfiguratorTitle title='Сокращение - (тыс | млн)' type='title2' />
          <FontSizeRow
            scheme='styles.dirFontSize'
            selectedItem={selectedItem}
          />
          <FontWeightRow
            scheme       = 'styles.dirFontWeight'
            selectedItem = {selectedItem}
          />
        </>
      )
    }

    {
      selectedItem?.type === 'period' && (
        <>
          <ConfiguratorTitle title='Активный период' type='title2' />
          <FontWeightRow
            scheme       = 'styles.activeFontWeight'
            selectedItem = {selectedItem}
          />
          <SetColor
            field        = 'activeColor'
            selectedItem = {selectedItem}
            onChange     = {onChange}
          />
          <SetBackground
            field        = 'activeBackground'
            selectedItem = {selectedItem}
            onChange     = {onChange}
          />
        </>
      )
    }

    {/*
    activeBorderStyle?       : BorderStyleType
    activeBorderWidth?       : number | string
    activeBorderRadius?      : number | string
    activeBorderColor?       : string

    activeBoxShadow?         : string // 1px 1px 3px 0px rgb(184 184 184); */}
  </>
));
