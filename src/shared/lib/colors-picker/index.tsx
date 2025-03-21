import { FC, memo, useEffect, useState } from 'react';
import { PopoverColorsPicker } from './popover-colors-picker';
import { useDebouncyEffect } from 'use-debouncy';
import { RgbaString } from 'entities/dashboard-view';
import { rgba, rgbaStringToRgba } from './utils';
import { SxCard } from 'shared/styles';



interface Props {
  defaultColor : RgbaString
  sx?          : SxCard
  onChange     : (color: RgbaString) => void
}


export const ColorPicker: FC<Props> = memo(({ sx, defaultColor, onChange }) => {
  const [color, setColor] = useState(() => rgbaStringToRgba(defaultColor));

  useEffect(() => {
    setColor(rgbaStringToRgba(defaultColor));
  }, [defaultColor]);

  useDebouncyEffect(() => {
    // Не обновлять значение, если в компоненте оно ещё не существует (например, его ещё ни сразу не устанавливали)
    if (defaultColor === undefined && color === undefined) return;

    // Не обновлять значение, при первоначальной установке color
    // TODO: баг в том, что если изменили defaultColor, то вернуть его же система не даст
    if (rgba(color) === defaultColor) return;

    onChange(rgba(color));
  }, 30, [color, defaultColor, onChange]);
  

  return <PopoverColorsPicker sx={sx} color={color} onChange={setColor} />;

});
