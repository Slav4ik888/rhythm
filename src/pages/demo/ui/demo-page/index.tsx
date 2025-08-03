import { FC, memo } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CustomTheme } from 'app/providers/theme';
import { f, pxToRem } from 'shared/styles';
import { LayoutInnerPage } from 'shared/ui/pages';
import { Link } from 'react-router-dom';
import { DemoPageType } from '../../model/constants';
import { getImgByIdAndTheme } from '../../model/utils';



interface Props {
  darkMode : boolean
  item     : DemoPageType
}

export const DemoPageItem: FC<Props> = memo(({ item, darkMode }) => {
  console.log('darkMode: ', darkMode);
  const { link, title, caption } = item;

  return (
    <Link to={link}>
      <Box
        sx={(theme) => ({
          ...f('c'),
          gap             : pxToRem(16),
          border          : `1px solid ${(theme as CustomTheme).palette.text.light}`,
          borderRadius    : '5px',
          width           : pxToRem(400),
          height          : 'max-content', // pxToRem(300),
          color           : (theme as CustomTheme).palette.text.light,
          backgroundColor : darkMode ? '#292929' : 'rgba(2c,2c,2c,0.8)',
          p               : pxToRem(12),
          cursor          : 'pointer',

          transition      : theme.transitions.create(['border', 'background-color'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.shorter,
          }),

          '&:hover': {
            border          : `1px solid ${(theme as CustomTheme).palette.text.dark}`,
            backgroundColor : darkMode ? '#313131' : 'rgba(2c,2c,2c,1)',
          }
        })}
      >
        <Typography
          variant = 'h6'
          sx      = {(theme) => ({
            textAlign : 'center',
            color     : (theme as CustomTheme).palette.text.dark,
          })}
        >
          {title}
        </Typography>

        <Box
          component = 'img'
          src       = {getImgByIdAndTheme(item.id, darkMode)}
          alt       = 'demo-pecar-colors'
          sx        = {(theme) => ({
            width        : '100%',
            border       : `1px solid ${(theme as CustomTheme).palette.text.light}`,
            borderRadius : '5px',
            p            : 0.5,
          })}
        />

        <Typography
          variant = 'caption'
          sx      = {(theme) => ({
            textAlign : 'left',
            textStyle : 'italic',
            color     : (theme as CustomTheme).palette.text.main,
          })}
        >
          {caption}
        </Typography>
      </Box>
    </Link>
  )
});
