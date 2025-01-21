import { FC, memo, useCallback, useEffect, useState } from 'react';
import { PartialCardItem, useDashboardView } from 'entities/dashboard-view';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
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
  const { selectedItem, updateCardItem } = useDashboardView();
  const [checked, setChecked] = useState(() => Boolean(getValueByScheme(selectedItem, scheme)));

  useEffect(() => {
    setChecked(Boolean(getValueByScheme(selectedItem, scheme)));
  },[selectedItem]);


  const handleToggle = useCallback(() => {
    const result: PartialCardItem = {
      id: selectedItem.id
    };

    const resultValue = ! Boolean(getValueByScheme(selectedItem, scheme));
    setValueByScheme(result, scheme, resultValue);

    updateCardItem(result);
  }, [selectedItem, updateCardItem]);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title={title} toolTitle={toolTitle} />
      
      <Tooltip title = {toolTitle}>
        <Checkbox
          size       = 'small'
          checked    = {checked}
          inputProps = {{ 'aria-label': title }}
          onChange   = {handleToggle}
        />
      </Tooltip>
    </RowWrapper>
  )
});
