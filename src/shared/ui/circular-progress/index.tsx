import * as React from 'react';
import { Box, CircularProgress as Circular } from '@mui/material';
import { f } from 'shared/styles';
import { getTopCenter } from './utils';
import { useEffect } from 'react';
import { CustomTheme, useTheme } from 'app/providers/theme';



type Props = {
  loading : boolean
  id?     : string
  size?   : number
  top?    : string
  bottom? : string
  right?  : string
  left?   : string
  sx?     : any
  center? : boolean // По центру
  block?  : boolean // Заблокировать экран подсветкой
  color?  : string
}


const useStyles = (
  theme: CustomTheme,
  { id = 'CircularId', size = 30, top, bottom, right, left, sx, center, block, color }: Props
) => {
  const style = {
    root: {
      position   : 'absolute',
      width      : '100%',
      height     : '100%',
      top        : top    || 0,
      right      : right  || 0,
      bottom     : bottom || 0,
      left       : left   || 0,
      zIndex     : 9999,
      ...f('-c-c'),
      ...sx?.root
    },
    circular: {
      '&.MuiCircularProgress-root': {
        color: color || '#7a7a7a'
      },
      ...sx?.content
    }
  }

  // @ts-ignore
  if (block) {
    style.root.position      = 'fixed';
    style.root.pointerEvents = 'none';
    style.root.overflow      = 'hidden';
    style.root.touchAction   = 'none'; /* Для мобилок */
    style.root.background    = theme.palette.background.default;
    style.root.opacity       = '60%';
  }
  else {
    style.circular.position = 'absolute';
    style.circular.top = center ? getTopCenter(id, size) : top ? top : '';
  }

  return style
};


/** 2025-06-07 */
export const CircularProgress: React.FC<Props> = (props) => {
  const
    {
      loading, block,
      id   = 'CircularId',
      size = 30
    } = props,
    // ref = React.useRef(null),
    // parentDimentions = React.useMemo(() => getParentDimentions(document.getElementById(id)), [ref.current]),
    sx = useStyles(useTheme(), props);// , parentDimentions);


  // При block - блокируем прокрутку и фокус
  useEffect(() => {
    if (loading && block) {
      document.body.style.overflow = 'hidden';
      document.body.setAttribute('inert', ''); // Отключает фокус клавиатуры
    }
    else if (! loading && block) {
      document.body.style.overflow = '';
      document.body.removeAttribute('inert');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.removeAttribute('inert');
    }
  }, [loading, block]);


  if (! loading) return null;

  return (
    <Box
      id = {id}
      sx = {sx.root}
    >
      <Circular
        size = {size}
        sx   = {sx.circular}
      />
    </Box>
  );
};
