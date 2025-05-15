import { FC, memo, useState, useEffect, MouseEvent, useCallback } from 'react';
import { ViewItemStylesField, RgbaString, ViewItem } from 'entities/dashboard-view';
import { ColorPicker } from 'shared/lib/colors-picker';
import { splitGradinetRgba, SplittedLinerGradient } from '../utils';
import { linearGradient, SxCard } from 'shared/styles';
import { InputByScheme } from '../../../../base-features-components';



interface Props {
  selectedItem : ViewItem | undefined
  defaultValue : RgbaString
  gradients    : SplittedLinerGradient
  sx?          : SxCard
  onChange     : (field: ViewItemStylesField, value: number | string) => void
}


/** background linear-gradient*/
export const SetLinearGradient: FC<Props> = memo(({ selectedItem, sx, defaultValue = '', gradients, onChange }) => {
  const [deg, setDeg]     = useState(gradients[0] as unknown as number || 15);
  const [main, setMain]   = useState(gradients[1] || defaultValue as string);
  const [state, setState] = useState(gradients[2] || defaultValue as string);

  useEffect(() => {
    setDeg   (gradients[0] as unknown as number || 15);
    setMain  (gradients[1] || defaultValue as string);
    setState (gradients[2] || defaultValue as string);
  }, [defaultValue, gradients, setDeg, setMain, setState]);

  const handleDeg = useCallback((e: MouseEvent, value: number | string) => {
    setDeg(value as number);
    onChange('background', linearGradient(main, state, value as number));
  }, [main, state, setDeg, onChange]);

  const handleGrainentMain = useCallback((value: string) => {
    setMain(value);
    onChange('background', linearGradient(value, state, deg as number));
  }, [state, deg, setMain, onChange]);

  const handleGrainentState = useCallback((value: string) => {
    setState(value);
    onChange('background', linearGradient(main, value, deg as number));
  }, [main, deg, setState, onChange]);
 

  return (
    <>
      <InputByScheme
        type         = 'number'
        selectedItem = {selectedItem}
        scheme       = 'styles.background'
        width        = '4rem'
        toolTitle    = 'Угол поворота градиента'
        transform    = {(v: string | number) => splitGradinetRgba(v as string)?.[0]}
        onChange     = {handleDeg}
        onSubmit     = {handleDeg}
      />
      <ColorPicker
        defaultColor = {main}
        sx           = {sx}
        onChange     = {handleGrainentMain}
      />
      <ColorPicker
        defaultColor = {state}
        sx           = {sx}
        onChange     = {handleGrainentState}
      />
    </>
  )
});
