import { FC, memo } from 'react';
import { Typography } from '@mui/material';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { f } from 'shared/styles';



type Type = 'title1' | 'title2' | 'subtitle1' | 'subtitle2' | 'subtitle3'
type Justify = 'center' | 'left' | 'right'


const getJustify = (justify?: Justify): string => {
  switch (justify) {
    case 'center' : return 'center';
    case 'left'   : return 'flexStart';
    case 'right'  : return 'flexEnd';

    default       : return 'center';
  }
};


const getFontSize = (type: Type): string => {
  switch (type) {
    case 'title1'    : return '1.4rem';
    case 'title2'    : return '1.3rem';
    case 'subtitle1' : return '1.2rem';
    case 'subtitle2' : return '1.1rem';
    case 'subtitle3' : return '1rem';

    default          : return '1rem';
  }
};


const getFontColor = (theme: CustomTheme, type: Type): string => {
  switch (type) {
    case 'title1'    : return theme.palette.configurator.title.title1;
    case 'title2'    : return theme.palette.configurator.title.title2;
    case 'subtitle1' : return theme.palette.configurator.title.subtitle1;
    case 'subtitle2' : return theme.palette.configurator.title.subtitle2;
    case 'subtitle3' : return theme.palette.configurator.title.subtitle3;

    default          : return theme.palette.configurator.title.subtitle1;
  }
};


const getMY = (type: Type): number => {
  switch (type) {
    case 'title1'    : return 1;
    case 'title2'    : return 1;
    case 'subtitle1' : return 0;
    case 'subtitle2' : return 0;
    case 'subtitle3' : return 0;

    default          : return 0;
  }
};


const useStyles = (theme: CustomTheme, type: Type, justify?: Justify) => {

  return {
    root: {
      ...f('-c'),
      justifyContent : getJustify(justify),
      fontSize       : getFontSize(type),
      color          : getFontColor(theme, type),
      // textShadow     : `0px 0px 1px #a7a7a7`,
      // textShadow : `0px 0px 3px ${theme.palette.dark.main}`,
      my             : getMY(type),
    },
  }
};


interface Props {
  title    : string
  type     : Type
  justify? : Justify
}

export const ConfiguratorTitle: FC<Props> = memo(({ title, type }) => {
  const sx = useStyles(useTheme(), type);

  return (
    <Typography sx={sx.root}>
      {title}
    </Typography>
  )
});
