import { FC, memo } from 'react';
import Typography from '@mui/material/Typography';
import { Tooltip } from '../../tooltip';
import { CustomTheme } from 'app/providers/theme';



interface Props {
  title     : string
  bold?     : boolean
  toolTitle : string
}


export const ConfiguratorTextTitle: FC<Props> = memo(({ bold, toolTitle, title }) => (
  <Tooltip
    title  = {toolTitle}
    sxSpan = {{ cursor: 'default' }}
  >
    <Typography
      sx={(theme) => ({
        title: {
          fontWeight : bold ? 'bold' : 'normal',
          color      : (theme as CustomTheme).palette.configurator.title.textTitle,
          // textShadow : bold ? '1px 1px 8px #9e9e9e' : 'none',
          width      : 'max-content',
          mr         : 1,
        },
      })}
    >
      {title}
    </Typography>
  </Tooltip>
));
