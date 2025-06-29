import { FC, memo, useCallback, useEffect, useState } from 'react';
import { useDashboardViewActions, ViewItem } from 'entities/dashboard-view';
import { getValueByScheme } from 'shared/helpers/objects';
import { Tooltip } from 'shared/ui/tooltip';
import Checkbox from '@mui/material/Checkbox';
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
  const isChecked = Boolean(getValueByScheme(selectedItem, scheme));

  const { updateViewItems } = useDashboardViewActions();
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
        sx         = {sx?.root}
        onChange   = {handleToggle}
      />
    </Tooltip>
  )
});
