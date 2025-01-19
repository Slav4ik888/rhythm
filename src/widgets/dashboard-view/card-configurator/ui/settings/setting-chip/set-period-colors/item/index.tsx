import { FC, memo } from 'react';
import { RowWrapper } from 'shared/ui/configurators-components';
import { ChipContainer, useDashboardView } from 'entities/dashboard-view';
import { ColorPicker } from 'shared/lib/colors-picker';
import { ColorSettingsType, useCompany } from 'entities/company';



interface Props {
  period: string
}

/**  */
export const SetPeriodColorsItem: FC<Props> = memo(({ period }) => {
  const { customSettings, updateCustomSettings } = useCompany();
  const { } = useDashboardView();
  const color = customSettings?.periodType?.[period]?.color || '';
  const background = customSettings?.periodType?.[period]?.background || '';
  
  const handleChangeColor = (type: ColorSettingsType, value: string) => {
    updateCustomSettings({
      periodType: {
        [period]: {
          [type]: value
        }
    }});
  };
  

  return (
    <RowWrapper>
      <ChipContainer
        label     = {period}
        toolTitle = {period}
        sx        = {{ color, background }}
      />
      <ColorPicker
        defaultColor = {color}
        onChange     = {(value: string) => handleChangeColor('color', value)}
      />
      <ColorPicker
        defaultColor = {background}
        onChange     = {(value: string) => handleChangeColor('background', value)}
      />
    </RowWrapper>
  )
});
