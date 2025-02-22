import { FC, memo } from 'react';
import { RowWrapper } from 'shared/ui/configurators-components';
import { ViewItemStylesField, useDashboardView } from 'entities/dashboard-view';
import { f } from 'shared/styles';
import { TextAlignment } from './text-alignment';



interface Props {
  onChange: (field: ViewItemStylesField, value: number | string) => void
}

export const TextPanelAlignment: FC<Props> = memo(({ onChange }) => {
  const { stylesByViewItemId: style } = useDashboardView();

  return (
    <RowWrapper sx={f('--fe')}>
      <TextAlignment
        value    = {style.textAlign}
        onChange = {onChange}
      />
    </RowWrapper>
  )
});
