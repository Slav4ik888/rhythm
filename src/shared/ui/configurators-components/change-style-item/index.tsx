import { FC, memo, useCallback, MouseEvent } from 'react';
import { Box, Typography } from '@mui/material';
import { ItemStylesField } from 'entities/dashboard-view';
import { f, SxCard } from 'shared/styles';
import { useValue } from 'shared/lib/hooks';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { ConfiguratorTextfieldItem } from 'shared/ui/configurators-components';
import { Tooltip } from 'shared/ui/tooltip';
import ClearIcon from '@mui/icons-material/Clear';



const useStyles = (theme: CustomTheme, sx?: SxCard, width?: string) => ({
  wrapper: {
    ...f('c-c-fs'),
    width: width || '2.5rem',
    ...sx?.root,
  },
  valueBox: {
    ...f('-fs'),
    width: '100%',
  },
  textBox: {
    ...f('c-c-c'),
    width        : '100%', // width || '2rem',
    height       : '1.4375em;',
    border       : `1px solid ${theme.palette.dark.light}`,
    borderRadius : '4px',
    ...sx?.field
  },
  smallTitle: {
    fontSize   : '0.9rem',
    fontWeight : 'normal',
  },
  item: {
    bg: {
      ...f('-c'),
      mr    : 1,
    },
    field: {
      width : sx?.root?.width || width || '2.5rem',
      ...sx?.field
    }
  },
  clearBtn: {
    cursor   : 'pointer',
    fontSize : '0.9rem',
    color    : theme.palette.dark.light,
  },
});


interface Props {
  type        : 'number' | 'text'
  value       : number | string
  field?      : ItemStylesField
  width?      : string // in rem
  title?      : string
  toolTitle?  : string
  disabled?   : boolean
  sx?         : SxCard
  onCallback? : (field: ItemStylesField, value: number | string) => void
  onSubmit    : (field: ItemStylesField, value: number | string) => void
}

/**
 * Изначально Box, при клике меняется на TextField,
 * для того, чтобы при изменении входных значений в открывающемся TextField
 * появлялись новые значения
 */
export const ChangeStyleItem: FC<Props> = memo(({ type, sx: style, value, width, field, title, toolTitle, disabled, onCallback, onSubmit }) => {
  const sx = useStyles(useTheme(), style, width);
  const hookOpen = useValue();
  
  const handleOpen = () => {
    if (disabled) return;
    hookOpen.setOpen();
  };


  const handleCallback = useCallback((e: MouseEvent, _value: number | string) => {
    if (onCallback) {
      onCallback(field as ItemStylesField, _value as number);
    }
  },[value, field, onCallback]);


  const handleSubmit = useCallback((e: MouseEvent, _value: number | string) => {
    onSubmit(field as ItemStylesField, _value as number);
    hookOpen.setClose();
  },[value, field, hookOpen.setClose, onSubmit]);
  
  
  const handleClear = () => {
    onSubmit(field as ItemStylesField, '' as unknown as number);
    hookOpen.setClose();
  };


  return (
    <Box sx={sx.wrapper}>
      <Box sx={sx.valueBox}>
        {
          ! hookOpen.open
            ? <Tooltip title={toolTitle} sxSpan={{ width: '100%' }}>
                <Box sx={sx.textBox} onClick={handleOpen}>
                  {value}
                </Box>
              </Tooltip>

            : <ConfiguratorTextfieldItem
                autoFocus
                type         = {type}
                defaultValue = {value}
                sx           = {sx.item}
                onCallback   = {handleCallback}
                onSubmit     = {handleSubmit}
              />
        }
        {
          value ? <ClearIcon sx={sx.clearBtn} onClick={handleClear} /> : ''
        }
      </Box>
      {
        title && <Typography sx={sx.smallTitle}>{title}</Typography>
      }
    </Box>
  )
});
