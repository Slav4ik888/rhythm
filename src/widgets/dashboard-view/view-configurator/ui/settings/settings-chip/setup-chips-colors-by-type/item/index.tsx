import { FC, memo, MouseEvent } from 'react';
import { RowWrapper } from 'shared/ui/configurators-components';
import { BaseChipType, ChipContainer } from 'entities/dashboard-view';
import { ColorPicker } from 'shared/lib/colors-picker';
import { ColorSettingsType, useCompany } from 'entities/company';
import { Box } from '@mui/material';
import { f, pxToRem } from 'shared/styles';
import { Input } from 'shared/ui/containers';



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

  const handleSubmit = (e: MouseEvent, title: string | number) => {
    updateCustomSettings({
      [type]: {
        [label]: {
          title
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

      {
        type === 'periodType' && (
          <Input
            defaultValue = {customSettings?.[type]?.[label]?.title || ''}
            changesValue = {customSettings?.[type]?.[label]?.title || ''}
            toolTitle    = 'Введите название поля'
            sx           = {{ field: { height: pxToRem(40)}}}
            onBlur       = {handleSubmit}
            onChange     = {() => {}}
            onSubmit     = {handleSubmit}
          />
        )
      }
      

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
