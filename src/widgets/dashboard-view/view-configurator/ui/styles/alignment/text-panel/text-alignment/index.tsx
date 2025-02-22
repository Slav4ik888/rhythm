import { FC, memo, MouseEvent } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { TextAlignType, ViewItemStylesField } from 'entities/dashboard-view';
import { Tooltip } from 'shared/ui/tooltip';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';



interface Props {
  value    : TextAlignType | undefined
  onChange : (field: ViewItemStylesField, value: number | string) => void
}

/** text-align */
export const TextAlignment: FC<Props> = memo(({ value, onChange }) => {

  const handleChange = (e: MouseEvent<HTMLElement>, newAlignment: TextAlignType) => {
    onChange('textAlign', newAlignment);
  };

  return (
    <ToggleButtonGroup
      exclusive
      value      = {value}
      size       = 'small'
      aria-label = 'align-items'
      onChange   = {handleChange}
    >
      <Tooltip title='По левому краю'>
        <ToggleButton value='flex-start' aria-label='flex-start'>
          <FormatAlignLeftIcon />
        </ToggleButton>
      </Tooltip>
      
      <Tooltip title='По центру'>
        <ToggleButton value='center' aria-label='center'>
          <FormatAlignCenterIcon />
        </ToggleButton>
      </Tooltip>

      <Tooltip title='По правому краю'>
        <ToggleButton value='flex-end' aria-label='flex-end'>
          <FormatAlignRightIcon />
        </ToggleButton>
      </Tooltip>
    </ToggleButtonGroup>
  );
});
