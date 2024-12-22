import { FC, memo, useState, MouseEvent, useEffect } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { CardItemId, FlexDirectionType, ItemStylesField } from 'entities/card-item';
import { useDashboard } from 'entities/dashboard';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import TableRowsIcon from '@mui/icons-material/TableRows';
import { Tooltip } from 'shared/ui/tooltip';



interface Props {
  cardItemId : CardItemId
  onChange   : (field: ItemStylesField, value: number | string) => void
}


/** flex-direction */
export const FlexDirection: FC<Props> = memo(({ cardItemId, onChange }) => {
  const { styleValueByField } = useDashboard({ cardItemId, field: 'flexDirection' });
  const [alignment, setAlignment] = useState<FlexDirectionType>(styleValueByField as FlexDirectionType || 'row');


  useEffect(() => { 
    setAlignment(styleValueByField as FlexDirectionType || 'row');
  }, [styleValueByField]);
  

  const handleChange = (
    event: MouseEvent<HTMLElement>,
    newAlignment: FlexDirectionType,
  ) => {
    setAlignment(newAlignment);
    onChange('flexDirection', newAlignment);
  };

  return (
    <ToggleButtonGroup
      exclusive
      value      = {alignment}
      size       = 'small'
      aria-label = 'flex-direction'
      onChange   = {handleChange}
    >
      <Tooltip title='В столбик'>
        <ToggleButton value='column' aria-label='column'>
          <TableRowsIcon />
        </ToggleButton>
      </Tooltip>

      <Tooltip title='В строку'>
        <ToggleButton value='row' aria-label='row'>
          <ViewColumnIcon />
        </ToggleButton>
      </Tooltip>
    </ToggleButtonGroup>
  );
});
