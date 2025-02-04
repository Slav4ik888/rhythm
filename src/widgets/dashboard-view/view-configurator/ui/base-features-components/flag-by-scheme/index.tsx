import { FC, memo, useCallback, useEffect, useState } from 'react';
import { PartialViewItem, useDashboardView } from 'entities/dashboard-view';
import { getValueByScheme, setValueByScheme } from 'shared/helpers/objects';
import { Tooltip } from 'shared/ui/tooltip';
import { Checkbox } from '@mui/material';



interface Props {
  scheme    : string // начиная с 1го уровня
  title     : string
  toolTitle : string
}

/**
 * По схеме сохраняет изменени flags в selectedItem
 */
export const FlagByScheme: FC<Props> = memo(({ scheme, title, toolTitle }) => {
  const { selectedItem, updateViewItem } = useDashboardView();
  const [checked, setChecked] = useState(() => Boolean(getValueByScheme(selectedItem, scheme)));

  useEffect(() => {
    setChecked(Boolean(getValueByScheme(selectedItem, scheme)));
  },[selectedItem]);


  const handleToggle = useCallback(() => {
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
