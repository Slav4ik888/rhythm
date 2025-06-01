import * as React from 'react';
import { Box, styled, Tooltip as MuiTooltip, TooltipProps, tooltipClasses, Typography } from '@mui/material';
import { isEmpty } from 'shared/helpers/objects';


const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'rgba(211, 211, 211, 0.87)',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 300,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

const useStyles = (cfg?: AbsoluteType) => {
  if (isEmpty(cfg)) return

  const wrap: React.CSSProperties = {
    position: 'absolute'
  };

  if (cfg?.top)    wrap.top    = cfg?.top    + 'px';
  if (cfg?.right)  wrap.right  = cfg?.right  + 'px';
  if (cfg?.bottom) wrap.bottom = cfg?.bottom + 'px';
  if (cfg?.left)   wrap.left   = cfg?.left   + 'px';

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
  title?          : React.ReactNode
  arrow?          : boolean
  enterDelay?     : number 
  enterNextDelay? : number
  absolute?       : AbsoluteType // If tooltip in component with absolute position
  placement?      : TooltipProps["placement"]
  /** Style for span */
  sxSpan?         : React.CSSProperties
  sxRoot?         : Object
  children        : JSX.Element | JSX.Element[]
};


/** v.2025-06-01 */
export const TooltipHTML: React.FC<Props> = React.memo(({
  sxRoot,
  sxSpan,
  children,
  arrow          = false,
  title          = '',
  placement      = 'bottom',
  enterDelay     = 1000,
  enterNextDelay = 1000,
  absolute
}) => {
  const sx = useStyles(absolute);
  
  const component = (
    <HtmlTooltip
      arrow          = {arrow}
      title          = {title}
      placement      = {placement}
      enterDelay     = {enterDelay}
      enterNextDelay = {enterNextDelay}
      sx             = {{ ...sxRoot, fontSize: '1rem', cursor: 'default' }}
    >
      <span style={{ ...sxSpan, cursor: 'default' }}>
        {children}
      </span>
    </HtmlTooltip>
  );
    

  const wrapped = (
    <Box sx={{ ...sx?.wrap, ...sxRoot }}>
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
