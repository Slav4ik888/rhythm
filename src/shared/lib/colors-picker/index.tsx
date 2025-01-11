import { FC, memo, useEffect, useState } from 'react';
import { PopoverColorsPicker } from './popover-colors-picker';
import { useDebouncyEffect } from 'use-debouncy';
import { RgbaString } from 'entities/dashboard-view';
import { rgba, rgbaStringToRgba } from './utils';



interface Props {
  defaultColor : RgbaString
  onChange     : (color: RgbaString) => void
}


export const ColorPicker: FC<Props> = memo(({ defaultColor, onChange }) => {
  const [color, setColor] = useState(() => rgbaStringToRgba(defaultColor));

  useEffect(() => {
    setColor(rgbaStringToRgba(defaultColor));
  }, [defaultColor]);

  useDebouncyEffect(() => {
    // Не обновлять значение, если в компоненте оно ещё не существует (например, его ещё ни сразу не устанавливали)
    if (defaultColor === undefined) return;
    
    onChange(rgba(color));
  }, 50, [color]);
  

  return <PopoverColorsPicker color={color} onChange={setColor} />;

});
