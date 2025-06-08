import { FC, memo, useCallback, useMemo, } from 'react';
import { ViewItemStylesField, ViewItem } from 'entities/dashboard-view';
import { BoxShadowSetupComponent } from './component';
import { splitShadow } from './utils';



interface Props {
  selectedItem : ViewItem | undefined
  onChange     : (field: ViewItemStylesField, value: number | string) => void
}

/** box-shadow setup container */
export const BoxShadowSetupContainer: FC<Props> = memo(({ selectedItem, onChange }) => {
  const [oX = 1, oY = 1, bR = 3, sR = 0, clr = 'rgba(184, 184, 184, 1)'] = useMemo(() =>
    splitShadow(selectedItem?.styles?.boxShadow),
     [selectedItem]);

  const handleChange = useCallback((value: string | number, index: number) => {
    switch (index) {
      case 0: return onChange('boxShadow', `${value}px ${oY}px ${bR}px ${sR}px ${clr}`)
      case 1: return onChange('boxShadow', `${oX}px ${value}px ${bR}px ${sR}px ${clr}`)
      case 2: return onChange('boxShadow', `${oX}px ${oY}px ${value}px ${sR}px ${clr}`);
      case 3: return onChange('boxShadow', `${oX}px ${oY}px ${bR}px ${value}px ${clr}`);
      case 4: return onChange('boxShadow', `${oX}px ${oY}px ${bR}px ${sR}px ${value}`);
      default: return undefined
    }
  }, [oX, oY, bR, sR, clr, onChange]);


  return (
    <BoxShadowSetupComponent
      selectedItem = {selectedItem}
      color        = {clr}
      onChange     = {handleChange}
    />
  )
});
