import { FC, memo } from 'react';
import { ConfiguratorSubHeader as SubHeader, ConfiguratorTitle } from 'shared/ui/configurators-components';
import { ViewItemStylesField, ViewItem } from 'entities/dashboard-view';
import { LabelRow } from './label-row';
import { SetColor } from './set-color';
import { FontSizeRow } from './font-size-row';
import { FontWeightRow } from './font-weight-row';
import { FontStyleRow } from './font-style-row';
import { LineHeightRow } from './line-height-row';



interface Props {
  selectedItem : ViewItem | undefined
  onChange     : (field: ViewItemStylesField, value: number | string) => void
}

/** Card text label */
export const CardLabel: FC<Props> = memo(({ selectedItem, onChange }) => {
  const type = selectedItem?.type;

  if (type !== 'text' && type !== 'digitIndicator') return null

  return (
    <>
      <SubHeader title='Текст'>
        {type === 'text' && <LabelRow selectedItem={selectedItem} />}
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
        <SetColor
          selectedItem = {selectedItem}
          onChange     = {onChange}
        />
      </SubHeader>

      {
        type === 'digitIndicator' && (
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
  )
});
