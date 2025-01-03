import { FC, memo, useEffect, useMemo, useState } from 'react';
import { ItemStylesField, useDashboardView } from 'entities/dashboard-view';
import { BoxShadowSetupComponent } from './component';



const splitShadow = (value: number | string | undefined = '') => String(value).split('px').map(item => item.trim());


interface Props {
  onChange: (field: ItemStylesField, value: number | string) => void
}

/**
 * box-shadow setup container
 */
export const BoxShadowSetupContainer: FC<Props> = memo(({ onChange }) => {
  const { styleValueByField } = useDashboardView({ field: 'boxShadow' });
  const [oX = 1, oY = 1, bR = 3, sR = 0, clr = 'rgba(184, 184, 184, 1)'] = useMemo(() => splitShadow(styleValueByField), []);

  const [offsetX,      setOffsetX]      = useState(Number(oX));
  const [offsetY,      setOffsetY]      = useState(Number(oY));
  const [blurRadius,   setBlurRadius]   = useState(Number(bR));
  const [spreadRadius, setSpreadRadius] = useState(Number(sR));
  const [color,        setColor]        = useState(clr);

  useEffect(() => {
    const [oX = 1, oY = 1, bR = 3, sR = 0, clr = 'rgba(184, 184, 184, 1)'] = splitShadow(styleValueByField);

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
    <BoxShadowSetupComponent
      offsetX           = {offsetX}
      offsetY           = {offsetY}
      blurRadius        = {blurRadius}
      spreadRadius      = {spreadRadius}
      color             = {color}
      onSetOffsetX      = {handleSetOffsetX}
      onSetOffsetY      = {handleSetOffsetY}
      onSetBlurRadius   = {handleSetBlurRadius}
      onSetSpreadRadius = {handleSetSpreadRadius}
      onSetColor        = {handleSetColor}
    />
  )
});
