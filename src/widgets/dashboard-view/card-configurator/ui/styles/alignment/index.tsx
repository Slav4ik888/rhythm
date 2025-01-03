import { FC, memo } from 'react';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { ItemStylesField } from 'entities/dashboard-view';
import { PanelAlignment } from './panel';



interface Props {
  onChange: (field: ItemStylesField, value: number | string) => void
}

/** Выравнивание внутреннего содержимого */
export const Alignment: FC<Props> = memo(({ onChange }) => {
  
  return (
    <SubHeader title='Выравнивание'>
      <PanelAlignment onChange={onChange} />
      {/* display - flex, block, inline ... */}
      {/* flex-direction */}
      {/* flex-wrap */}
      {/* align-items */}
      {/* justify-content */}

      
    </SubHeader>
  )
});
