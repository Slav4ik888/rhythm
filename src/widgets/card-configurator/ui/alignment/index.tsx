import { FC, memo } from 'react';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { CardItemId, ItemStylesField } from 'entities/card-item';
import { PanelAlignment } from './panel';



interface Props {
  cardItemId : CardItemId
  onChange   : (field: ItemStylesField, value: number | string) => void
}

/** Выравнивание внутреннего содержимого */
export const Alignment: FC<Props> = memo(({ cardItemId, onChange }) => {
  
  return (
    <SubHeader title='Выравнивание'>
      <PanelAlignment cardItemId={cardItemId} onChange={onChange} />
      {/* display - flex, block, inline ... */}
      {/* flex-direction */}
      {/* flex-wrap */}
      {/* align-items */}
      {/* justify-content */}

      
    </SubHeader>
  )
});
