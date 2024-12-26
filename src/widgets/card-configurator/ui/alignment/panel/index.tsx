import { FC, memo } from 'react';
import { RowWrapper } from 'shared/ui/configurators-components';
import {
  CardItemId, FlexDirectionType, AlignItemsType, ItemStylesField, JustifyContentType, useDashboardView
} from 'entities/dashboard-view';
import { FlexDirection } from './flex-direction';
import { AlignItems } from './align-items';
import { JustifyContent } from './justify-content';
import { Stack } from '@mui/material';



interface Props {
  cardItemId : CardItemId
  onChange   : (field: ItemStylesField, value: number | string) => void
}

export const PanelAlignment: FC<Props> = memo(({ cardItemId, onChange }) => {
  const { stylesByCardItemId: style } = useDashboardView({ cardItemId });

  return (
    <RowWrapper flexStart>
      <FlexDirection
        value    = {style.flexDirection as FlexDirectionType}
        onChange = {onChange}
      />

      <Stack spacing={1} alignItems='flex-end'>
        <AlignItems
          value    = {style.alignItems as AlignItemsType}
          onChange = {onChange}
        />
        <JustifyContent
          value    = {style.justifyContent as JustifyContentType}
          onChange = {onChange}
        />
      </Stack>
    </RowWrapper>
  )
});