import { FC, memo, useCallback, useEffect, useState } from 'react';
import { PartialViewItem, useDashboardView, ViewItem } from 'entities/dashboard-view';
import { getValueByScheme, setValueByScheme } from 'shared/helpers/objects';
import { Tooltip } from 'shared/ui/tooltip';
import { Checkbox } from '@mui/material';



interface Props {
  selectedItem : ViewItem | undefined
  scheme       : string // начиная с 1го уровня
  title        : string
  toolTitle    : string
}

/**
 * По схеме сохраняет изменени flags в selectedItem
 */
export const FlagByScheme: FC<Props> = memo(({ selectedItem, scheme, title, toolTitle }) => {
  const { updateViewItem } = useDashboardView();
  const [checked, setChecked] = useState(() => Boolean(getValueByScheme(selectedItem, scheme)));

  useEffect(() => {
    setChecked(Boolean(getValueByScheme(selectedItem, scheme)));
  },[selectedItem]);


  const handleToggle = useCallback(() => {
    if (! selectedItem) return;

    const result: PartialViewItem = {
      id: selectedItem.id
    };

    const resultValue = ! Boolean(getValueByScheme(selectedItem, scheme));
    setValueByScheme(result, scheme, resultValue);

    updateViewItem(result);
  }, [selectedItem, updateViewItem]);


  return (
    <Tooltip title = {toolTitle}>
      <Checkbox
        size       = 'small'
        checked    = {checked}
        inputProps = {{ 'aria-label': title }}
        onChange   = {handleToggle}
      />
    </Tooltip>
  )
});
