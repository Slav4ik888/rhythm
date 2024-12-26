import { FC, memo, useEffect, useMemo, useState } from 'react';
import { Box } from '@mui/material';
import { f } from 'app/styles';
import { ChangeStyleItem, ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { CardItemId, ItemStylesField, useDashboardView } from 'entities/dashboard-view';
import { ColorPicker } from 'shared/lib/colors-picker';



const splitShadow = (value: number | string | undefined = '') => String(value).split('px').map(item => item.trim());


interface Props {
  cardItemId : CardItemId
  onChange   : (field: ItemStylesField, value: number | string) => void
}

/**
 * box-shadow
 * TODO: галочку - показать тень или нет, и если нет то не отрисовывать компонент (как в градиенте для background)
 */
export const BoxShadow: FC<Props> = memo(({ cardItemId, onChange }) => {
  const { styleValueByField } = useDashboardView({ cardItemId, field: 'boxShadow' });
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
        toolTitle = '1px 1px 3px 0px rgb(184 184 184) => offset-x | offset-y | blur-radius | spread-radius | color'
      />

      <Box sx={{ ...f('-c') }}>
        <ChangeStyleItem
          value      = {offsetX}
          toolTitle  = 'offset-x'
          sx         = {{ root: { mx: 1 }}}
          onCallback = {handleSetOffsetX}
          onSubmit   = {handleSetOffsetX}
        />
        <ChangeStyleItem
          value      = {offsetY}
          toolTitle  = 'offset-y'
          sx         = {{ root: { mx: 1 }}}
          onCallback = {handleSetOffsetY}
          onSubmit   = {handleSetOffsetY}
        />
        <ChangeStyleItem
          value      = {blurRadius}
          toolTitle  = 'blur-radius'
          sx         = {{ root: { mx: 1 }}}
          onCallback = {handleSetBlurRadius}
          onSubmit   = {handleSetBlurRadius}
        />
        <ChangeStyleItem
          value      = {spreadRadius}
          toolTitle  = 'spread-radius'
          sx         = {{ root: { mx: 1 }}}
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
