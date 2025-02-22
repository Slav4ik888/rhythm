import { FC, memo } from 'react';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { ViewItemStylesField, ViewItemType } from 'entities/dashboard-view';
import { FlexPanelAlignment } from './flex-panel';
import { TextPanelAlignment } from './text-panel';



interface Props {
  type     : ViewItemType
  onChange : (field: ViewItemStylesField, value: number | string) => void
}

/** Выравнивание внутреннего содержимого */
export const Alignment: FC<Props> = memo(({ type, onChange }) => {
  
  return (
    <SubHeader title='Выравнивание'>
      {
        type === 'text'
          ? <TextPanelAlignment onChange={onChange} />
          : <FlexPanelAlignment onChange={onChange} />
      }
      
      {/* display - flex, block, inline ... */}
      {/* flex-direction */}
      {/* flex-wrap */}
      {/* align-items */}
      {/* justify-content */}

      
    </SubHeader>
  )
});
