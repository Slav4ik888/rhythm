import { FC, memo, useEffect, useState } from 'react';
import { PopoverColorsPicker } from './popover-colors-picker';
import { useDebouncyEffect } from 'use-debouncy';



interface Props {
  defaultColor : string
  onChange     : (color: string) => void
}


export const ColorPicker: FC<Props> = memo(({ defaultColor, onChange }) => {
  const [color, setColor] = useState(defaultColor);

  useEffect(() => {
    setColor(defaultColor);
  }, [defaultColor]);

  useDebouncyEffect(() => onChange(color), 100, [color]);
  

  return <PopoverColorsPicker color={color} onChange={setColor} />;

});
