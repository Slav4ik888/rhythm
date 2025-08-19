import { FC, memo } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { useTheme } from 'app/providers/theme';
import { f, pxToRem } from 'shared/styles';
import { NavLink } from 'react-router-dom';
import { DemoPageType } from '../../model/constants';
import { getImgByIdAndTheme } from '../../model/utils';
import { ProgressiveImage } from 'shared/lib/progressiv-image';



interface Props {
  darkMode : boolean
  item     : DemoPageType
}

export const DemoPageItem: FC<Props> = memo(({ item, darkMode }) => {
  const { palette: { text, background }, transitions } = useTheme();
  const { route, title, caption } = item;

  return (
    <NavLink to={route}>
      <Paper
        sx={{
          ...f('c'),
          width           : pxToRem(400),
          height          : pxToRem(360),
          gap             : pxToRem(16),
          color           : text.light,
          backgroundColor : background.demoPage,
          borderRadius    : '5px',
          p               : pxToRem(12),
          cursor          : 'pointer',

          transition      : transitions.create(['border', 'background-color'], {
            easing: transitions.easing.sharp,
            duration: transitions.duration.shorter,
          }),

          '&:hover': {
            backgroundColor : background.demoPageHover,
          }
        }}
      >
        <Typography
          variant = 'h6'
          sx      = {{ textAlign: 'center', color: text.dark }}
        >
          {title}
        </Typography>

        <ProgressiveImage
          placeholder = {getImgByIdAndTheme(item.id, darkMode).ph}
          src         = {getImgByIdAndTheme(item.id, darkMode).src}
          alt         = {item.alt}
          sx          = {{
            root: {
              width        : '100%',
              maxHeight    : '230px',
              overflowY    : 'scroll',
              border       : `1px solid ${text.light}`,
              borderRadius : '5px',
              p            : 0.5,
            }
          }}
        />
        {/* <Box
          component = 'img'
          src       = {getImgByIdAndTheme(item.id, darkMode).src}
          alt       = 'demo-pecar-colors'
          sx        = {(theme) => ({
            width        : '100%',
            border       : `1px solid ${text.light}`,
            borderRadius : '5px',
            p            : 0.5,
          })}
        /> */}

        <Typography
          variant = 'caption'
          sx      = {{
            textAlign : 'left',
            textStyle : 'italic',
            color     : text.main,
          }}
        >
          {caption}
        </Typography>
      </Paper>
    </NavLink>
  )
});
