import { FC, memo } from 'react';
import Typography from '@mui/material/Typography';
import { Tooltip } from '../../tooltip';
import { useTheme, CustomTheme } from 'app/providers/theme';



const useStyles = (theme: CustomTheme, bold?: boolean) => ({
  title: {
    fontWeight : bold ? 'bold' : 'normal',
    color      : theme.palette.configurator.title.textTitle,
    // textShadow : bold ? '1px 1px 8px #9e9e9e' : 'none',
    width      : 'max-content',
    mr         : 1,
  },
});


interface Props {
  title     : string
  bold?     : boolean
  toolTitle : string
}


export const ConfiguratorTextTitle: FC<Props> = memo(({ bold, toolTitle, title }) => {
  const sx = useStyles(useTheme(), bold);

  return (
    <Tooltip
      title  = {toolTitle}
      sxSpan = {{ cursor: 'default' }}
    >
      <Typography sx={sx.title}>{title}</Typography>
    </Tooltip>
  )
});
