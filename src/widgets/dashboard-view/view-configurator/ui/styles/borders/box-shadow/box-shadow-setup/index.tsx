import { FC, memo, useMemo, } from 'react';
import { ViewItemStylesField, useDashboardView } from 'entities/dashboard-view';
import { BoxShadowSetupComponent } from './component';
import { splitShadow } from './utils';



interface Props {
  onChange: (field: ViewItemStylesField, value: number | string) => void
}


/**
 * box-shadow setup container
 */
export const BoxShadowSetupContainer: FC<Props> = memo(({ onChange }) => {
  const { styleValueByField } = useDashboardView({ field: 'boxShadow' });
  const [oX = 1, oY = 1, bR = 3, sR = 0, clr = 'rgba(184, 184, 184, 1)'] = useMemo(() =>
    splitShadow(styleValueByField)
    , [styleValueByField]);


  const handleChange = (value: string | number, index: number) => {
    switch (index) {
      case 0: return onChange('boxShadow', `${value}px ${oY}px ${bR}px ${sR}px ${clr}`)
      case 1: return onChange('boxShadow', `${oX}px ${value}px ${bR}px ${sR}px ${clr}`)
      case 2: return onChange('boxShadow', `${oX}px ${oY}px ${value}px ${sR}px ${clr}`);
      case 3: return onChange('boxShadow', `${oX}px ${oY}px ${bR}px ${value}px ${clr}`);
      case 4: return onChange('boxShadow', `${oX}px ${oY}px ${bR}px ${sR}px ${value}`);
      default: break;
    }
  };


  return (
    <BoxShadowSetupComponent
      color    = {clr}
      onChange = {handleChange}
    />
  )
});
