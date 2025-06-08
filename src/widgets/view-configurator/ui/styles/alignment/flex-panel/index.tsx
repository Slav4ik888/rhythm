import { FC, memo } from 'react';
import { RowWrapper } from 'shared/ui/configurators-components';
import {
  FlexDirectionType, AlignItemsType, ViewItemStylesField, JustifyContentType, ViewItem
} from 'entities/dashboard-view';
import { FlexDirection } from './flex-direction';
import { AlignItems } from './align-items';
import { JustifyContent } from './justify-content';
import { Stack } from '@mui/material';
import { f } from 'shared/styles';



interface Props {
  selectedItem : ViewItem | undefined
  onChange     : (field: ViewItemStylesField, value: number | string) => void
}

export const FlexPanelAlignment: FC<Props> = memo(({ selectedItem, onChange }) => (
    <RowWrapper sx={{ root: { ...f('-fs-sb') } }}>
      <FlexDirection
        value    = {selectedItem?.styles?.flexDirection as FlexDirectionType}
        onChange = {onChange}
      />

      <Stack spacing={1} alignItems='flex-end'>
        <AlignItems
          value    = {selectedItem?.styles?.alignItems as AlignItemsType}
          onChange = {onChange}
        />
        <JustifyContent
          value    = {selectedItem?.styles?.justifyContent as JustifyContentType}
          onChange = {onChange}
        />
      </Stack>
    </RowWrapper>
  ));
