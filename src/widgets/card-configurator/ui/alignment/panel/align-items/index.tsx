import { FC, memo, MouseEvent } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { AlignItemsType, ItemStylesField } from 'entities/card-item';
import { Tooltip } from 'shared/ui/tooltip';
import AlignVerticalTopIcon from '@mui/icons-material/AlignVerticalTop';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';



interface Props {
  value    : AlignItemsType
  onChange : (field: ItemStylesField, value: number | string) => void
}


/** align-items */
export const AlignItems: FC<Props> = memo(({ value = 'center', onChange }) => {

  const handleChange = (e: MouseEvent<HTMLElement>, newAlignment: AlignItemsType) => {
    onChange('alignItems', newAlignment);
  };


  return (
    <ToggleButtonGroup
      exclusive
      value      = {value}
      size       = 'small'
      aria-label = 'align-items'
      onChange   = {handleChange}
    >
      <Tooltip title='По верхнему краю'>
        <ToggleButton value='flex-start' aria-label='flex-start'>
          <AlignVerticalTopIcon />
        </ToggleButton>
      </Tooltip>

      <Tooltip title='По нижнему краю'>
        <ToggleButton value='flex-end' aria-label='flex-end'>
          <AlignVerticalBottomIcon />
        </ToggleButton>
      </Tooltip>
      
      <Tooltip title='По центру'>
        <ToggleButton value='center' aria-label='center'>
          <AlignVerticalCenterIcon />
        </ToggleButton>
      </Tooltip>

      <Tooltip title='По базовой линии'>
        <ToggleButton value='baseline' aria-label='baseline'>
          <VerticalAlignTopIcon />
        </ToggleButton>
      </Tooltip>

      <Tooltip title='Растянуть'>
        <ToggleButton value='stretch' aria-label='stretch'>
          <FormatLineSpacingIcon />
        </ToggleButton>
      </Tooltip>
    </ToggleButtonGroup>
  );
});
