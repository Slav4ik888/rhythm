import * as React from 'react';
import { Box, CircularProgress as Circular } from '@mui/material';
import { f_c_c } from 'app/styles-old';
import { SxCard } from 'app/styles-old/types';
import { getTopCenter } from './utils';


  
type Props = {
  loading : boolean
  id?     : string
  size?   : number
  top?    : string
  bottom? : string
  right?  : string
  left?   : string
  sx?     : SxCard
  center? : boolean // По центру
  block?  : boolean // Заблокировать экран подсветкой
}


/** v.2023.08.20 */
const useStyles = (
  // sx: SxCard
  { id = 'CircularId', size = 30, top, bottom, right, left, sx, center, block }: Props
  // parentDimentions: ElementDimentions
) => {
  // const h = getCenterHeight(id);//parentDimentions?.height);

  const style = {
    root: {
      position   : 'absolute',
      width      : '100%',
      height     : '100%',
      top        : top    || 0,
      right      : right  || 0,
      bottom     : bottom || 0,
      left       : left   || 0,
      zIndex     : 2000,
      opacity    : block ? '60%'  : 'inherit',
      ...f_c_c,
      ...sx?.root
    },
    circular: {
      position : 'absolute',
      // color    : '#909040',
      top      : () => center ? getTopCenter(id, size) : top ? top : '',
      // bottom   : () => bottom ? bottom : '0px',
      // left     : () => center ? `calc(${parentDimentions?.width / 2}px - ${size / 2}px)` : left ? left : '0px',
      // right    : () => right ? right : '0px',
      // zIndex   : 2010,
      '&.MuiCircularProgress-root': {
        color: '#7a7a7a'
      },
      ...sx?.content
    }
  }

  // @ts-ignore
  if (block) style.root.background = '#c7c7c7';

  return style
};


/** 2024-01-21 */
export const CircularProgress: React.FC<Props> = (props) => {
  const
    {
      loading,
      id   = 'CircularId',
      size = 30
    } = props,
    // ref = React.useRef(null),
    // parentDimentions = React.useMemo(() => getParentDimentions(document.getElementById(id)), [ref.current]),
    sx = useStyles(props);//, parentDimentions);
  

  if (! loading) return null;
  
  
  return (
    <Box id={id} sx={sx.root}>
      <Circular size={size} sx={sx.circular} />
    </Box>
  );
};
