import { FC, memo } from 'react';
import { Chip } from '@mui/material';
import { Tooltip } from 'shared/ui/tooltip';
import { f, pxToRem } from 'shared/styles';



export interface SxChipContainer {
  color      : string
  background : string
  width?     : string
  height?    : string
}


const useStyle = (sx: SxChipContainer) => {

  return {
    tooltip: {
      ...f('-c'),
      height     : pxToRem(20),
      cursor     : 'default',
    },
    chip: {
      width      : sx.width  || pxToRem(70),
      height     : sx.height || pxToRem(15),
      fontSize   : pxToRem(12),
      color      : sx.color      || '#000',
      background : sx.background || '#eee',
    },
  }
};


interface Props {
  label     : string
  toolTitle : string
  sx        : SxChipContainer
}

/**
 * Base Chip container
 */
export const ChipContainer: FC<Props> = memo(({ label, toolTitle, sx: style }) => {
  const sx = useStyle(style);

  
  return (
    <Tooltip
      title     = {toolTitle}
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
