import { FC, memo, useEffect, useMemo, useState } from 'react';
import { Box } from '@mui/material';
import { f } from 'app/styles';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { CardItemId, ItemStylesField } from 'entities/card-item';
import { ColorPicker } from 'shared/lib/colors-picker';
import { useDashboard } from 'entities/dashboard';
import { ChangeStyleTextfieldBoxShadow } from './textfield-change-component';


const splitShadow = (value: number | string | undefined = '') => String(value).split('px').map(item => item.trim());




interface Props {
  cardItemId : CardItemId
  onChange   : (field: ItemStylesField, value: number | string) => void
}

/** box-shadow */
export const BoxShadow: FC<Props> = memo(({ cardItemId, onChange }) => {
  const { styleValueByField } = useDashboard({ cardItemId, field: 'boxShadow' });
  const [oX = 1, oY = 1, bR = 3, sR = 0, clr = 'rgb(184 184 184)'] = useMemo(() => splitShadow(styleValueByField), []);

  const [offsetX,      setOffsetX]      = useState(Number(oX));
  const [offsetY,      setOffsetY]      = useState(Number(oY));
  const [blurRadius,   setBlurRadius]   = useState(Number(bR));
  const [spreadRadius, setSpreadRadius] = useState(Number(sR));
  const [color,        setColor]        = useState(clr);

  useEffect(() => {
    const [oX = 1, oY = 1, bR = 3, sR = 0, clr = 'rgb(184 184 184)'] = splitShadow(styleValueByField);

    setOffsetX(Number(oX));
    setOffsetY(Number(oY));
    setBlurRadius(Number(bR));
    setSpreadRadius(Number(sR));
    setColor(clr);
  }, [styleValueByField]);


  const handleSetOffsetX = (field: ItemStylesField, value: number) => {
    setOffsetX(value as number);
    onChange('boxShadow', `${value}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${color}`);
  };

  const handleSetOffsetY = (field: ItemStylesField, value: number) => {
    setOffsetY(value as number);
    onChange('boxShadow', `${offsetX}px ${value}px ${blurRadius}px ${spreadRadius}px ${color}`);
  };

  const handleSetBlurRadius = (field: ItemStylesField, value: number) => {
    setBlurRadius(value as number);
    onChange('boxShadow', `${offsetX}px ${offsetY}px ${value}px ${spreadRadius}px ${color}`);
  };
  
  const handleSetSpreadRadius = (field: ItemStylesField, value: number) => {
    setSpreadRadius(value as number);
    onChange('boxShadow', `${offsetX}px ${offsetY}px ${blurRadius}px ${value}px ${color}`);
  };

  const handleSetColor = (value: string) => {
    setColor(value);
    onChange('boxShadow', `${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${value}`);
  };


  return (
    <RowWrapper>
      <ConfiguratorTextTitle
        bold
        title     = 'box-shadow'
        toolTitle = 'box-shadow => offset-x | offset-y | blur-radius | spread-radius | color 1px 1px 3px 0px rgb(184 184 184)'
      />

      <Box sx={{ ...f('-c') }}>
        <ChangeStyleTextfieldBoxShadow
          value      = {offsetX}
          onCallback = {handleSetOffsetX}
          onSubmit   = {handleSetOffsetX}
        />
        <ChangeStyleTextfieldBoxShadow
          value      = {offsetY}
          onCallback = {handleSetOffsetY}
          onSubmit   = {handleSetOffsetY}
        />
        <ChangeStyleTextfieldBoxShadow
          value      = {blurRadius}
          onCallback = {handleSetBlurRadius}
          onSubmit   = {handleSetBlurRadius}
        />
        <ChangeStyleTextfieldBoxShadow
          value      = {spreadRadius}
          onCallback = {handleSetSpreadRadius}
          onSubmit   = {handleSetSpreadRadius}
        />

        <ColorPicker
          defaultColor = {color}
          onChange     = {handleSetColor}
        />
      </Box>
    </RowWrapper>
  )
});
