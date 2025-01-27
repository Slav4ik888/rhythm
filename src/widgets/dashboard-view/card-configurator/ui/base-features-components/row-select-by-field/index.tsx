import { FC, memo } from 'react';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { SelectByField } from '../select-by-field';



interface Props {
  scheme     : string
  title      : string
  toolTitle  : string
  array      : string[] | any[] // any if component present
  component? : FC<any> // Если нужен не стандартный компонент вместо item
}

export const RowSelectByField: FC<Props> = memo(({ scheme, title, toolTitle, array, component }) => {
  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title={title} toolTitle={toolTitle} />

      <SelectByField
        scheme    = {scheme}
        array     = {array}
        component = {component}
      />
    </RowWrapper>
  )
});
