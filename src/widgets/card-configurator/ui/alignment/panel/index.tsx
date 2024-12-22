import { FC, memo } from 'react';
import { RowWrapper } from 'shared/ui/configurators-components';
import { CardItemId, ItemStylesField } from 'entities/card-item';
import { FlexDirection } from './flex-direction';



interface Props {
  cardItemId : CardItemId
  onChange   : (field: ItemStylesField, value: number | string) => void
}

export const PanelAlignment: FC<Props> = memo(({ cardItemId, onChange }) => {

  return (
    <RowWrapper>
      <FlexDirection cardItemId={cardItemId} onChange={onChange} />
        
      {/* horizontal alignment */}
      {/* vertical alignment */}
    </RowWrapper>
  )
});
