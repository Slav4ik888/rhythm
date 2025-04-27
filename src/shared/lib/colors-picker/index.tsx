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
  const [color, setColor] = useState(() => rgbaStringToRgba(defaultColor));
  // Для того, чтобы при переключении между элементами, в выбранны не подтягивался цвет предыдущего
  // для этого храним предыдущее значение defaultColor
  const prevDefaultColorRef = useRef(defaultColor);
  const [isChanges, setIsChanges] = useState(false); // Было ли хотя бы 1 изменение
  

  useEffect(() => {
    setColor(rgbaStringToRgba(defaultColor));
  }, [defaultColor]);
  

  useDebouncyEffect(() => {
    // Не обновлять значение, если в компоненте оно ещё не существует (например, его ещё ни сразу не устанавливали)
    if (defaultColor === undefined && color === undefined) return;
    
    // Не обновлять значение, при первоначальной установке color
    if (rgba(color) === defaultColor && ! isChanges) return; // Вроде устранил с помощью isChanges - баг в том, что если изменили defaultColor, то вернуть его же система не даст
    
    // Если defaultColor изменился, обновляем color
    if (prevDefaultColorRef.current !== defaultColor) {
      prevDefaultColorRef.current = defaultColor; // Обновляем предыдущее значение
    }
    else {
      if (rgba(color) !== defaultColor) {
        setIsChanges(true);
        onChange(rgba(color));
      }
    }
  }, 20, [isChanges, prevDefaultColorRef.current, defaultColor, color, onChange]);
  

  return <PopoverColorsPicker sx={sx} color={color} onChange={setColor} />;
});
