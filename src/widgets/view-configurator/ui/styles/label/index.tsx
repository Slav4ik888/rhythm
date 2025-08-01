import { FC, memo } from 'react';
import { ConfiguratorSubHeader as SubHeader, ConfiguratorTitle } from 'shared/ui/configurators-components';
import { ViewItemStylesField, ViewItem } from 'entities/dashboard-view';
import { LabelRow } from './label-row';
import { SetColor } from './set-color';
import { FontSizeRow } from './font-size-row';
import { FontWeightRow } from './font-weight-row';
import { FontStyleRow } from './font-style-row';
import { LineHeightRow } from './line-height-row';
import { TextWrapRow } from './text-wrap-row';



interface Props {
  selectedItem : ViewItem | undefined
  onChange     : (field: ViewItemStylesField, value: number | string) => void
}

/** Card text label */
export const CardLabel: FC<Props> = memo(({ selectedItem, onChange }) => (
  <>
    <SubHeader title='Текст'>
      {selectedItem?.type === 'text' && <LabelRow selectedItem={selectedItem} />}
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
          {/* <ConfiguratorTitle title='Ед изменения (% | шт)' type='title2' /> */}
        </>
      )
    }
  </>
));
