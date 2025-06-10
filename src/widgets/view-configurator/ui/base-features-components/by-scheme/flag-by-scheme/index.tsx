import { FC, memo, useCallback, useEffect, useState } from 'react';
import { useDashboardView, ViewItem } from 'entities/dashboard-view';
import { getValueByScheme } from 'shared/helpers/objects';
import { Tooltip } from 'shared/ui/tooltip';
import Checkbox from '@mui/material/Checkbox';
import { SxCard } from 'shared/styles';
import { updater } from '../utils';



export const useStyles = (sx?: SxCard) => ({
  '&.Mui-checked': {
    color: 'text.light',
    '& .MuiSvgIcon-root': {
      color: 'text.light',
    },
  },
  '&:not(.Mui-checked)': {
    color: 'text.light',
    '& .MuiSvgIcon-root': {
      color: 'text.light',
    },
  },
  ...sx?.root
});


interface Props {
  selectedItem : ViewItem | undefined
  scheme       : string // начиная с 1го уровня
  title        : string
  toolTitle    : string
  sx?          : SxCard
}

/**
 * По схеме сохраняет изменени flags в selectedItem
 * в том числе scheme with array
 */
export const FlagByScheme: FC<Props> = memo(({ selectedItem, scheme, title, toolTitle, sx: style }) => {
  const sx = useStyles(style);
  const isChecked = Boolean(getValueByScheme(selectedItem, scheme));

  const { updateViewItems } = useDashboardView();
  const [checked, setChecked] = useState(() => isChecked);

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  const handleToggle = useCallback(() => {
    updater(! isChecked, selectedItem, scheme, updateViewItems);
  }, [scheme, selectedItem, isChecked, updateViewItems]);


  return (
    <Tooltip title = {toolTitle}>
      <Checkbox
        size       = 'small'
        checked    = {checked}
        inputProps = {{ 'aria-label': title }}
        sx         = {sx}
        onChange   = {handleToggle}
      />
    </Tooltip>
  )
});
