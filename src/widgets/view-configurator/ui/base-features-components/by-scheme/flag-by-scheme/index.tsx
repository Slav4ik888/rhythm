import { FC, memo, useCallback, useEffect, useState } from 'react';
import { useDashboardView, ViewItem } from 'entities/dashboard-view';
import { getValueByScheme } from 'shared/helpers/objects';
import { Tooltip } from 'shared/ui/tooltip';
import { Checkbox } from '@mui/material';
import { SxCard } from 'shared/styles';
import { updater } from '../utils';



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
export const FlagByScheme: FC<Props> = memo(({ selectedItem, scheme, title, toolTitle, sx }) => {
  const { updateViewItem } = useDashboardView();
  const [checked, setChecked] = useState(() => Boolean(getValueByScheme(selectedItem, scheme)));

  useEffect(() => {
    setChecked(Boolean(getValueByScheme(selectedItem, scheme)));
  },[selectedItem]);


  const handleToggle = useCallback(() => {
    updater(! Boolean(getValueByScheme(selectedItem, scheme)), selectedItem, scheme, updateViewItem);
  }, [selectedItem, updateViewItem]);


  return (
    <Tooltip title = {toolTitle}>
      <Checkbox
        size       = 'small'
        checked    = {checked}
        inputProps = {{ 'aria-label': title }}
        sx         = {sx?.root}
        onChange   = {handleToggle}
      />
    </Tooltip>
  )
});
