import { FC, memo, useCallback, MouseEvent } from 'react';
import { Box, Typography } from '@mui/material';
import { ViewItemStylesField } from 'entities/dashboard-view';
import { f, SxCard } from 'shared/styles';
import { useValue } from 'shared/lib/hooks';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { ConfiguratorTextfieldItem } from '../../configurators-components';
import { Tooltip } from '../../tooltip';
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
  field?      : ViewItemStylesField
  width?      : string // in rem
  title?      : string
  toolTitle?  : string
  disabled?   : boolean
  sx?         : SxCard
  onClear?    : () => void // Для очистки значения если нужно чтобы было не пустая строка ''
  onCallback? : (field: ViewItemStylesField, value: number | string) => void
  onSubmit    : (field: ViewItemStylesField, value: number | string) => void
}

/**
 * DEPRECATED - оставил только для образца или где-то позже модель пригодится
 *
 * Изначально Box, при клике меняется на TextField,
 * для того, чтобы при изменении входных значений в открывающемся TextField
 * появлялись новые значения
 */
export const ChangeStyleItem: FC<Props> = memo(({
  type, sx: style, value, width, field, title, toolTitle, disabled, onClear, onCallback, onSubmit
}) => {
  const sx = useStyles(useTheme(), style, width);
  const hookOpen = useValue();

  const handleOpen = () => {
    if (disabled) return;
    hookOpen.setOpen();
  };


  const handleCallback = useCallback((e: MouseEvent, _value: number | string) => {
    onCallback && onCallback(field as ViewItemStylesField, _value as number);
  }, [field, onCallback]);


  const handleSubmit = useCallback((e: MouseEvent, _value: number | string) => {
    onSubmit(field as ViewItemStylesField, _value as number);
    hookOpen.setClose();
  }, [field, hookOpen, onSubmit]);


  const handleClear = () => {
    if (onClear) onClear()
    else onSubmit(field as ViewItemStylesField, '' as unknown as number)

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
