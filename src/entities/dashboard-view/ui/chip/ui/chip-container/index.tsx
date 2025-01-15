import { FC, memo } from 'react';
import { Chip } from '@mui/material';
import { Tooltip } from 'shared/ui/tooltip';
import { f, pxToRem } from 'shared/styles';



interface SxChipContaine {
  color      : string
  background : string
}

const useStyle = (sx: SxChipContaine) => {

  return {
    tooltip: {
      ...f('-c'),
      height     : pxToRem(20),
      cursor     : 'default',
    },
    chip: {
      width      : pxToRem(70),
      height     : pxToRem(15),
      fontSize   : pxToRem(12),
      color      : sx.color      || '#000',
      background : sx.background || '#eee',
    },
  }
};


interface Props {
  label       : string
  description : string
  sx          : SxChipContaine
}

/**
 * Base Chip container
 */
export const ChipContainer: FC<Props> = memo(({ label, description, sx: style }) => {
  const sx = useStyle(style);

  
  return (
    <Tooltip
      title     = {description}
      placement = 'top-start'
      sxSpan    = {sx?.tooltip}
    >
      <Chip
        label = {label}
        size  = "small"
        sx    = {sx?.chip}
      />
    </Tooltip>
  )
});
