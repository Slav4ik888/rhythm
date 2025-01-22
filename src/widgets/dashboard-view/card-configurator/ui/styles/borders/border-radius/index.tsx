import { FC, memo } from 'react';
import { ItemStylesField } from 'entities/dashboard-view';
import { RowInputByScheme } from '../../../base-features-components';



interface Props {
  onChange: (field: ItemStylesField, value: number | string) => void
}

/** border-radius */
export const BorderRadiusRow: FC<Props> = memo(({ onChange }) => {
  return (
    <RowInputByScheme
      scheme    = 'styles.borderRadius'
      type      = 'number'
      title     = 'Border-radius' 
      toolTitle = 'Border-radius' 
      width     = '3rem'
    />
  )
});
