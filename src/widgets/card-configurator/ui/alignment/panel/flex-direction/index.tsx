import { FC, memo, MouseEvent } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { FlexDirectionType, ItemStylesField } from 'entities/card-item';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import TableRowsIcon from '@mui/icons-material/TableRows';
import { Tooltip } from 'shared/ui/tooltip';



interface Props {
  value    : FlexDirectionType
  onChange : (field: ItemStylesField, value: number | string) => void
}

/** flex-direction */
export const FlexDirection: FC<Props> = memo(({ value = 'row', onChange }) => {

  const handleChange = (e: MouseEvent<HTMLElement>, newAlignment: FlexDirectionType) => {
    onChange('flexDirection', newAlignment);
  };


  return (
    <ToggleButtonGroup
      exclusive
      value      = {value}
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
