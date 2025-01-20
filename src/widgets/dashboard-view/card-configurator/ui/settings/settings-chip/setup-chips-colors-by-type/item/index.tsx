import { FC, memo } from 'react';
import { RowWrapper } from 'shared/ui/configurators-components';
import { BaseChipType, ChipContainer } from 'entities/dashboard-view';
import { ColorPicker } from 'shared/lib/colors-picker';
import { ColorSettingsType, useCompany } from 'entities/company';
import { Box } from '@mui/material';
import { f } from 'shared/styles';



interface Props {
  type  : BaseChipType
  label : string
}

/**  */
export const SetColorsItem: FC<Props> = memo(({ type, label }) => {
  const { customSettings, updateCustomSettings } = useCompany();
  const color = customSettings?.[type]?.[label]?.color || '';
  const background = customSettings?.[type]?.[label]?.background || '';
  
  const handleChangeColor = (colorType: ColorSettingsType, value: string) => {
    updateCustomSettings({
      [type]: {
        [label]: {
          [colorType]: value
        }
    }});
  };
  

  return (
    <RowWrapper>
      <ChipContainer
        label     = {label}
        toolTitle = {label}
        sx        = {{ color, background }}
      />
      <Box sx={f()}>
        <ColorPicker
          defaultColor = {color}
          sx           = {{ root: { mr: 1 }}}
          onChange     = {(value: string) => handleChangeColor('color', value)}
        />
        <ColorPicker
          defaultColor = {background}
          onChange     = {(value: string) => handleChangeColor('background', value)}
        />
      </Box>
    </RowWrapper>
  )
});
