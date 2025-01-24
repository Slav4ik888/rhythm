import { FC, memo, useState, useEffect, MouseEvent } from 'react';
import { ItemStylesField, RgbaString } from 'entities/dashboard-view';
import { ColorPicker } from 'shared/lib/colors-picker';
import { splitGradinetRgba, SplittedLinerGradient } from '../utils';
import { linearGradient } from 'shared/styles';
import { InputByScheme } from '../../../../base-features-components';



interface Props {
  defaultValue : RgbaString
  gradients    : SplittedLinerGradient
  onChange     : (field: ItemStylesField, value: number | string) => void
}


/** background linear-gradient*/
export const SetLinearGradient: FC<Props> = memo(({ defaultValue = '', gradients, onChange }) => {
  const [deg, setDeg]     = useState(gradients[0] as unknown as number || 15);
  const [main, setMain]   = useState(gradients[1] || defaultValue as string);
  const [state, setState] = useState(gradients[2] || defaultValue as string);

  useEffect(() => {
    setDeg   (gradients[0] as unknown as number || 15);
    setMain  (gradients[1] || defaultValue as string);
    setState (gradients[2] || defaultValue as string);
  }, [defaultValue, gradients]);

  const handleDeg = (e: MouseEvent, value: number | string) => {
    setDeg(value as number);
    onChange('background', linearGradient(main, state, value as number));
  };

  const handleGrainentMain = (value: string) => {
    setMain(value);
    onChange('background', linearGradient(value, state, deg as number));
  };

  const handleGrainentState = (value: string) => {
    setState(value);
    onChange('background', linearGradient(main, value, deg as number));
  };
 

  return (
    <>
      <InputByScheme
        type      = 'number'
        scheme    = 'styles.background'
        width     = '4rem'
        toolTitle = 'Угол поворота градиента'
        transform = {(v: string | number) => splitGradinetRgba(v as string)?.[0]}
        onChange  = {handleDeg}
        onSubmit  = {handleDeg}
      />
      <ColorPicker
        defaultColor = {main}
        onChange     = {handleGrainentMain}
      />
      <ColorPicker
        defaultColor = {state}
        onChange     = {handleGrainentState}
      />
    </>
  )
});
