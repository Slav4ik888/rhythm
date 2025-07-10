import { memo, FC, useCallback } from 'react';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { f, SxCard, pxToRem } from 'shared/styles';
import { DefaultIconId, defaultIcons } from 'shared/assets';
import ListItemIcon from '@mui/material/ListItemIcon';
import { CustomTheme } from 'app/providers/theme';



interface Props {
  selectedIconId : DefaultIconId | null
  sx?            : SxCard
  onSelect       : (value: DefaultIconId) => void
}

export const SelectIcon: FC<Props> = memo(({ sx, selectedIconId, onSelect }) => {
  const handleChange = useCallback((e: SelectChangeEvent<unknown>) => {
    const { value } = e.target;
    if (typeof value === 'string') {
      onSelect(value as DefaultIconId);
    }
  }, [onSelect]);


  return (
    <FormControl
      sx={{
        ...f(),
        position : 'relative',
        minWidth : pxToRem(80),
        height   : pxToRem(24),
        ...sx?.root
      }}
    >
      <Select
        variant     = 'outlined'
        value       = {selectedIconId}
        renderValue = {(value) => {
          const IconComponent = defaultIcons[value as keyof typeof defaultIcons];
          return (
            <IconComponent
              sx={(theme) => ({
                '&.MuiSvgIcon-root': {
                  color    : (theme as CustomTheme).palette.text.main,
                  fontSize : '1rem'
                }
              })}
            />
          );
        }}
        onChange    = {handleChange}
      >
        {
          Object.entries(defaultIcons).map(([key, IconComponent]) => <MenuItem
            key   = {key}
            value = {key}
          >
            <ListItemIcon>
              {/* @ts-ignore */}
              <IconComponent
                sx={(theme) => ({
                  '&.MuiSvgIcon-root': {
                    color: (theme as CustomTheme).palette.text.main,
                  }
                })}
              />
            </ListItemIcon>
          </MenuItem>)
        }
      </Select>
    </FormControl>
  )
});
