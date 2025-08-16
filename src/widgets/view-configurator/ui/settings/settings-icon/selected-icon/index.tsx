import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import { useDashboardViewState } from 'entities/dashboard-view';
import { FC, memo, useMemo } from 'react';
import { getIconById } from 'shared/lib/icons';
import { isStr } from 'shared/lib/validators';
import { f, pxToRem } from 'shared/styles';



interface Props {
  onClick: () => void
}

export const SelectedIcon: FC<Props> = memo(({ onClick }) => {
  const { selectedItem } = useDashboardViewState();

  const IconComponent = useMemo(() => getIconById(selectedItem.settings?.iconId),
    [selectedItem]
  );

  return (
    <Box
      sx={{
        ...f('-c-c'),
        minWidth     : pxToRem(40),
        minHeight    : pxToRem(40),
        border       : '1px solid #E5E5E5',
        borderRadius : '50%',
        cursor       : 'pointer',
      }}
      onClick={onClick}
    >
      {
        isStr(IconComponent)
          ? <Icon>{IconComponent as string}</Icon>
          : <IconComponent />
      }
    </Box>
  )
});
