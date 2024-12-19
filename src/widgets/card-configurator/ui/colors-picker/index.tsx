import { FC, memo, useState } from 'react';
import { PopoverColorsPicker } from './popover-colors-picker';
import { useDebouncyEffect } from 'use-debouncy';



interface Props {
  defaultColor : string
  onChange     : (color: string) => void
}


export const TextFieldColorPicker: FC<Props> = memo(({ defaultColor, onChange }) => {
  const [color, setColor] = useState(defaultColor);

  useDebouncyEffect(() => onChange(color), 200, [color]);
  

  return <PopoverColorsPicker color={color} onChange={setColor} />;

});
