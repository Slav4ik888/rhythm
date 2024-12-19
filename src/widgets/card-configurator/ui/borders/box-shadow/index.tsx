import { FC, memo, MouseEvent, useMemo, useState } from 'react';
import { Box } from '@mui/material';
import { f } from 'app/styles';
import { ConfiguratorTextTitle, ConfiguratorTextfieldItem } from 'shared/ui/configurators-components';
import { ItemStylesField } from 'entities/card-item';
import { ColorPicker } from 'shared/lib/colors-picker';



const useStyles = () => ({
  root: {
    ...f('-c-sb'),
    py : 0.5,
  },
  row: {
    ...f('-c'),
  },
  item: {
    bg: {
      ...f('-c'),
      mr    : 1,
    },
    field: {
      width : '40px',
    }
  }
});


interface Props {
  defaultValue : number | string | undefined
  onChange     : (field: ItemStylesField, value: number | string) => void
}

/** box-shadow */
export const BoxShadow: FC<Props> = memo(({ defaultValue = '', onChange }) => {
  const sx = useStyles();
  const [oX = 1, oY = 1, bR = 3, sR = 0, clr = 'rgb(184 184 184)'] = useMemo(() => String(defaultValue).split('px').map(item => item.trim()), []);

  const [offsetX,      setOffsetX]      = useState(Number(oX));
  const [offsetY,      setOffsetY]      = useState(Number(oY));
  const [blurRadius,   setBlurRadius]   = useState(Number(bR));
  const [spreadRadius, setSpreadRadius] = useState(Number(sR));
  const [color,        setColor]        = useState(clr);

  const handleSetOffsetX = (e: MouseEvent, value: number | string) => {
    setOffsetX(value as number);
    onChange('boxShadow', `${value}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${color}`);
  };

  const handleSetOffsetY = (e: MouseEvent, value: number | string) => {
    setOffsetY(value as number);
    onChange('boxShadow', `${offsetX}px ${value}px ${blurRadius}px ${spreadRadius}px ${color}`);
  };

  const handleSetBlurRadius = (e: MouseEvent, value: number | string) => {
    setBlurRadius(value as number);
    onChange('boxShadow', `${offsetX}px ${offsetY}px ${value}px ${spreadRadius}px ${color}`);
  };
  
  const handleSetSpreadRadius = (e: MouseEvent, value: number | string) => {
    setSpreadRadius(value as number);
    onChange('boxShadow', `${offsetX}px ${offsetY}px ${blurRadius}px ${value}px ${color}`);
  };

  const handleSetColor = (value: string) => {
    setColor(value);
    onChange('boxShadow', `${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${value}`);
  };


  return (
    <Box sx={sx.root}>
      <ConfiguratorTextTitle
        bold
        title     = 'box-shadow'
        toolTitle = 'box-shadow => offset-x | offset-y | blur-radius | spread-radius | color 1px 1px 3px 0px rgb(184 184 184)'
      />

      <Box sx={sx.row}>
        <ConfiguratorTextfieldItem
          type         = 'number'
          defaultValue = {oX}
          sx           = {sx.item}
          onCallback   = {handleSetOffsetX}
          onSubmit     = {handleSetOffsetX}
        />
        <ConfiguratorTextfieldItem
          type         = 'number'
          defaultValue = {oY}
          sx           = {sx.item}
          onCallback   = {handleSetOffsetY}
          onSubmit     = {handleSetOffsetY}
        />
        <ConfiguratorTextfieldItem
          type         = 'number'
          defaultValue = {bR}
          sx           = {sx.item}
          onCallback   = {handleSetBlurRadius}
          onSubmit     = {handleSetBlurRadius}
        />
        <ConfiguratorTextfieldItem
          type         = 'number'
          defaultValue = {sR}
          sx           = {sx.item}
          onCallback   = {handleSetSpreadRadius}
          onSubmit     = {handleSetSpreadRadius}
        />

        <ColorPicker
          defaultColor = {clr}
          onChange     = {handleSetColor}
        />
      </Box>
    </Box>
  )
});
