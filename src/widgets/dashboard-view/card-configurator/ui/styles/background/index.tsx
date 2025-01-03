import { FC, memo } from 'react';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { ItemStylesField } from 'entities/dashboard-view';
import { SetBackground } from './set-background';



interface Props {
  onChange: (field: ItemStylesField, value: number | string) => void
}

/** Фон */
export const Background: FC<Props> = memo(({ onChange }) => {

  return (
    <SubHeader title='Фон'>
      <SetBackground onChange={onChange} />
      {/* opacity */}
    </SubHeader>
  )
});
