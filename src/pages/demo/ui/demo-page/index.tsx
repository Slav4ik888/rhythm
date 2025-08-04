import { FC, memo } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { CustomTheme } from 'app/providers/theme';
import { f, pxToRem } from 'shared/styles';
import { Link } from 'react-router-dom';
import { DemoPageType } from '../../model/constants';
import { getImgByIdAndTheme } from '../../model/utils';



interface Props {
  darkMode : boolean
  item     : DemoPageType
}

export const DemoPageItem: FC<Props> = memo(({ item, darkMode }) => {
  const { link, title, caption } = item;

  return (
    <Link to={link}>
      <Paper
        sx={(theme) => ({
          ...f('c'),
          gap             : pxToRem(16),
          borderRadius    : '5px',
          width           : pxToRem(400),
          height          : 'max-content', // pxToRem(300),
          color           : (theme as CustomTheme).palette.text.light,
          backgroundColor : (theme as CustomTheme).palette.background.demoPage,
          p               : pxToRem(12),
          cursor          : 'pointer',

          transition      : theme.transitions.create(['border', 'background-color'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.shorter,
          }),

          '&:hover': {
            backgroundColor : (theme as CustomTheme).palette.background.demoPageHover,
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
      </Paper>
    </Link>
  )
});
