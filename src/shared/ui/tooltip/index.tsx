import * as React from 'react';
import { Box, Tooltip as MuiTooltip, TooltipProps } from '@mui/material';
import { isEmpty } from 'shared/helpers/objects';


const useStyles = (cfg: AbsoluteType) => {
  if (isEmpty(cfg)) return

  const wrap: React.CSSProperties = {
    position: 'absolute'
  };

  if (cfg.top)    wrap.top    = cfg.top    + 'px';
  if (cfg.right)  wrap.right  = cfg.right  + 'px';
  if (cfg.bottom) wrap.bottom = cfg.bottom + 'px';
  if (cfg.left)   wrap.left   = cfg.left   + 'px';

  return ({
    wrap: {
      ...wrap
    },
    content: {
      position: 'relative'
    }
  })
};


interface AbsoluteType {
  top?    : number
  right?  : number
  bottom? : number
  left?   : number
}

type Props = {
  title?          : string
  enterDelay?     : number 
  enterNextDelay? : number
  absolute?       : AbsoluteType // If tooltip in component with absolute position
  placement?      : TooltipProps["placement"]
  /** Style for span */
  sxSpan?         : Object
  children        : JSX.Element | JSX.Element[]
};


/** v.2023-09-23 */
export const Tooltip: React.FC<Props> = React.memo(({
  sxSpan,
  children,
  title          = '',
  placement      = 'bottom',
  enterDelay     = 1000,
  enterNextDelay = 1000,
  absolute       = {} as AbsoluteType
}) => {
  const sx = useStyles(absolute);
  
  const component = (
    <MuiTooltip
      arrow
      title          = {title}
      placement      = {placement}
      enterDelay     = {enterDelay}
      enterNextDelay = {enterNextDelay}
    >
      <span style={sxSpan}>
        {children}
      </span>
    </MuiTooltip>
  );

  const wrapped = (
    <Box sx={sx?.wrap}>
      <Box sx={sx?.content}>
        {component}
      </Box>
    </Box>
  );

  return (
    <>
      {
        absolute ? wrapped : component
      }
    </>
  )
});
