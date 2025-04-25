import { FC, memo, useEffect, useRef, useState } from 'react';
import { PopoverColorsPicker } from './popover-colors-picker';
import { useDebouncyEffect } from 'use-debouncy';
import { RgbaString } from 'entities/dashboard-view';
import { rgba, rgbaStringToRgba } from './utils';
import { SxCard } from 'shared/styles';
import { ___devShow } from 'shared/helpers/strings/___dev-show';



interface Props {
  defaultColor : RgbaString
  sx?          : SxCard
  onChange     : (color: RgbaString) => void
}


export const ColorPicker: FC<Props> = memo(({ sx, defaultColor, onChange }) => {
  console.log('defaultColor: ', defaultColor, 'rgbaStringToRgba: ', rgbaStringToRgba(defaultColor));

  const [color, setColor] = useState(() => rgbaStringToRgba(defaultColor));
  const prevDefaultColorRef = useRef(defaultColor); // Храним предыдущее значение defaultColor

  
  useEffect(() => {
    setColor(rgbaStringToRgba(defaultColor));
  }, [defaultColor]);
  

  useDebouncyEffect(() => {
    // Не обновлять значение, если в компоненте оно ещё не существует (например, его ещё ни сразу не устанавливали)
    if (defaultColor === undefined && color === undefined) return;

    // Не обновлять значение, при первоначальной установке color
    // TODO: медленно реагирует на изменение цвета
    // TODO: баг в том, что если изменили defaultColor, то вернуть его же система не даст
    if (rgba(color) === defaultColor) return;

    // Если defaultColor изменился, обновляем color
    if (prevDefaultColorRef.current !== defaultColor) {
      prevDefaultColorRef.current = defaultColor; // Обновляем предыдущее значение
    }
    else {
      onChange(rgba(color));
    }
  }, 20, [color, onChange]);
  

  return <PopoverColorsPicker sx={sx} color={color} onChange={setColor} />;
});
